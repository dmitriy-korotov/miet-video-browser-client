'use client';

import MainHeader from "../main-header";
import PageFooter from "../page-footer";
import Sidebar from "../sidebar";
import VideoInforamtionPart from "./video-information-part";
import VideoList from "./video-list";



const VideoPage = () => {   
    return (
        <div className="full-size">
            <MainHeader/>
            <Sidebar />
            <div className="main-lectures">
                <VideoInforamtionPart />
                <VideoList />
            </div>
        </div>
    );
}

export default VideoPage;