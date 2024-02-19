'use client';

import Logo from "../logo";
import Sidebar from "../sidebar";
import UploadForm from "./upload-form";


const LecturesPage = () => {   
    return (
        <div className="full-size">
            <nav className="common-header">
                <div>
                    <Logo />
                </div>
            </nav>
            <div className="main-header-space"></div>
            <Sidebar />
            <div className="upload-body">
                <UploadForm />
            </div>
        </div>
    );
}

export default LecturesPage;