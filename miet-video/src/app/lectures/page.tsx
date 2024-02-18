'use client';

import Logo from "../logo";
import Sidebar from "../sidebar";
import LecturesTable from "./lectures-table";
import SubjectsList from "./subjects_list";



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
            <div className="lectures-body">
                <div className="total-centralize-content">
                    <SubjectsList />
                </div>
                <LecturesTable />
                <div style={{ "width": "100%", "height": "30px"}}></div>
            </div>
        </div>
    );
}

export default LecturesPage;