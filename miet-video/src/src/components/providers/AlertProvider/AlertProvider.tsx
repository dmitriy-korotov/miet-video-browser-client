'use client';

import { NextPage } from "next";
import { createContext, useEffect, useState } from "react";
import AlertWindow from "./AlertWindow/AlertWindow";


interface IAlertContext {
    Alert: (title: string, message: string) => void
}

const initialValue = {
    Alert: (title: string, message: string) => {}
}

export const AlertContext = createContext<IAlertContext>(initialValue);

const AlertProvider: NextPage<{ children: Readonly<React.ReactNode> }> = ({ children }) => {
    const [ alertMessage, setalertMessage] = useState("");
    const [ alertTitle, setalertTitle] = useState("");

    const Alert = (title: string, message: string) => {
        setalertTitle(title);
        setalertMessage(message);
    }

    const CloseAlert = () => {
        setalertTitle("");
        setalertMessage("");
    }

    return <AlertContext.Provider value={{
        Alert: Alert
    }}>
        { !!alertMessage ? <AlertWindow title={alertTitle} message={alertMessage} closeAlert={CloseAlert}/> : <></> }
        {children}
    </AlertContext.Provider>
}

export default AlertProvider;