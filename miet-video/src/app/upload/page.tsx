'use client';

import Logo from "../logo";
import MainHeader from "../main-header";
import Sidebar from "../sidebar";
import UploadForm from "./upload-form";


const LecturesPage = () => {   
    return (
        <div className="full-size">
            <MainHeader/>
            <Sidebar />
            <div className="upload-body">
                <UploadForm />
            </div>
        </div>
    );
}

export default LecturesPage;