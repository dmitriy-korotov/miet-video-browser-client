import HeaderProvider from "../../providers/MainHeaderProvider/MainHeaderProvider";
import SideBarProvider from "../../providers/SideBarProvider/SideBarProvider";
import VideoUploadForm from "./VideoUploadForm/VideoUploadForm";

import "@/src/components/pages/VideoUploadPage/VideoUploadPage.css";



const VideoUploadPage = () => {
    return (
        <HeaderProvider>
            <SideBarProvider pageName="Upload">
                <div className="upload-body">
                    <VideoUploadForm/>
                </div>
            </SideBarProvider>
        </HeaderProvider>
    );
}

export default VideoUploadPage;