'use client';

import Logo from "./logo";
import HeaderButton from "./header-button";
import { useRouter } from "next/navigation";



const MainHeader = () => {

    const { push } = useRouter();

    const RedirectToRegistration = () => {
        push("/registration");
    }

    const RedirectToAuthorization = () => {
        push("/auth");
    }

    return (
        <div className="main-header-space">
            <nav id="main-header" className="common-header">
                <div className="content-in-line total-centralize-content" style={{"gap": "10px"}}>
                    <Logo/>
                </div>
                <div id="registration-auth-block" className="content-in-line space-bettwen-content" style={{"gap": "10px"}}>
                    <div onClick={RedirectToAuthorization}>
                        <HeaderButton text="Auth" />
                    </div>
                    <div onClick={RedirectToRegistration}>
                        <HeaderButton text="Registration" />
                    </div>
                </div>
            </nav>
            <div></div>
        </div>
    );
}

export default MainHeader;