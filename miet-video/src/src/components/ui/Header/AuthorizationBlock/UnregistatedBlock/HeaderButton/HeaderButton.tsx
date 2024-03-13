import { NextPage } from "next";

import "@/src/assets/css/globals.css";
import "@/src/components/ui/Header/Logo/Logo.css";
import "@/src/components/ui/Header/AuthorizationBlock/UnregistatedBlock/HeaderButton/HeaderButton.css";


const HeaderButton: NextPage<Readonly<{children?: React.ReactNode;}>> = ({children}) => {
    return (
        <button className="main-logo-font header-button main-transition">
            <span>{children}</span>
        </button>
    );
}

export default HeaderButton;