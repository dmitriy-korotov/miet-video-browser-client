import { NextPage } from "next";
import Image from "next/image";



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
        <div className="video-list-item">
            <div className="video-item-preview">
                <Image src={previewSrc} width={width} height={height} alt={title}></Image>
            </div>
            <div>
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default VideoListItem;