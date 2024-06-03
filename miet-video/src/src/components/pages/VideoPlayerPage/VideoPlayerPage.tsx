'use client';

import AuthProvider from "../../providers/AuthProvider/AuthProvider";
import HeaderProvider from "../../providers/MainHeaderProvider/MainHeaderProvider";
import SideBarProvider from "../../providers/SideBarProvider/SideBarProvider";

import VideoPlayerPart from "./VideoPlayerPart/VideoPlayerPart";
import VideoListPart from "./VideoListPart/VideoListPart";
import { VideoInfo } from "@/src/types/video/VideoInfo";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useAuth from "@/src/hooks/UseAuth";
import { LecturesService } from "@/src/services/LecturesService";
import { useAlert } from "@/src/hooks/UseAlert";
import { Lecture } from "@/src/types/lecture/Lecture";

import "@/src/components/pages/VideoPlayerPage/VideoPlayerPage.css";



const VideoPlayerPage = () => {
    const searchParams = useSearchParams();

    let initialLecture: Lecture = {
        subject: "Loading...",
        video: {
            title: "Video title",
            description: "awesome video",
            date: "20.04.2024",
            source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
            preview: "/miet.png",
            resolution: 4 / 3,
            video_type: "video/mp4",
            preview_type: "image/png",
            author: "Loading...",
            id: searchParams.get("v") || ""
        }
    }

    const [ lecture, setLecture ] = useState(initialLecture);
    const { GetToken } = useAuth();
    const { Alert } = useAlert();

    const videoId = searchParams.get("v");

    useEffect(() => {
        async function GetLecture(lectureId: string, token: string) {
            let lecture = await LecturesService.GetLecture(lectureId, token);
            if (lecture.HasValue()) {
                setLecture(lecture.Value() || initialLecture);
            } else {
                Alert("ERROR", lecture.Error() || "Unknow error");
            }
        }
        if (videoId) {
            GetLecture(videoId, GetToken());
        } else {
            Alert("ERROR", "Please pass v (video id) parametr to url");
        }
    }, []);

    return (
        <AuthProvider>
            <HeaderProvider>
                <SideBarProvider pageName="player">
                    <div className="video-payer-wrapper">
                        <VideoPlayerPart videoInfo={lecture}/>
                        <VideoListPart/>
                    </div>
                </SideBarProvider>
            </HeaderProvider>
        </AuthProvider>
    );
}

export default VideoPlayerPage;