import VideoListItem from "./video-list-item";



const VideoList = () => {
    return (
        <div className="video-list">
            <VideoListItem width={100} height={100} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={100} height={100} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={100} height={100} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={100} height={100} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={100} height={100} title="Video" previewSrc="/../favicon.ico"/>
            <div className="total-centralize-content">
                <span>No more videos</span>
            </div>
        </div>
    );
}

export default VideoList;