export interface IVideo {
  ownerChannelName: string;
  title: string;
  videoId: string;
  uploadDate: string;
  lengthSeconds: string;
  video_url: string;
}

export interface IPlaylist {
  id: string;
  name: string;
  videos: IVideo[];
}