'use client';

import Logo from "./logo";
import HeaderButton from "./header_button";
import SidebarButton from "./sidebar-button";
import { NextPage } from "next";



interface Props {
    onSidebarButtonClick: (e: any) => void
}



const MainHeader: NextPage<Props> = (props) => {

    const { onSidebarButtonClick } = props;

    const RedirectToRegistration = () => {
        window.location.href = "/registration";
    }

    return (
        <nav id="main-header" className="common-header">
            <div>
                <div className="content-in-line total-centralize-content" style={{"gap": "10px"}}>
                    <Logo/>
                </div>
            </div>
            <div className="content-in-line space-bettwen-content" style={{"gap": "10px"}}>
                <HeaderButton text="Auth" />
                <div onClick={RedirectToRegistration}>
                    <HeaderButton text="Registration" />
                </div>
            </div>
        </nav>
    );
}

export default MainHeader;