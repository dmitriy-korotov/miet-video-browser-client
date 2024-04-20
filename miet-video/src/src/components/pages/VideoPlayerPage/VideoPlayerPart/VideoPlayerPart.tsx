'use client';

import { useEffect, useState } from "react";
import Player from "@/src/components/ui/Player/Player";
import { VideoInfo } from "@/src/types/video/VideoInfo";
import { NextPage } from "next";
import VideoDescription from "./VideoDescription/VideoDescription";



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



const VideoPlayerPart: NextPage<{ videoInfo: VideoInfo }> = ({videoInfo}) => {

    const [videoSize, setVideoSize] = useState({ width: GetWindowWidth(), height: GetWindowHeight() })

    const UpdateVideoSize = () => {
        const caclWidth = GetWindowWidth() * 0.6;
        const calcHeight = Math.min(GetWindowHeight() / 2, caclWidth / videoInfo.resolution);
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
    },[])

    return (
        <div>
            <Player videoSrc={videoInfo.source} previewSrc={videoInfo.preview}
                    type={videoInfo.type} width={videoSize.width} height={videoSize.height}/>
            <VideoDescription title={videoInfo.title} date={videoInfo.date} description={videoInfo.description}/>
        </div>
    );
}

export default VideoPlayerPart;