import HeaderButton from "@/src/components/ui/Header/AuthorizationBlock/UnregistatedBlock/HeaderButton/HeaderButton";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import "@/src/components/ui/Header/AuthorizationBlock/UserProfileBlock/UserProfileBlock.css";



const UserProfileBlock: NextPage<{ username: string, logoSrc?: string }> = ({ username, logoSrc = "/miet.png" }) => {
    return (
        <div className="proflie-block-wrapper">
            <Link href={"/profile"}>
                <HeaderButton>
                    <div className="proflie-block">
                        <div>{username}</div>
                        <Image src={logoSrc} width={40} height={40} alt=""/>
                    </div>
                </HeaderButton>
            </Link>
            <HeaderButton>
                <div className="log-out-block">
                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                    <span>Log out</span>
                </div>
            </HeaderButton>
        </div>
    );
}

export default UserProfileBlock;