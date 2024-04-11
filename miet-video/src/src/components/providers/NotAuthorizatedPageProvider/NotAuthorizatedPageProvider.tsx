'use client';

import { NextPage } from "next";

import NotAuthorizatedPage from "../../pages/NotAuthorizatedPage/NotAuthorizatedPage";

import useAuth from "@/src/hooks/UseAuth";



const NotAuthorizatedPageProvider: NextPage<{ children: Readonly<React.ReactNode> }> = ({ children }) => {

    const { IsAuntificated } = useAuth();

    return (
        IsAuntificated() ? children : <NotAuthorizatedPage/> 
    );
}

export default NotAuthorizatedPageProvider;