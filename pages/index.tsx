import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import Player from "../components/player/player";

const Web: NextPage = () => {
  const [ids, setIds] = useState<string[]>([]);
  const [videos, setVideos] = useState<{
    [key: string]: any;
  }>({});
  const [yurl, setYurl] = useState('');
  const [playId, setPlayId] = useState<string>('');
  const [isError, setIsError] = useState(false);

  const listPlayList = [
    'Trending',
    'Lofi',
    'Gaming'
  ];

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const src = e.target.value;
    setYurl(src);
    setIsError(false);
  }

  const handleClickPlay = (id: string) => {
    setPlayId(id);
  }

  const handleSubmit = async () => {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = yurl.match(regExp);
    if (match && match[2].length == 11) {
      const info = await fetch('/api/info/'+ match[2]);
      const data = await info.json();
      console.log('data', data);
      setVideos({
        ...videos,
        [match[2]]: data
      })
      setIds([...ids, match[2]]);
      setYurl('');
    } else {
      setIsError(true);
      return;
    }
  }

  const getTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds}`;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 rounded-2xl bg-white-100 w-full overflow-hidden text-left text-sm text-black-100 font-regular">
        <div className="flex flex-col justify-between box-border w-72 pt-3 border border-solid border-black-10 z-10">
          <div className="top-5y-start gap-1 px-3">
            <button className="rounded-xl bg-black-100 cursor-pointer h-11 flex flex-row py-2 px-4 box-border w-full items-center justify-center gap-3 text-center text-lg text-white-100">
              <img className="w-5 h-5" alt="" src="/adds1.svg" />
              <div className="leading-[28px] font-semibold">
                New list
              </div>
            </button>
            {
              listPlayList.map((item) => (
                <div key={item} className="self-stretch cursor-pointer flex flex-row p-3 items-center justify-start relative gap-3">
                  <img className="relative w-6 h-6" alt="" src="/chatd7.svg" />
                  <div className="relative leading-5">
                    {item}
                  </div>
                  <img
                    className="absolute my-0 mx-[!important] top-[calc(50%_-_8px)] right-3 w-4 h-4 hidden z-[2]"
                    alt=""
                    src="/arrowlinerights8.svg"
                  />
                </div>
              ))
            }
          </div>
          <div className="w-auto flex flex-col items-start justify-start gap-1">
            <div className="self-stretch flex flex-row p-3 items-center justify-start relative gap-3">
              <img className="relative w-6 h-6" alt="" src="/trashd2.svg" />
              <div className="relative leading-5 ">
                Clear conversations
              </div>
            </div>
            <div className="self-stretch flex flex-row p-3 items-center justify-start relative gap-3">
              <img className="relative w-6 h-6" alt="" src="/sund4.svg" />
              <div className="relative leading-5 ">Light mode</div>
            </div>
            <div className="self-stretch flex flex-row p-3 items-center justify-start relative gap-3">
              <img className="relative w-6 h-6" alt="" src="/userd3.svg" />
              <div className="relative leading-5">My account</div>
            </div>
            <div className="self-stretch flex flex-row p-3 items-center justify-start relative gap-3">
              <img
                className="relative w-6 h-6"
                alt=""
                src="/arrowsquareoutd2.svg"
              />
              <div className="relative leading-5 ">{`Updates & FAQ`}</div>
            </div>
            <div className="self-stretch flex flex-row p-3 items-center justify-start relative gap-3">
              <img
                alt=""
                className="relative w-6 h-6"
                src="/signoutd2.svg"
              />
              <div className="relative leading-5 ">Log out</div>
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden text-center z-0 ">
          <div>
            {
              ids.map((id) => (
                <div key={`${id}`} className="flex border-b border-gray-800 items-center">
                  <div onClick={() => handleClickPlay(id as string)} className="cursor-pointer p-3 w-8 flex-shrink-0">
                    <svg className="p-2 fill-current" viewBox="0 0 32 32">
                      <path d="M28.62,15.13,4.38,1.13A1,1,0,0,0,2.88,2V30a1,1,0,0,0,.5.87,1,1,0,0,0,1,0l24.24-14A1,1,0,0,0,28.62,15.13ZM4.88,28.27V3.73L26.12,16Z"></path>
                    </svg>
                  </div>
                  <div className="p-3 w-8 flex-shrink-0">❤️</div>
                  <div className="p-3 w-full flex items-center">
                    <img height={30} src={`https://i.ytimg.com/vi/${id}/default.jpg`} />
                    <span className="px-4">
                      {videos[id]?.videoDetails?.title?.substring(0, 30) || ''}
                    </span>
                  </div>
                  <div className="p-3 w-full">{videos[id]?.videoDetails?.ownerChannelName || ''}</div>
                  <div className="p-3 w-full">Youtube</div>
                  <div className="p-3 w-12 flex-shrink-0 text-right">{getTime(+(videos[id]?.videoDetails?.lengthSeconds || 0))}</div>
                </div>
              )
              )
            }
          </div>
          <div className="absolute bottom-0 bg-white-80 border-t border-solid border-black-10 w-full overflow-hidden flex flex-col py-5 box-border items-center text-left text-sm text-black-20">
            <div className="rounded-xl bg-primary-light w-2/3 h-auto flex justify-between">
              <div className="flex items-center px-3">
                <div className="rounded-lg w-7 h-7 flex flex-row p-1 box-border items-center justify-center">
                  <img
                    alt=""
                    className="relative w-5 h-5"
                    src="/url.svg"
                  />
                </div>
                <img
                  alt=""
                  title="Invalid URL"
                  className={`w-4 h-4 cursor-pointer ${isError ? '' : 'hidden'}`}
                  src="/warningr3.svg"
                />
              </div>
              <input
                value={yurl}
                placeholder="Type youtube URL"
                onChange={handleOnChange}
                onKeyUp={(e) => {
                  if (e.code === 'Enter') {
                    handleSubmit();
                  }
                }}
                className="bg-transparent h-10 flex-1 outline-none"
              />
              <div className="flex flex-row items-center justify-start gap-3">
                <div className="rounded-lg w-10 h-7 flex flex-row p-1 box-border items-center justify-center">
                  <img
                    alt=""
                    className="relative w-5 h-5"
                    src="/paperplanerightr2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Player playId={playId} video={videos[playId]} />
    </div>
  );
};

export default Web;
