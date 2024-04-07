import SubmitButton from "@/src/components/ui/FormComponents/SubmitButton/SubmitButton";
import { NextPage } from "next";

import "@/src/components/providers/AlertProvider/AlertWindow/AlertWindow.css";


const AlertWindow: NextPage<{ title: string, message: string, closeAlert: () => void }> = ({ title, message, closeAlert }) => {
    return (
        <div className="alert-wrapper">
            <div className="alert-window">
                <div className="alert-window-title">{title}</div>
                <div className="alert-window-message">{message}</div>
                <div onClick={event => {
                    closeAlert();
                }}>
                    <SubmitButton type="button">Ok</SubmitButton>
                </div>
            </div>
        </div>
    );
}

export default AlertWindow;