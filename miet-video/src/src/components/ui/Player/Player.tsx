import { NextPage } from "next";

import "@/src/components/ui/Player/Player.css";



const Player: NextPage<{ width: number, height: number,
                         previewSrc: string, videoSrc: string,
                         type: string }> = ({ width, height, previewSrc, videoSrc, type }) => {
    return (
      <div>
        <video className="player" width={width} height={height} controls preload="none" poster={previewSrc}>
            <source src={videoSrc} type={type} />   
            <track
            src={videoSrc}
            kind="subtitles"
            srcLang="en"
            label="English"
            />
            Your browser does not support the video tag.
        </video>
      </div>
    )
  }

export default Player;