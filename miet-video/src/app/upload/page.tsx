'use client';

import VideoUploadPage from "@/src/components/pages/VideoUploadPage/VideoUploadPage";
import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";
import NotAuthorizatedPageProvider from "@/src/components/providers/NotAuthorizatedPageProvider/NotAuthorizatedPageProvider";



const VideoUpload = () => {   
    return (
        <NotAuthorizatedPageProvider>
            <VideoUploadPage/>
        </NotAuthorizatedPageProvider>
    );
}

export default VideoUpload;