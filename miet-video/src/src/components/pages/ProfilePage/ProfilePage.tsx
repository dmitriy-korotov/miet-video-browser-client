import OnlyLogoHeaderProvider from "@/src/components/providers/OnlyLogoHeaderProvider/OnlyLogoHeaderProvider";
import SideBarProvider from "../../providers/SideBarProvider/SideBarProvider";
import StudentInfo from "./Info/StudentInfo/StudentInfo";
import Avatar from "./Avatar/Avatar";

import { StudentData } from "@/src/types/student/Student";

import "@/src/components/pages/ProfilePage/ProfilePage.css";




const ProfilePage = () => {
    return (
        <OnlyLogoHeaderProvider>
            <SideBarProvider pageName="profile">
                <div className="profile-wrapper">
                    <div className="profile">
                        <div className="avatar-wrapper">
                            <Avatar src={"/miet.png"} width={200} height={200}/>
                        </div>
                        <div className="info-wrapper">
                            <StudentInfo studentData={{
                                username: "Dima",
                                full_name: "saada",
                                group: "PIN-22",
                                study_direction: "Direction",
                                study_profile: "Profile",
                                year: "2022-2026",
                                semester: 4,
                                departament: "Departament",
                                record_book_id: 23432
                            }}/>
                        </div>
                    </div>
                </div>
            </SideBarProvider>
        </OnlyLogoHeaderProvider>
    );
}

export default ProfilePage;