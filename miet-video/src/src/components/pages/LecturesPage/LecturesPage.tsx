'use client';

import { useEffect, useState } from "react";
import { StudentsService } from "@/src/services/StudentsService";
import useAuth from "@/src/hooks/UseAuth";

import HeaderProvider from "../../providers/MainHeaderProvider/MainHeaderProvider";
import SideBarProvider from "../../providers/SideBarProvider/SideBarProvider";
import VideosList from "../../ui/VideosList/VideosList";
import SubjectsList from "../../ui/SubjectsList/SubjectsList";

import { VideosListItemData } from "@/src/types/video/VideosListItemData";
import { Subject } from "@/src/types/subject/Subject";

import "@/src/assets/css/globals.css";
import "@/src/components/pages/LecturesPage/LecturesPage.css";





const LecturesPage = () => {

    const initialSubjects: Subject = { title: "All", id: "0", description: "All subjects" };
    const [ subjects, setSubjects ] = useState<Array<Subject>>(new Array());

    const { GetToken } = useAuth();

    useEffect(() => {
        async function GetSubjects() {
            let result = await StudentsService.GetStudentSubjects(GetToken());
            if (result.HasValue()) {
                setSubjects(result.Value() || subjects);
            }
        }
        GetSubjects();
    }, []);

    return (
        <HeaderProvider>
            <SideBarProvider pageName="Lectures">
                <div className="total-centralize-content subjects-list-block">
                    <div className="subjects-list-warapper">
                        <div>
                            <span>Select a subject</span>
                        </div>
                        <SubjectsList subjects={subjects} initialSelected={initialSubjects}/>
                    </div>
                </div>
                <div className="total-centralize-content" style={{minHeight: "90%", padding: "50px", boxSizing: "border-box"}}>
                    <VideosList videoList={[{ videoId: "1",
                                              videoPreview: { href: "/miet.svg", height: 270, width: 360 },
                                              videoDescription: { title: "Math 2024 sem 2 dsfsfgdfffff ffffffffffgsdfsdfsdf", date: "8 Match 2024" } },
                                              { videoId: "2",
                                              videoPreview: { href: "/miet.svg", height: 270, width: 360 },
                                              videoDescription: { title: "Math 2024 sem 2", date: "8 Match 2024" } }]}/>
                </div>
            </SideBarProvider>
        </HeaderProvider>
    );
}

export default LecturesPage;