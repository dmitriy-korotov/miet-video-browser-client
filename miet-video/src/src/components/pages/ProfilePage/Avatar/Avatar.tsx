import { NextPage } from "next";
import Image from "next/image";

import "@/src/components/pages/ProfilePage/Avatar/Avatar.css";



const Avatar: NextPage<{ src: string,
                         width: number, height: number,
                         alt?: string }> = ({ src, width, height, alt = "" }) => {
    return (
        <div className="avatar">
            <Image src={src} width={width} height={height} alt=""
                   priority={true}/>
        </div>
    )
}

export default Avatar;