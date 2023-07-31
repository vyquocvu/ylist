import { useEffect, useState } from "react";
import { Howl } from "howler";
import { getSeconds } from "../../utils/time";


interface PlayerProps {
  playId: string;
  video: any;
  handleNext: () => void;
  handlePrev: () => void;
}

let interval: any | null = null;

const Player = ({ playId, video, handleNext, handlePrev }: PlayerProps) => {
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
      const newSound = new Howl({
        src: [url],
        format: ['mp3'],
        xhr: {
          method: 'GET',
        },
        onend: function() {
          // autoplay next
          clearInterval(interval);
          setJump(0);
          setSeconds(0);
          setIsLoaded(false);
          setIsPlaying(false);
          handleNext();
        }      
      });
      newSound.once('load', function(){
        setIsLoaded(true);
      });

      if (!isPlaying) {
        newSound.play();
        setIsPlaying(true);
      }
      setSound(newSound);
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

  const handlePlayNext = () => {
    sound?.pause(); // this will pause the audio
    setIsPlaying(false);
    handleNext();
  }

  const handlePlayPrev = () => {
    sound?.pause(); // this will pause the audio
    setIsPlaying(false);
    handlePrev();
  }

  const thumbnail = playId ? `https://i.ytimg.com/vi/${playId}/default.jpg` : 'https://source.unsplash.com/bsLXJsucvxc/100x100';

  return (
    <div id="player" className={`font-regular w-screen bottom-0 flex flex-row overflow-hidden ${playId ? 'h-24' : 'h-0'}`}>
      <div id="cover-and-title" className="flex w-1/3 items-center justify-start gap-2 px-2">
        <div id="cover" className="h-20">
          <img src={thumbnail} className="object-cover h-full w-full" />
        </div>
        <div id="title" className="w-8/12 text-gray-700 flex flex-col justify-center">
          <h2 className="font-normal text-lg line-clamp-3	">{video?.title || 'no title'}</h2>
        </div>
      </div>
      <div id="controlers" className="w-1/3 flex flex-col h-full text-gray-700 ">
        <div className="h-3/5 flex justify-center items-center">
          <div className="rounded-full scale-75 h-8 w-8 hover:text-gray-300 cursor-pointer flex mx-2 items-center justify-center" onClick={handlePlayPrev}>
            <ion-icon name="play-skip-back-sharp" size="large" />
          </div>

          <div className="rounded-full scale-125 hover:text-gray-300 cursor-pointer flex mx-2 items-center justify-center" onClick={playingButton}>
            {
              isPlaying ? <ion-icon name="pause-outline" size="large"/> : <ion-icon name="play-outline" size="large"/>
            }
          </div>
          <div className="rounded-full scale-75 h-8 w-8 hover:text-gray-300 cursor-pointer flex mx-2 items-center justify-center" onClick={handlePlayNext}>
            <ion-icon name="play-skip-forward-sharp" size="large" />
          </div>
        </div>
        <div className="h-2/5 w-full flex justify-between items-center">
          <span className="text-sm text-gray-500 w-12 text-left">{currTime.sec ? `${currTime.min}:${getSeconds(currTime.sec)}` : '00:00'}</span>
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
          <span className="text-sm text-gray-200 w-12 text-right">{time.sec ? `${time.min}:${getSeconds(time.sec)}`: '00:00'}</span>
        </div>
      </div>
      <div id="volume" className="w-1/3 flex justify-end items-center text-gray-500 p-3">
        <div className="w-4 mx-1 hidden">
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
        <div className="w-4 mx-1 scale-125" onClick={handleMute}>
          {
            isMute ? (<ion-icon name="volume-high-outline" />) : (<ion-icon name="volume-mute-outline" />)
          }
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