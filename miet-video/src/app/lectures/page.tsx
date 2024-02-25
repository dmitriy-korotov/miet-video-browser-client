'use client';

import MainHeader from "../main-header";
import PageFooter from "../page-footer";
import Sidebar from "../sidebar";
import LecturesTable from "./lectures-table";
import SubjectsList from "./subjects-list";



const LecturesPage = () => {   
    return (
        <div>
            <MainHeader/>
            <Sidebar />
            <div className="lectures-body">
                <SubjectsList />
                <LecturesTable />
            </div>
            <PageFooter/>
        </div>
    );
}

export default LecturesPage;