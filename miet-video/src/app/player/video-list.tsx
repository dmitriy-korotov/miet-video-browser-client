import VideoListItem from "./video-list-item";



const VideoList = () => {
    return (
        <div className="video-list">
            <VideoListItem width={125} height={80} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={125} height={80} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={125} height={80} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={125} height={80} title="Video" previewSrc="/../favicon.ico"/>
            <VideoListItem width={125} height={80} title="Video" previewSrc="/../favicon.ico"/>
            <div className="total-centralize-content">
                <span>No more videos</span>
            </div>
        </div>
    );
}

export default VideoList;