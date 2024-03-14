import { NextPage } from "next";

import "@/src/components/ui/FormComponents/ErrorWindow/ErrorWindow.css";;



const ErrorWindow: NextPage<{ children: Readonly<React.ReactNode>, message?: string }> = ({ children, message }) => {
    return (
        <div>
            {children}
            { message ? 
            <div className="error-window">
                <span role='alert' className="input-error">
                    {message}
                </span>
            </div> :
            <></>}
        </div>
    );
}

export default ErrorWindow;