'use client';

import VideoUploadPage from "@/src/components/pages/VideoUploadPage/VideoUploadPage";
import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";



const VideoUpload = () => {   
    return <AuthProvider><VideoUploadPage/></AuthProvider>;
}

export default VideoUpload;