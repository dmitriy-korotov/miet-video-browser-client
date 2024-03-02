import { NextPage } from "next";

import "@/src/assets/css/globals.css";
import "@/src/components/ui/FormComponents/SubmitButton/SubmitButton.css";



const SubmitButton: NextPage<{type?: "button" | "submit" | "reset", 
                              children?: Readonly<React.ReactNode>}> = ({ type = "button", children }) => {
    return (
        <button type={type} className="auth-registrate-submit-btn main-transition">{children}</button>
    );
}

export default SubmitButton;