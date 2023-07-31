import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IVideo, IPlaylist } from '../types/playlist';

interface IUsePlaylist {
    current: string;
    playlists: IPlaylist[];
    setCurrent: (current: string) => void;
    setPlaylists: (playlist: IPlaylist[]) => void;
    setPlayListById: (id: string, videos: IVideo[]) => void;
}

export const usePlaylist = create(
    persist<IUsePlaylist>((set, get) => ({
        current: '',
        playlists: [],
        setCurrent: (current: string) => set({ current }),
        setPlaylists: (playlists: IPlaylist[]) => set({ playlists }),
        setPlayListById: (id: string, videos: IVideo[]) => set((state: IUsePlaylist) => ({
            playlists: state.playlists.map((item: IPlaylist) => {
                if (item.id === id) {
                    item.videos = videos;
                }
                return item;
            }
            )
        })),
    }), {
        name: 'playlist-storage',
        getStorage: () => localStorage
    })
);
