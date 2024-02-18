import { NextPage } from "next";



interface VideoProperty
{
    name: string,
    date: string,
    playlist: string,
}



const VideoInfo: NextPage<VideoProperty> = (video_props) => {

    const { name, date, playlist } = video_props;

    return (
        <div className="video-info-color">
            <h2>{name}</h2>
            <br/>
            <h4>Date: {date}</h4>
            <br/>
            <h4>Playlist: {playlist}</h4>
        </div>
    );
}

export default VideoInfo;