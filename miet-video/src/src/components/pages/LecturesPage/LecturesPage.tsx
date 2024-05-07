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
import { LecturesService } from "@/src/services/LecturesService";
import { Lecture } from "@/src/types/lecture/Lecture";
import LoadingComponent from "../../ui/LoadingComponent/LoadingComponent";





const LecturesPage = () => {

    const initialSubjects: Subject = { title: "All", id: "0", description: "All subjects" };
    const [ subjects, setSubjects ] = useState<Array<Subject>>(new Array());
    const [ lectures, setLectures ] = useState<Array<Lecture>>(new Array());
    const [ isLoading, setIsLoading ] = useState(true);

    const { GetToken } = useAuth();

    useEffect(() => {
        async function GetSubjects() {
            let result = await StudentsService.GetStudentSubjects(GetToken());
            if (result.HasValue()) {
                setSubjects(result.Value() || subjects);
            }
        }
        async function GetLectures() {
            let result = await LecturesService.GetLectures(GetToken());
            
            if (result.HasValue()) {
                setLectures(result.Value() || new Array());
            }
        }
        GetSubjects();
        GetLectures();
        setIsLoading(false);
    }, []);

    return (
        <HeaderProvider>
            <SideBarProvider pageName="Lectures">
                { isLoading ? <LoadingComponent/>
                : 
                <>
                    <div className="total-centralize-content subjects-list-block">
                        <div className="subjects-list-warapper">
                            <div>
                                <span>Select a subject</span>
                            </div>
                            <SubjectsList subjects={subjects} initialSelected={initialSubjects}/>
                        </div>
                    </div>
                    <div className="total-centralize-content" style={{minHeight: "90%", padding: "50px", boxSizing: "border-box"}}>
                        <VideosList videoList={lectures}/>
                    </div>
                </>}
            </SideBarProvider>
        </HeaderProvider>
    );
}

export default LecturesPage;