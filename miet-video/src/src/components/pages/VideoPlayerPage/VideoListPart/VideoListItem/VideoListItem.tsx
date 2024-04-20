import { NextPage } from "next";
import Image from "next/image";

import "@/src/components/pages/VideoPlayerPage/VideoListPart/VideoListItem/VideoListItem.css";



interface VideoListItemProps 
{
    width: number,
    height: number,
    previewSrc: string,
    title: string
}



const VideoListItem: NextPage<VideoListItemProps> = (item_props) => {

    const { width, height, previewSrc, title } = item_props;

    return (
        <div className="player-video-list-item">
                <Image className="video-item-preview"
                       src={previewSrc}
                       width={width} height={height}
                       alt={title} placeholder="blur" blurDataURL={previewSrc}></Image>
            <div className="video-list-item-description">
                <span><h4>{title}</h4></span>
                <span><h2>Date: Feb 21 2031</h2></span>
                <span><h2>Playlist: math</h2></span>
            </div>
        </div>
    );
}

export default VideoListItem;