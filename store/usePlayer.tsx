import { create } from 'zustand'

interface IUsePlayer {
    playingId: string;
    setPlayingId: (playingId: string) => void;
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    isRepeat: boolean;
    setRepeat: (isRepeat: boolean) => void;
}

export const usePlayer = create<IUsePlayer>((set) => ({
    playingId: '',
    setPlayingId: (playingId: string) => set({ playingId }),
    isPlaying: false,
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    isRepeat: false,
    setRepeat: (isRepeat: boolean) =>   set({ isRepeat }),
}))
