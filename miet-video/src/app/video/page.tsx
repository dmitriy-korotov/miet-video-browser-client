import VideoPlayerPage from "@/src/components/pages/VideoPlayerPage/VideoPlayerPage";
import AuthProvider from "@/src/components/providers/AuthProvider/AuthProvider";
import NotAuthorizatedPageProvider from "@/src/components/providers/NotAuthorizatedPageProvider/NotAuthorizatedPageProvider";



const VideoPage = () => {   
    return (
        <NotAuthorizatedPageProvider>
            <VideoPlayerPage/>
        </NotAuthorizatedPageProvider>
    );
}

export default VideoPage;