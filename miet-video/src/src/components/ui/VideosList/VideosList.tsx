import { NextPage } from "next";

import { VideosListItemData } from "@/src/types/video/VideosListItemData";

import "@/src/assets/css/globals.css";
import "@/src/components/ui/VideosList/VideosList.css";
import VideosListItem from "./VideoListItem/VideosListItem";



const VideosList: NextPage<{videoList: VideosListItemData[]}> = (videosListData) => {

    const { videoList } = videosListData;

    return (
        <div className="videos-list-wrapper">
            { videoList.length != 0 ? 
                    <>
                        <div className="videos-list">
                            { videoList.map(videoData => {
                                return <VideosListItem key={videoData.videoId}
                                                    videoId={videoData.videoId}
                                                    videoPreview={videoData.videoPreview}
                                                    videoDescription={videoData.videoDescription} />
                            }) }
                        </div>
                        <div className="total-centralize-content no-more-video span-margin">
                            <span>No videos more</span>
                        </div>
                    </>:
                    <div className="total-centralize-content no-more-video">
                        <span>No videos</span>
                    </div>
            }
            
        </div>
    );
}

export default VideosList;