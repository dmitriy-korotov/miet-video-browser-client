'use client';

import useAuth from "@/src/hooks/UseAuth";
import UnregistratedBlockBlock from "./UnregistatedBlock/UnregistatedBlock";
import UserProfileBlock from "./UserProfileBlock/UserProfileBlock";



const AuthorizationBlock = () => {
    const { IsAuntificated } = useAuth();
    return (
        IsAuntificated() ? <UserProfileBlock username="Dima"/> : <UnregistratedBlockBlock/>
    );
}

export default AuthorizationBlock;