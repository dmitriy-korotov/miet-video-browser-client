'use client';

import useAuth from "@/src/hooks/UseAuth";
import UnregistratedBlockBlock from "./UnregistatedBlock/UnregistatedBlock";
import UserProfileBlock from "./UserProfileBlock/UserProfileBlock";
import { useEffect, useState } from "react";



const AuthorizationBlock = () => {
    const [ isAuntificated, setAuntificated ] = useState(false);
    const { IsAuntificated } = useAuth();

    useEffect(() => {
        setAuntificated(IsAuntificated())
    }, [isAuntificated]);

    return (
        isAuntificated ? 
        <div onClick={event => setAuntificated(IsAuntificated())}>
            <UserProfileBlock/>    
        </div>
        :
        <UnregistratedBlockBlock/>
    );
}

export default AuthorizationBlock;