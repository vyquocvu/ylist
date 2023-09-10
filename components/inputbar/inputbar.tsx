import { useState } from "react";
import { usePlayer } from "../../store/usePlayer";

interface InputBarProps {
  isError: boolean;
  yurl: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const InputBar = (props: InputBarProps) => {
  const { isError, yurl, handleOnChange, handleSubmit } = props;
  const [isAddNewList, setIsAddNewList] = useState(false);
  const { playingId } = usePlayer();

  return (
    <div className={`absolute bottom-0 h-[68px] border-t border-solid border-black-10 ${isAddNewList ? 'w-full' : 'w-0'} overflow-hidden flex flex-col py-3 box-border items-center text-left text-sm text-black-20`}>
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
          className="bg-transparent h-10 flex-1 outline-none text-gray-500"
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
        <button
          onClick={() => setIsAddNewList(!isAddNewList)}
          className={`
            fixed z-90 right-8 bg-blue-600 w-10 h-10 rounded-full 
            drop-shadow-lg flex justify-center items-center text-white text-2xl 
            font-thin hover:bg-blue-700 hover:drop-shadow-2xl ${playingId ? 'bottom-20' : 'bottom-10'}`}
        >
          +
        </button>
      </div>
    </div>
  )
};

export default InputBar;