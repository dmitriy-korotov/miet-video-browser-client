import { NextPage } from "next";

import Logo from "./Logo/Logo";
import AuthorizationBlock from "./AuthorizationBlock/AuthorizationBlock";

import "@/src/components/ui/Header/Header.css";



const Header: NextPage<{isOnlyLogo?: boolean}> = ({ isOnlyLogo = false }) => {
    return (
        <div className="main-header-space">
            <nav id="main-header" className="common-header">
                <Logo/>
                {isOnlyLogo ? "" : <AuthorizationBlock/>}
            </nav>
        </div>
    );
}

export default Header;