'use client';

import Logo from "../logo";
import VideoInforamtionPart from "./video-information-part";
import VideoList from "./video-list";



const LecturesPage = () => {   
    return (
        <div className="full-size">
            <nav className="common-header">
                <div>
                    <Logo />
                </div>
            </nav>
            <div className="main-lectures">
                <VideoInforamtionPart />
                <VideoList />
            </div>
        </div>
    );
}

export default LecturesPage;