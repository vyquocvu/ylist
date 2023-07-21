import type { NextPage } from "next";

const Web: NextPage = () => {
  const listPlayList = [
    'Trending',
    'Lofi',
    'Gaming'
  ]
  return (
    <div className="flex rounded-2xl bg-white-100 w-full h-screen overflow-hidden text-left text-sm text-black-100 font-regular">
      <div className="h-full bg-white-100 box-border w-72 pt-3 border border-solid border-black-10 z-10">
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
                  { item }
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
        <div className="absolute bottom-5 left-5 w-auto flex flex-col items-start justify-start gap-1">
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
              className="relative w-6 h-6"
              alt=""
              src="/signoutd2.svg"
            />
            <div className="relative leading-5 ">Log out</div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full overflow-hidden text-center text-29xl z-0 ">
        <div className="absolute bottom-0 bg-white-80 border-t border-solid border-black-10 w-full h-28 overflow-hidden flex flex-col pt-5 pb-10 box-border items-center text-left text-sm text-black-20">
          <div className="rounded-xl bg-primary-light w-2/3 h-auto flex justify-between">
            <div className="flex items-center px-3"> 
              <div className="rounded-lg w-7 h-7 flex flex-row p-1 box-border items-center justify-center">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/url.svg"
                />
              </div>
              <img
                alt=""
                className="w-4 h-4 hidden"
                src="/warningr3.svg"
              />
            </div>
            <input className="bg-transparent h-10 flex-1 outline-none" placeholder="Type url" />

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
  );
};

export default Web;
