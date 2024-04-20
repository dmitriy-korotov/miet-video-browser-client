import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { VideosListItemData } from "@/src/types/video/VideosListItemData";
import VideoDescriptionBlock from "./VideoDescriptionBlock/VideoDescriptionBlock";

import "@/src/components/ui/VideosList/VideoListItem/VideosListItem.css";



const VideosListItem: NextPage<VideosListItemData> = (videoData) => {

    const { videoId, videoPreview, videoDescription } = videoData;

    return (
        <div className="video-list-item-wrapper">
            <Link href={`/video?v=${videoId}`}>
                <div className="video-list-item">
                    <Image className="video-preview" src={videoPreview.href}
                           width={videoPreview.width} height={videoPreview.height}
                           alt={videoDescription.description ? videoDescription.description : videoDescription.title}
                           style={{ "alignSelf": "center" }} />
                    <VideoDescriptionBlock videoDescription={videoDescription} />
                </div>
            </Link>
        </div>
    );
}

export default VideosListItem;