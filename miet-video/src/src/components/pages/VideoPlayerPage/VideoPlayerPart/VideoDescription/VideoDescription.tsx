import { NextPage } from "next";

import "@/src/components/pages/VideoPlayerPage/VideoPlayerPart/VideoDescription/VideoDescription.css";



const VideoDescription: NextPage<{ title: string, date: string, description: string }> = ({ title, date, description }) => {
    return (
        <div className="video-description-wrapper">
            <div className="video-description-title">{title}</div>
            <div className="video-description-date"><span>Date: </span>{date}</div>
            <div className="video-description"><span>Description: </span>{description}</div>
        </div>
    );
}

export default VideoDescription;