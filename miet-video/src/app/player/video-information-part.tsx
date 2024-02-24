import { useState, useEffect } from "react";

import Player from "../player";
import VideoInfo from "./video-info";



const VideoInforamtionPart = () => {

    const height = 400;
    //const src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
    //const src = "https://disk.yandex.ru/i/USnqqoidy-arzw";
    const src = "https://localhost:8080/api/v0/video";
    const type = "video/mp4";

    return (
        <div className="video-info-part">
            <Player height={height} src={src} type={type} />
            <VideoInfo name="Trailer" date="12 Dec 2024" playlist="Trailers" />
        </div>
    );
}

export default VideoInforamtionPart;