import { VideoInfo } from "../video/VideoInfo";

export interface Lecture {
    subject: string,
    video: VideoInfo
}

export interface LectureUploadData {
    subject: string,
    title: string,
    description?: string,
    video: string,
    preview?: string
}