import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const usePlaylist = create(
    persist((set, get) => ({
        current: '',
        playlist: [],
        setCurrent: (current: any) => set({ current }),
        setPlaylist: (playlist: any) => set({ playlist }),
        setPlayListById: (id: any, videos: any) => set((state: any) => ({
            playlist: state.playlist.map((item: any) => {
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
