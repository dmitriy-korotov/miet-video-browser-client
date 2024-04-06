'use client'

import { NextPage } from "next";
import { createContext, useEffect, useState } from "react";


interface IAuthContext {
    GetToken: () => string
    IsAuntificated: () => boolean,
    Auntificate: (token: string) => void,
    LogOut: () => void
}

const initialValue = {
    GetToken: () => "",
    IsAuntificated: () => false,
    Auntificate: (token: string) => {},
    LogOut: () => {}
}

export const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider: NextPage<{ children: Readonly<React.ReactNode> }> = ({ children }) => {
    const [ auntificated, setAuntificated ] = useState(initialValue.IsAuntificated());
    const [ sessionToken, setSessionToken ] = useState(initialValue.GetToken());

    useEffect(() => {
        setSessionToken(localStorage.getItem("token") || "");
    },[]);

    const setAuntificate = (token: string) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("token", token);
        }
        setSessionToken(token);
    }

    const LogOut = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("token");
        }
        setSessionToken("");
    }

    const getToken = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem("token") || "";
        }
        return "";
    }

    const isAuntificated = () => {
        return (getToken() != "");
    }

    return <AuthContext.Provider value={{
        GetToken: getToken,
        IsAuntificated: isAuntificated,
        Auntificate: setAuntificate,
        LogOut: LogOut
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;