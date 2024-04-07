'use client';

import OnlyLogoHeaderProvider from "@/src/components/providers/OnlyLogoHeaderProvider/OnlyLogoHeaderProvider";
import SideBarProvider from "../../providers/SideBarProvider/SideBarProvider";
import StudentInfo from "./Info/StudentInfo/StudentInfo";
import Avatar from "./Avatar/Avatar";

import { StudentData } from "@/src/types/student/Student";

import "@/src/components/pages/ProfilePage/ProfilePage.css";
import { useEffect, useState } from "react";
import { StudentsService } from "@/src/services/StudentsService";
import useAuth from "@/src/hooks/UseAuth";
import LoadingComponent from "../../ui/LoadingComponent/LoadingComponent";




const ProfilePage = () => {

    const [ loaded, setLoaded ] = useState(false);
    const [ isLoading, setIsLoding ] = useState(false);
    const { GetToken } = useAuth();

    let student: StudentData = {
            username: "Dima",
            full_name: "saada",
            group: "PIN-22",
            study_direction: "Direction",
            study_profile: "Profile",
            year: "2022-2026",
            semester: 4,
            departament: "Departament",
            record_book_id: 23432
    };

    useEffect(() => {
        async function GetStudentInfo() {
            setIsLoding(true);
            let result = await StudentsService.GetStudentInfo(GetToken());
            setIsLoding(false); 
            if (result.HasValue()) {
                student = result.Value() || student;
                setLoaded(true);
            }      
        }
        GetStudentInfo();
    }, []);

    return (
        <OnlyLogoHeaderProvider>
            <SideBarProvider pageName="profile">
                { isLoading ? <LoadingComponent/> : <></> }
                <div className="profile-wrapper">
                    <div className="profile">
                        { loaded ? 
                        <>
                            <div className="avatar-wrapper">
                                <Avatar src={"/miet.png"} width={200} height={200}/>
                            </div>
                            <div className="info-wrapper">
                                <StudentInfo studentData={student}/>
                            </div>
                        </> :
                        <span className="no-loaded">Can't load student information</span> }
                    </div>
                </div>
            </SideBarProvider>
        </OnlyLogoHeaderProvider>
    );
}

export default ProfilePage;