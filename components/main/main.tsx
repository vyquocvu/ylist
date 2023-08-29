import { ChangeEvent, useState } from "react";
import Head from "next/head";
import Swal from 'sweetalert2';
import Player from "../player/player";
import SideBar from "../sidebar/sidebar";
import InputBar from "../inputbar/inputbar";
import { getTime } from "../../utils/time";
import { usePlayer } from "../../store/usePlayer";
import { usePlaylist } from "../../store/usePlaylist";
import { IPlaylist, IVideo } from "../../types/playlist";
import { Image } from "@nextui-org/react";

const Main = () => {
  const [yurl, setYurl] = useState('');
  const [isError, setIsError] = useState(false);
  const [video, setVideo] = useState<any>({});

  const { current, playlists, setPlayListById } = usePlaylist();
  const { playingId, setPlayingId, isRepeat, isPlaying } = usePlayer();

  const currentPlaylist = playlists?.find((item: IPlaylist) => item.id === current);
  const videos: IVideo[] | [] = currentPlaylist?.videos || [];

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const src = e.target.value;
    setYurl(src);
    setIsError(false);
  }

  const handleClickPlay = (id: string) => {
    if (playingId === id) {
      return;
    }
    const playingVideo = videos.find((item: any) => item.videoId === id);
    setVideo(playingVideo);
    setPlayingId(id);
  }

  const handleNext = () => {
    const index = videos.findIndex((item: any) => item.videoId === playingId);
    if (index < videos.length - 1) {
      setPlayingId(videos[index + 1].videoId);
    } else if (isRepeat) {
      // repeat
      setPlayingId(videos[0].videoId);
    }
  }

  const handlePrev = () => {
    const index = videos.findIndex((item: any) => item.videoId === playingId);
    if (index > 0) {
      setPlayingId(videos[index - 1].videoId);
    }
  }

  const handleDelete = (id: string) => {
    const newVideos = videos.filter((item: any) => item.videoId !== id);
    setPlayListById(current, newVideos);
  }

  const handleLike = (id: string) => {
    const newVideos = videos.map((item: any) => {
      if (item.videoId === id) {
        return {
          ...item,
          isLiked: !item.isLiked
        }
      }
      return item;
    });
    setPlayListById(current, newVideos);
  }

  const handleSubmit = async () => {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = yurl.match(regExp);
    if (match && match[2].length == 11) {
      if (videos.find((item: any) => match && item.videoId === match[2])) {
        setIsError(true);
        return;
      }
      const info = await fetch('/api/info/' + match[2]);
      const data = await info.json();
      if (data.videoDetails.lengthSeconds > 480) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          html: `The video length exceeds the allowed limit',
          <br/> Go to <a target="_blank" href="${yurl}">Youtube</a>`,
        }).then(() => {
          setYurl('');
        });
        return;
      }
      const newvid = {
        ownerChannelName: data.videoDetails.ownerChannelName,
        title: data.videoDetails.title,
        uploadDate: data.videoDetails.uploadDate,
        videoId: data.videoDetails.videoId,
        lengthSeconds: data.videoDetails.lengthSeconds,
        video_url: data.videoDetails.video_url,
      }
      setPlayListById(current, [...videos, newvid])
      setYurl('');
    } else {
      setIsError(true);
      return;
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>{video?.title || 'Playing'}</title>
      </Head>
      <div className="flex flex-1 rounded-2xl w-full overflow-hidden text-left text-sm font-regular">
        <SideBar />
        <div className="relative w-full overflow-hidden text-center z-0 ">
          <div className="w-full h-[calc(100%-70px)] overflow-auto">
            {
              videos.map((video: any) => (
                <div key={`${video?.videoId}`} className="flex border-b border-gray-800 items-center">
                  {
                    playingId === video?.videoId ? (
                      <div className="md:p-3 w-8 flex-shrink-0">
                        {
                          isPlaying ? <img src="/audio-wave.gif" className="w-5" /> : <ion-icon name="pause-outline"/>
                        }
                      </div>) : (
                      <div onClick={() => handleClickPlay(video?.videoId as string)} className="cursor-pointer md:p-3 w-8 flex-shrink-0">
                        <ion-icon name="play-outline"/>
                      </div>
                    )
                  }
                  <div className="p-3 w-full flex items-center text-xs">
                    <img height={30} src={`https://i.ytimg.com/vi/${video?.videoId}/mqdefault.jpg`} />
                    <div className="flex flex-col text-left">
                      <span className="pl-4 w-full line-clamp-1 text-left">
                        {video?.title || ''} 
                      </span>
                      <span className="pl-4 w-full line-clamp-1 md:hidden">{video?.ownerChannelName || ''}</span>
                    </div>
                  </div>
                  <div className="p-3 w-full hidden md:block">{video?.ownerChannelName || ''}</div>

                  <div className="md:p-3 w-fit flex-shrink-0 hidden md:block cursor-pointer" onClick={() => handleLike(video.videoId)}>
                    {
                      video?.isLiked ? (
                        <ion-icon name="heart"/>
                      ) : (
                        <ion-icon name="heart-outline"/>
                      )
                    }
                  </div>
                  <div className="pl-2 w-fit hidden md:flex">
                    <a className="flex leading-3 gap-1" target="_blank" href={video.video_url}>
                      Open <ion-icon name="open-outline"></ion-icon>
                    </a>
                  </div>
                  <div className="p-3 w-12 flex-shrink-0 text-right">{getTime(+(video?.lengthSeconds || 0))}</div>
                  <div onClick={() => handleDelete(video?.videoId)} className="p-3 w-8 flex-shrink-0 cursor-pointer">
                    <ion-icon name="trash-outline"/>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="absolute bottom-0 h-[68px] border-t border-solid border-black-10 w-full overflow-hidden flex flex-col py-3 box-border items-center text-left text-sm text-black-20">
            <InputBar isError={isError} yurl={yurl} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <Player video={video} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}
export default Main;