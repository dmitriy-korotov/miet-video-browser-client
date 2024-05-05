'use client';

import useAuth from "@/src/hooks/UseAuth";
import UnregistratedBlockBlock from "./UnregistatedBlock/UnregistatedBlock";
import UserProfileBlock from "./UserProfileBlock/UserProfileBlock";
import { useEffect } from "react";
import { StudentsService } from "@/src/services/StudentsService";
import { useAlert } from "@/src/hooks/UseAlert";



const AuthorizationBlock = () => {

    let loadedUsername: string = "";

    const { IsAuntificated, GetToken } = useAuth();
    const { Alert } = useAlert();
    useEffect(() => {
        async function GetUsername() {
            let maybeUserInfo = await StudentsService.GetStudentInfo(GetToken());
            if (!maybeUserInfo.HasValue()) {
                Alert("ERROR", maybeUserInfo.Error() || "");
            }
            loadedUsername = maybeUserInfo.Value()?.username || "";
        }
        GetUsername();
    }, []);
    return (
        IsAuntificated() ? <UserProfileBlock username={loadedUsername}/> : <UnregistratedBlockBlock/>
    );
}

export default AuthorizationBlock;