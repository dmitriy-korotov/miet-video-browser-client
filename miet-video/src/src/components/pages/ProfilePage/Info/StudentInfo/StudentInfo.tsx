'use client';

import { StudentData } from "@/src/types/student/Student";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

import InfoElementBlock from "./InfoElementBlock/InfoElementBlock";
import useAuth from "@/src/hooks/UseAuth";

import "@/src/components/pages/ProfilePage/Info/StudentInfo/StudentInfo.css";




const StudentInfo: NextPage<{ studentData: StudentData }> = ({ studentData }) => {

    const { LogOut } = useAuth();
    const { push } = useRouter();

    return (
        <div className="info">
            <div id="username">
                {studentData.username}
            </div>
            <div className="grid-info">
                <InfoElementBlock title="Full name" value={studentData.full_name}/>
                <InfoElementBlock title="Group" value={studentData.group}/>
                <InfoElementBlock title="Departament" value={studentData.departament}/>
                <InfoElementBlock title="Study direction" value={studentData.study_direction}/>
                <InfoElementBlock title="Study profile" value={studentData.study_profile}/>
                <InfoElementBlock title="Semester" value={studentData.semester}/>
                <InfoElementBlock title="Record bool ID" value={studentData.record_book_id}/>
                <InfoElementBlock title="Year" value={studentData.year}/>
            </div>
            <div className="log-out" onClick={event => {
                LogOut();
                push("/"); 
            }}>
                <span>Log out</span>
            </div>
        </div>
    );
}

export default StudentInfo;