'use client'

import { NextPage } from "next";
import { createContext, useState } from "react";



export const AuthContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: new Function,
    sessionToken: "",
    setSessionToken: new Function
});

export const AuthProvider: NextPage<{ children: Readonly<React.ReactNode> }> = ({ children }) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ sessionToken, setSessionToken ] = useState("");

    return <AuthContext.Provider value={{
        isLoggedIn,
        setIsLoggedIn,
        sessionToken,
        setSessionToken
    }}>
        {children}
    </AuthContext.Provider>
}