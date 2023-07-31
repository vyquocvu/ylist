import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { playlists as mock } from "../../data";
import { usePlaylist } from "../../store/usePlaylist";
import { IPlaylist } from "../../types/playlist";

const SideBar = () => {
  const {
    current,
    playlists,
    setCurrent,
    setPlaylists,
  } = usePlaylist();

  const [isAddNewList, setIsAddNewList] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (!playlists.length) {
      setPlaylists(mock as IPlaylist[]);
      setCurrent('1');
    }
  }, []);

  const handleAddNewList = () => {
    if (!name) {
      return;
    }
    const newList = {
      id: `${nanoid(8)}`,
      name: name,
      videos: []
    };
    setPlaylists([...playlists, newList]);
    setIsAddNewList(false);
  }

  const handleDelete = (id: string) => (e: any) => {
    e.preventDefault();
    const newPlaylist = playlists.filter((item: any) => item.id !== id);
    setPlaylists(newPlaylist);
  }

  return (
    <div className="flex flex-col justify-between box-border w-72 pt-3 border border-solid border-black-10 z-10">
      <div className="top-5y-start flex-col flex gap-1 px-3">
        {
          playlists.map((item: any) => (
            <div
              key={item.id}
              className={`self-stretch rounded-lg cursor-pointer flex flex-row p-3 items-center justify-start relative gap-3 hover:bg-gray-300 ${item.id === current ? 'bg-gray-300' : ''}`}
              onClick={() => setCurrent(item.id)}
            >
              <ion-icon name="musical-notes-outline" />
              <div className="relative leading-5">
                {item.name}
              </div>
              <div className="absolute right-2" onClick={handleDelete(item.id)}>
                <ion-icon name="trash-outline" />
              </div>
            </div>
          ))
        }
        {
          isAddNewList ? (
             <div className="self-stretch rounded-lg cursor-pointer flex flex-row mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.code === 'Enter') {
                      handleAddNewList();
                    }
                  }}
                  value={name}
                  placeholder="Playlist name"
                  className="h-10 self-stretch flex-1 outline-none bg-gray-200 rounded-lg px-4" /> 
              </div>
            ) : (
              <button
                onClick={() => setIsAddNewList(true)}
                className="rounded-xl bg-black-100 cursor-pointer h-11 flex flex-row mt-2 py-2 px-4 box-border w-full items-center justify-center gap-3 text-center text-lg text-white-100">
              <div className="leading-[28px]">
                + New list
              </div>
            </button>
          )
        }
      </div>
      <div className="w-auto flex flex-col items-start justify-start gap-1 hidden">
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
  );
};

export default SideBar;
