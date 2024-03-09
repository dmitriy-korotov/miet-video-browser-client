export interface VideoPreview {
    href: string,
    width: number,
    height: number
}

export interface VideoDescription {
    title: string,
    date: string,
    description?: string
}

export interface VideosListItemData {
    videoId: string,
    videoPreview: VideoPreview,
    videoDescription: VideoDescription
}