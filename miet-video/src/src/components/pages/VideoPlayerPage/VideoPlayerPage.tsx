import AuthProvider from "../../providers/AuthProvider/AuthProvider";
import HeaderProvider from "../../providers/MainHeaderProvider/MainHeaderProvider";
import SideBarProvider from "../../providers/SideBarProvider/SideBarProvider";


import "@/src/components/pages/VideoPlayerPage/VideoPlayerPage.css";
import VideoPlayerPart from "./VideoPlayerPart/VideoPlayerPart";
import VideoListPart from "./VideoListPart/VideoListPart";
import { VideoInfo } from "@/src/types/video/VideoInfo";



const VideoPlayerPage = () => {
    let video: VideoInfo = {
        title: "Video title",
        description: "awesome video",
        date: "20.04.2024",
        source: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        preview: "/miet.png",
        resolution: 4 / 3,
        type: "video/mp4"
    }
    return (
        <AuthProvider>
            <HeaderProvider>
                <SideBarProvider pageName="player">
                    <div className="video-payer-wrapper">
                        <VideoPlayerPart videoInfo={video}/>
                        <VideoListPart/>
                    </div>
                </SideBarProvider>
            </HeaderProvider>
        </AuthProvider>
    );
}

export default VideoPlayerPage;