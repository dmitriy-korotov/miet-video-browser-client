import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { StudentsService } from "@/src/services/StudentsService";
import { useAlert } from "@/src/hooks/UseAlert";

import HeaderButton from "@/src/components/ui/Header/AuthorizationBlock/UnregistatedBlock/HeaderButton/HeaderButton";
import useAuth from "@/src/hooks/UseAuth";


import "@/src/components/ui/Header/AuthorizationBlock/UserProfileBlock/UserProfileBlock.css";



const UserProfileBlock = () => {

    const { LogOut, GetToken } = useAuth();
    const { push } = useRouter();
    const { Alert } = useAlert();

    const [ userInfo, setUserInfo ] = useState({ username: "loading...", logo: "/miet.png" });

    useEffect(() => {
        async function GetUsername() {
            let maybeUserInfo = await StudentsService.GetStudentInfo(GetToken());
            if (!maybeUserInfo.HasValue()) {
                Alert("ERROR", maybeUserInfo.Error() || "");
            }
            setUserInfo({
                username: maybeUserInfo.Value()?.username || "username",
                logo: "/miet.png"
            });
        }
        GetUsername();
    }, []);

    return (
        <div className="proflie-block-wrapper">
            <Link href={"/profile"}>
                <HeaderButton>
                    <div className="proflie-block">
                        <div>{userInfo.username}</div>
                        <Image src={userInfo.logo} width={40} height={40} alt="" priority={true}/>
                    </div>
                </HeaderButton>
            </Link>
            <div onClick={event => {
                LogOut();
                push("/");
            }}>
                <HeaderButton>
                    <div className="log-out-block">
                        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                        <span>Log out</span>
                    </div>
                </HeaderButton>
            </div>
        </div>
    );
}

export default UserProfileBlock;