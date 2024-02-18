'use client';

import Logo from "../logo";
import Sidebar from "../sidebar";
import VideoInforamtionPart from "./video-information-part";
import VideoList from "./video-list";



const PlayerPage = () => {   
    return (
        <div className="full-size">
            <nav className="common-header">
                <div>
                    <Logo />
                </div>
            </nav>
            <div className="main-header-space"></div>
            <Sidebar />
            <div className="main-lectures">
                <VideoInforamtionPart />
                <VideoList />
            </div>
        </div>
    );
}

export default PlayerPage;