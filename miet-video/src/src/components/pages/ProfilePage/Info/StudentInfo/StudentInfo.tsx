import { StudentData } from "@/src/types/student/Student";
import { NextPage } from "next";

import "@/src/components/pages/ProfilePage/Info/StudentInfo/StudentInfo.css";
import InfoElementBlock from "./InfoElementBlock/InfoElementBlock";



const StudentInfo: NextPage<{ studentData: StudentData }> = ({ studentData }) => {
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
        </div>
    );
}

export default StudentInfo;