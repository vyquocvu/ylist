import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import Player from "../player/player";
import SideBar from "../sidebar/sidebar";
import InputBar from "../inputbar/inputbar";
import { getTime } from "../../utils/time";
import { usePlaylist } from "../../store/usePlaylist";
import { IPlaylist, IVideo } from "../../types/playlist";


const Main = () => {
  const [yurl, setYurl] = useState('');
  const [playId, setPlayId] = useState<string>('');
  const [isError, setIsError] = useState(false);
  const [video, setVideo] = useState<any>({});

  const { current, playlists, setPlayListById } = usePlaylist();

  console.log('playlist', playlists);
  const currentPlaylist = playlists?.find((item: IPlaylist) => item.id === current);
  const videos: IVideo[] | [] = currentPlaylist?.videos || [];

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const src = e.target.value;
    setYurl(src);
    setIsError(false);
  }

  const handleClickPlay = (id: string) => {
    if (playId === id) {
      return;
    }
    const playingVideo = videos.find((item: any) => item.videoId === id);
    setVideo(playingVideo);
    setPlayId(id);
  }

  const handleNext = () => {
    const index = videos.findIndex((item: any) => item.videoId === playId);
    if (index < videos.length - 1) {
      setPlayId(videos[index + 1].videoId);
    }
  }

  const handlePrev = () => {
    const index = videos.findIndex((item: any) => item.videoId === playId);
    if (index > 0) {
      setPlayId(videos[index - 1].videoId);
    }
  }

  const handleDelete = (id: string) => {
    const newVideos = videos.filter((item: any) => item.videoId !== id);
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
      <div className="flex flex-1 rounded-2xl bg-white-100 w-full overflow-hidden text-left text-sm text-black-100 font-regular">
        <SideBar />
        <div className="relative w-full overflow-hidden text-center z-0 ">
          <div>
            {
              videos.map((video: any) => (
                <div key={`${video?.videoId}`} className="flex border-b border-gray-800 items-center">
                  {
                    playId === video?.videoId ? (
                      <div className="p-3 w-8 flex-shrink-0">
                        <img src="/audio-wave.gif" className="w-5" />
                      </div>) : (
                      <div onClick={() => handleClickPlay(video?.videoId as string)} className="cursor-pointer p-3 w-8 flex-shrink-0">
                        <ion-icon name="play-outline"/>
                      </div>
                    )
                  }
                  <div className="p-3 w-8 flex-shrink-0 hidden">
                    <ion-icon name="heart-outline"/>
                  </div>
                  <div className="p-3 w-full flex items-center">
                    <img height={30} src={`https://i.ytimg.com/vi/${video?.videoId}/default.jpg`} />
                    <span className="px-4 line-clamp-1 text-left">
                      {video?.title || ''}
                    </span>
                  </div>
                  <div className="p-3 w-full">{video?.ownerChannelName || ''}</div>
                  <div className="p-3 w-full">Youtube</div>
                  <div className="p-3 w-12 flex-shrink-0 text-right">{getTime(+(video?.lengthSeconds || 0))}</div>
                  <div onClick={() => handleDelete(video?.videoId)} className="p-3 w-8 flex-shrink-0 cursor-pointer">
                    <ion-icon name="trash-outline"/>
                  </div>
                </div>
              )
              )
            }
          </div>
          <div className="absolute bottom-0 bg-white-80 border-t border-solid border-black-10 w-full overflow-hidden flex flex-col py-5 box-border items-center text-left text-sm text-black-20">
            <InputBar isError={isError} yurl={yurl} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <Player playId={playId} video={video} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}
export default Main;