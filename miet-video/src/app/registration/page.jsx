'use client';

import Logo from "../logo";
import RegistrationForm from "./registration-form";



export default function Reqistration() {
    return (
        <div className="full-size">
            <nav className="common-header">
                <div>
                    <Logo />
                </div>
            </nav>
            <div className="main-header-space"></div>
            <div className="total-centralize-content">
                <RegistrationForm />
            </div>
        </div>
    );
}