'use client';

import { useEffect, useState } from "react";
import Player from "@/src/components/ui/Player/Player";
import { VideoInfo } from "@/src/types/video/VideoInfo";
import { NextPage } from "next";
import VideoDescription from "./VideoDescription/VideoDescription";
import { Lecture } from "@/src/types/lecture/Lecture";
import Comments from "./Comments/Comments";



const GetWindowWidth = (): number => {
    if (typeof window !== 'undefined') {
        return window.innerWidth;
    }
    return 500;
}

const GetWindowHeight = (): number => {
    if (typeof window !== 'undefined') {
        return window.innerHeight;
    }
    return 500;
}



const VideoPlayerPart: NextPage<{ videoInfo: Lecture }> = ({videoInfo}) => {

    const [videoSize, setVideoSize] = useState({ width: GetWindowWidth(), height: GetWindowHeight() })

    const UpdateVideoSize = () => {
        const caclWidth = GetWindowWidth() * 0.6;
        const calcHeight = Math.min(GetWindowHeight() / 2, caclWidth / videoInfo.video.resolution);
        setVideoSize({width: caclWidth, height: calcHeight});
    }

    let resizeTimer: NodeJS.Timeout;
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                UpdateVideoSize();
            }, 300);
        });
    }

    useEffect(() => {
        UpdateVideoSize();
    },[]);

    return (
        <div>
            <Player videoSrc={videoInfo.video.source} previewSrc={videoInfo.video.preview || "/miet.png"}
                    type={videoInfo.video.type} width={videoSize.width} height={videoSize.height}/>
            <VideoDescription title={videoInfo.video.title} date={videoInfo.video.date} description={videoInfo.video.description || ""}/>
            <Comments videoId={videoInfo.video.id}/>
        </div>
    );
}

export default VideoPlayerPart;