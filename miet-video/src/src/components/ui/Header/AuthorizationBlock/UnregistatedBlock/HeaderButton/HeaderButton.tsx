import { NextPage } from "next";

import "@/src/assets/css/globals.css";
import "@/src/components/ui/Header/Logo/Logo.css";


const HeaderButton: NextPage<Readonly<{children?: React.ReactNode;}>> = ({children}) => {
    return (
        <button className="main-logo-font header-button main-color main-color-hover main-transition" style={{"fontSize": "1.4em"}}>
            <span>{children}</span>
        </button>
    );
}

export default HeaderButton;