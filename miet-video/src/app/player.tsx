'use client';

import { NextPage } from "next";
import { useState } from "react";



interface VideoProps {
    height: number,
    src: string,
    type: string
}


const Player: NextPage<VideoProps> = (video_props) => {

    const [width_, setWidth] = useState({ width: window.innerWidth * 0.6 })

    window.addEventListener('resize', () => {
        setWidth({width: window.innerWidth * 0.6});
    });

    const { height, src, type } = video_props;

    return (
      <video className="main-player" width={width_.width} height={height} controls preload="none">
        <source src={src} type={type} />   
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }

export default Player;