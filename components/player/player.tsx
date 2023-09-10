import { useEffect, useState } from "react";
import { Howl } from "howler";
import { getSeconds } from "../../utils/time";
import { usePlayer } from "../../store/usePlayer";


interface PlayerProps {
  video: any;
  handleNext: () => void;
  handlePrev: () => void;
}

let interval: any | null = null;

const Player = ({ video, handleNext, handlePrev }: PlayerProps) => {
  const [jump, setJump] = useState(0);
  const [sound, setSound] = useState<Howl>();
  const [isMute, setIsMute] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { playingId, isPlaying, isRepeat, setIsPlaying, setRepeat } = usePlayer();


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

  const reset = () => {
    if (sound) {
      sound.stop();
    }
    clearInterval(interval);
    interval = null;
    setJump(0);
    setSeconds(0);
    setIsLoaded(false);
    setIsPlaying(false);
    setCurrTime({ min: 0, sec: 0 });
  }

  useEffect(() => {
    reset();
    if (playingId) {
      setIsLoaded(false);
      const url = `/api/play/${playingId}`;
      const newSound = new Howl({
        src: [url],
        format: ['mp3'],
        xhr: {
          method: 'GET',
        },
        onend: function() {
          // autoplay next
          reset();
          handleNext();
        }      
      });
      newSound.once('load', function(){
        setIsLoaded(true);
      });
      newSound.play();
      setIsPlaying(true);
      setSound(newSound);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playingId]);

  useEffect(() => {
    if (isLoaded && sound && sound.duration()) {
      const sec = Math.ceil(sound.duration());
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
  }, [isLoaded, sound]);

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
  }, [isLoaded, sound]);

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

  const thumbnail = playingId ? `https://i.ytimg.com/vi/${playingId}/mqdefault.jpg` : 'https://source.unsplash.com/bsLXJsucvxc/100x100';

  return (
    <div id="player" className={`font-regular w-screen border-t border-solid border-black-10 bottom-0 flex flex-cols md:flex-row overflow-hidden ${playingId ? 'h-24' : 'h-0'}`}>
      <div className="flex h-full items-center">
        <div id="cover-and-title" className="flex w-1/3 items-center justify-start gap-2 px-2">
          <div id="cover" className="h-20 hidden md:block">
            <img alt="" src={thumbnail} className="object-cover h-full w-full" />
          </div>
          <div id="title" className="w-8/12 text-gray-700 flex flex-col justify-center">
            <div className="font-semibold text-sm line-clamp-3 my-0 scroll-left break-keep whitespace-nowrap">
              <p className="my-0">
              {video?.title || 'no title'}
              </p>
            </div>
            <span className="text-xs line-clamp-1 text-gray-500">{video?.ownerChannelName || ''}</span>
          </div>
        </div>
        <div id="controlers" className="w-1/3 flex flex-col text-gray-700 ">
          <div className="h-3/5 flex justify-center items-center">
            <div
              onClick={() => setRepeat(!isRepeat)}
              className={`rounded-full scale-110 h-8 w-8 hover:text-gray-300 ${isRepeat ? 'text-gray-700': 'text-gray-300'} cursor-pointer flex mx-2 items-center justify-center`}
            >
              <ion-icon name="repeat-outline"></ion-icon>
            </div>
            <div className="rounded-full scale-75 h-8 w-8 hover:text-gray-300 cursor-pointer flex mx-2 items-center justify-center" onClick={handlePlayPrev}>
              <ion-icon name="play-skip-back-sharp" size="large" />
            </div>
            <div className="rounded-full scale-105 hover:text-gray-300 cursor-pointer flex mx-2 items-center justify-center" onClick={playingButton}>
              {
                isPlaying ? <ion-icon name="pause-circle-sharp" size="large"/> : <ion-icon name="play-circle-sharp" size="large" />
              }
            </div>
            <div className="rounded-full scale-75 h-8 w-8 hover:text-gray-300 cursor-pointer flex mx-2 items-center justify-center" onClick={handlePlayNext}>
              <ion-icon name="play-skip-forward-sharp" size="large" />
            </div>
          </div>
        </div>
        <div id="volume" className="w-1/3 flex justify-end items-center text-gray-500 p-3">
          <div className="w-4 mx-1 scale-125" onClick={handleMute}>
            {
              isMute ? <ion-icon name="volume-mute-outline" /> : <ion-icon name="volume-high-outline" />
            }
          </div>
          <div className="w-24 h-3 hidden md:flex">
            <input
              type="range"
              disabled={isMute}
              className="h-0.5 w-full"
              onChange={handleChangVolume}
            />
          </div>
        </div>
      </div>
      <div id="process" className="h-2 -mt-2 md:-mt-4 w-full md:w-1/3 mx-auto justify-between items-center flex">
        <span className="text-xs text-gray-700 w-12 text-left hidden md:flex">
          {currTime.sec || currTime.min ? `${currTime.min}:${getSeconds(currTime.sec)}` : '-:--'}
        </span>
        <input
          type="range"
          className="h-0.5 w-full"
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
        <span className="text-sm text-gray-700 w-12 text-right hidden md:flex">
          {time.sec || time.min ? `${time.min}:${getSeconds(time.sec)}`: '-:--'}
        </span>
      </div>
    </div>
  )
};

export default Player;