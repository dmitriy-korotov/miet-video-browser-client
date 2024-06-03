import { NextPage } from "next";

import "@/src/assets/css/globals.css";
import "@/src/components/ui/VideosList/VideosList.css";
import VideosListItem from "./VideoListItem/VideosListItem";
import { Lecture } from "@/src/types/lecture/Lecture";



const VideosList: NextPage<{videoList: Lecture[]}> = (videosListData) => {

    const { videoList } = videosListData;

    return (
        <div className="videos-list-wrapper">
            { videoList.length != 0 ? 
                    <>
                        <div className="videos-list">
                            { videoList.map(lecture => {
                                return <VideosListItem key={lecture.video.id}
                                                    videoId={lecture.video.id}
                                                    videoPreview = {{
                                                        href: lecture.video.preview || "/miet.png",
                                                        width: 360,
                                                        height: 270,
                                                        type: lecture.video.preview_type || "image/png"
                                                    }}
                                                    videoDescription={{
                                                        title: lecture.video.title,
                                                        subject: lecture.subject,
                                                        date: lecture.video.date,
                                                        description: lecture.video.description
                                                    }} />
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