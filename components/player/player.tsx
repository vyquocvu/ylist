import { useEffect, useState } from "react";
import { Howl } from "howler";


interface PlayerProps {
  playId: string;
  video: any;
}

let interval: any | null = null;

const Player = ({ playId, video }: PlayerProps) => {
  const [jump, setJump] = useState(0);
  const [sound, setSound] = useState<Howl>();
  const [isMute, setIsMute] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState<{
    min: number;
    sec: number;
  }>({
    min: 0,
    sec: 0
  });
  const [currTime, setCurrTime] = useState<{
    min: number;
    sec: number;
  }>({
    min: 0,
    sec: 0
  });

  useEffect(() => {
    if (playId) {
      setIsLoaded(false);
      const url = `/api/play/${playId}`;
      // const formats = video?.formats?.filter((f: any) => f.hasAudio)
      //   .sort(( a: any, b: any ) => {
      //     return a.audioBitrate - b.audioBitrate;
      //   });
      // const url = formats[0].url;
      const newSound = new Howl({
        src: [url],
        format: ['mp3'],
        xhr: {
          method: 'GET',
        },
      });
      setSound(newSound);
      newSound.once('load', function(){
        setIsLoaded(true);
      });
      if (!isPlaying) {
        newSound.play();
        setIsPlaying(true);
      }
    }
  }, [playId]);

  useEffect(() => {
    if (isLoaded && sound && sound.duration()) {
      const sec = sound.duration();
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    } else {
      setTime({
        min: 0,
        sec: 0
      });
    }
  }, [isLoaded]);

  useEffect(() => {
    if (!interval && isLoaded) {
      interval = setInterval(() => {
        if (sound) {
          const seek = sound.seek();
          setSeconds(seek as number);
          const min = Math.floor(seek / 60);
          const sec = Math.floor(seek % 60);
          setCurrTime({
            min,
            sec
          });
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLoaded]);

  const playingButton = () => {
    if (isPlaying) {
      sound?.pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      sound?.play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const handleChangVolume = (e: any) => {
    const volume = e.target.value;
    Howler.volume(+volume/100);
  }

  const handleMute = () => {
    Howler.mute(!isMute);
    setIsMute(!isMute);
  }

  const thumbnail = playId ? `https://i.ytimg.com/vi/${playId}/default.jpg` : 'https://source.unsplash.com/bsLXJsucvxc/100x100';

  return (
    <div id="player" className={`bg-black font-regular w-screen bottom-0 flex flex-row overflow-hidden ${playId ? 'h-24' : 'h-0'}`}>
      <div id="cover-and-title" className="flex w-1/3 justify-between">
        <div id="cover" className="w-24 h-24">
          <img src={thumbnail} className="object-cover h-full w-full" />
        </div>
        <div id="title" className="w-8/12 text-gray-200 flex flex-col justify-center">
          <h2 className="font-bold text-lg">{video?.videoDetails?.title || 'no title'}</h2>
          <div className="text-gray-300 overflow-ellipsis whitespace-nowrap overflow-x-hidden capitalize">may i elaborate? Daly wisdom from JB smove</div>
        </div>
      </div>
      <div id="controlers" className="w-1/3 flex flex-col h-full">
        <div className="h-3/5 flex justify-center items-center">
          <div className="rounded-full h-8 w-8 text-gray-300 hover:text-gray-100 cursor-pointer flex mx-2">
            <svg className="p-2 fill-current" viewBox="0 0 32 32">
              <g>
                <path d="M30.5,2.62a1,1,0,0,0-1,0L7.82,15.13a1,1,0,0,0,0,1.74L29.5,29.38a1,1,0,0,0,1.5-.86v-25A1,1,0,0,0,30.5,2.62ZM29,26.78,10.32,16,29,5.22Z"></path>
                <path d="M2,5.2a1,1,0,0,0-1,1V25.8a1,1,0,0,0,2,0V6.2A1,1,0,0,0,2,5.2Z"></path>
              </g>
            </svg>
          </div>
          <div className="rounded-full h-10 w-10 text-gray-100 cursor-pointer flex mx-2" onClick={playingButton}>
            <svg className="p-2 fill-current" viewBox="0 0 32 32">
              <path d="M28.62,15.13,4.38,1.13A1,1,0,0,0,2.88,2V30a1,1,0,0,0,.5.87,1,1,0,0,0,1,0l24.24-14A1,1,0,0,0,28.62,15.13ZM4.88,28.27V3.73L26.12,16Z"></path>
            </svg>
          </div>
          <div className="rounded-full h-8 w-8 text-gray-300 hover:text-gray-100 cursor-pointer flex mx-2">
            <svg className="p-2 fill-current" viewBox="0 0 32 32">
              <g>
                <path d="M24.18,15.13,2.5,2.62A1,1,0,0,0,1,3.48v25a1,1,0,0,0,1.5.86L24.18,16.87A1,1,0,0,0,24.18,15.13ZM3,26.78V5.22L21.68,16Z"></path>
                <path d="M30,5.2a1,1,0,0,0-1,1V25.8a1,1,0,0,0,2,0V6.2A1,1,0,0,0,30,5.2Z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="h-2/5 w-full flex justify-between items-center">
          <span className="text-sm text-gray-200 w-12 text-left">{currTime.sec ? `${currTime.min}:${currTime.sec}` : '00:00'}</span>
          <input
            className="h-1 w-full"
            type="range"
            max={(sound?.duration() || 0)}
            value={jump || seconds || 0}
            onChange={(e) => {
              const s = Number(e.target.value);
              setJump(s);
            }}
            onMouseUp={() => {
              sound?.seek(jump);
              setTimeout(() => {
                setJump(0);
              }, 1000);
            }}
          />
          <span className="text-sm text-gray-200 w-12 text-right">{time.sec ? `${time.min}:${time.sec}`: '00:00'}</span>
        </div>
      </div>
      <div id="volume" className="w-1/3 flex justify-end items-center text-gray-100 p-3">
        <div className="w-4 mx-1">
          <svg viewBox="0 0 32 32" className="fill-current">
            <g>
              <path d="M1.5,11.66a1,1,0,0,0,1,0l7.75-4.4a1,1,0,0,0,0-1.74L2.49,1.13A1,1,0,0,0,1,2v8.8A1,1,0,0,0,1.5,11.66ZM3,3.72,7.72,6.4,3,9.08Z"></path>
              <path d="M14,7.4H30a1,1,0,0,0,0-2H14A1,1,0,0,0,14,7.4Z"></path>
              <path d="M30,13.27H2a1,1,0,0,0,0,2H30A1,1,0,0,0,30,13.27Z"></path>
              <path d="M30,21.13H2a1,1,0,0,0,0,2H30A1,1,0,0,0,30,21.13Z"></path>
              <path d="M30,29H2a1,1,0,0,0,0,2H30A1,1,0,0,0,30,29Z"></path>
            </g>
          </svg>
        </div>
        <div className="w-4 mx-1" onClick={handleMute}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-volume-2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </div>
        <div className="w-24 h-3 flex">
          <input
            type="range"
            className="h-1 w-full"
            disabled={isMute}
            onChange={handleChangVolume}
          />
        </div>
      </div>
    </div>
  )
};

export default Player;