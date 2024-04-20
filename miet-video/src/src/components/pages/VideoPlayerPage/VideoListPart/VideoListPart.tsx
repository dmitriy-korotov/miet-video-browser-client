import VideoListItem from "./VideoListItem/VideoListItem";

import "@/src/components/pages/VideoPlayerPage/VideoListPart/VideoListPart.css";



const VideoListPart = () => {
    return (
        <div className="video-list">
            <VideoListItem width={160} height={120} title="Video" previewSrc="/not_found.png"/>
            <VideoListItem width={160} height={120} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={160} height={120} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={160} height={120} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={160} height={120} title="Video" previewSrc="/../favicon.ico"/>
            <div className="no-videos-more">
                <span>No videos more</span>
            </div>
        </div>
    );
}

export default VideoListPart