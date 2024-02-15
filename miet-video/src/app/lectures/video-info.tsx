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
        <div>
            <h2>{name}</h2>
            <br/>
            <h3>Date: {date}</h3>
            <br/>
            <h3>Playlist: {playlist}</h3>
        </div>
    );
}

export default VideoInfo;