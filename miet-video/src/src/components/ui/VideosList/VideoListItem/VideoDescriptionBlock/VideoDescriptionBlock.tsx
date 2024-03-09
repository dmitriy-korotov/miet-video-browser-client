import { NextPage } from "next";

import { VideoDescription } from "@/src/types/video/VideosListItemData";

import "@/src/components/ui/VideosList/VideoListItem/VideoDescriptionBlock/VideoDescriptionBlock.css";;



const VideoDescriptionBlock: NextPage<{videoDescription: VideoDescription}> = (props) => {

    const { title, date } = props.videoDescription;

    return (
        <div>
            <span className="title">{title}</span>
            <span className="date">{date}</span>
        </div>
    );
}

export default VideoDescriptionBlock;