'use client';

import { NextPage } from "next";
import { useEffect, useState } from "react";

import NotAuthorizatedPage from "../../pages/NotAuthorizatedPage/NotAuthorizatedPage";

import useAuth from "@/src/hooks/UseAuth";
import LoadingComponent from "../../ui/LoadingComponent/LoadingComponent";



const NotAuthorizatedPageProvider: NextPage<{ children: Readonly<React.ReactNode> }> = ({ children }) => {
    const [ isAuntificated, setAuntificated ] = useState(false);
    const [ isLoading, setLoading ] = useState(true);
    const { IsAuntificated } = useAuth();

    useEffect(() => {
        setAuntificated(IsAuntificated());
        setLoading(false);
    }, [isAuntificated, isLoading]);

    return (
        isLoading ? 
        <LoadingComponent/>
        : isAuntificated ? 
        <div onClick={event => setAuntificated(IsAuntificated())}>
            {children}
        </div>
         : <NotAuthorizatedPage/> 
    );
}

export default NotAuthorizatedPageProvider;