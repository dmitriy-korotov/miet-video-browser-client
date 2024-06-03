export interface VideoPreview {
    href: string,
    width: number,
    height: number,
    type: string,
}

export interface VideoDescription {
    title: string,
    subject: string,
    date: string,
    description?: string
}

export interface VideosListItemData {
    videoId: string,
    videoPreview: VideoPreview,
    videoDescription: VideoDescription
}