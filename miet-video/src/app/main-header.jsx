'use client';

import Logo from "./logo";
import HeaderButton from "./header_button";



const MainHeader = () => {

    const RedirectToRegistration = () => {
        window.location.href = "/registration";
    }

    return (
        <nav id="main-header" className="common-header">
            <div>
                <Logo/>
            </div>
            <div className="content-in-line space-bettwen-content">
                <HeaderButton text="Auth" />
                <div onClick={RedirectToRegistration}>
                    <HeaderButton text="Registration" />
                </div>
            </div>
        </nav>
    );
}

export default MainHeader;