'use client';

import Logo from "../logo";
import RegistrationForm from "./registration-form";



export default function Reqistration() {
    return (
        <div className="full-size">
            <nav className="common-header" style={{"display": "flex", "align-content": "center"}}>
                <Logo />
            </nav>
            <div className="main-header-space"></div>
            <div className="total-centralize-content">
                <RegistrationForm />
            </div>
        </div>
    );
}