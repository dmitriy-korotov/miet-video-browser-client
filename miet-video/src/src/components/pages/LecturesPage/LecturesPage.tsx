'use client';

import { useEffect, useState } from "react";
import { StudentsService } from "@/src/services/StudentsService";
import useAuth from "@/src/hooks/UseAuth";

import HeaderProvider from "../../providers/MainHeaderProvider/MainHeaderProvider";
import SideBarProvider from "../../providers/SideBarProvider/SideBarProvider";
import VideosList from "../../ui/VideosList/VideosList";
import SubjectsList from "../../ui/SubjectsList/SubjectsList";

import { Subject } from "@/src/types/subject/Subject";
import { LecturesService } from "@/src/services/LecturesService";
import { Lecture } from "@/src/types/lecture/Lecture";
import LoadingComponent from "../../ui/LoadingComponent/LoadingComponent";
import { useAlert } from "@/src/hooks/UseAlert";

import "@/src/assets/css/globals.css";
import "@/src/components/pages/LecturesPage/LecturesPage.css";




const LecturesPage = () => {

    const initialSubject: Subject = { title: "Все", id: "0", description: "All subjects" };
    const [ subjects, setSubjects ] = useState<Array<Subject>>(new Array());
    const [ lectures, setLectures ] = useState<Array<Lecture>>(new Array());
    const [ isLoading, setIsLoading ] = useState(true);

    const { GetToken } = useAuth();
    const { Alert } = useAlert();


    async function GetSubjects(token: string) {
        let result = await StudentsService.GetStudentSubjects(token);
        if (result.HasValue()) {
            let subjects = result.Value() || new Array();
            subjects = [initialSubject, ...subjects];
            setSubjects(subjects);
        }
    }
    async function GetLectures(token: string, subject?: string) {
        let result = await LecturesService.GetLectures(GetToken(), subject);
        
        if (result.HasValue()) {
            setLectures(result.Value() || new Array());
        } else {
            Alert("ERROR", result.Error() || "Unknow error");
        }
    }



    useEffect(() => {
        GetSubjects(GetToken());
        GetLectures(GetToken());
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
                            <SubjectsList subjects={subjects} initialSelected={initialSubject} onSelect={subject => {
                                GetLectures(GetToken(), (subject.id == "0" ? undefined : subject.title));
                            }}/>
                        </div>
                    </div>
                    <div className="total-centralize-content" style={{minHeight: "70%", padding: "50px", boxSizing: "border-box"}}>
                        <VideosList videoList={lectures}/>
                    </div>
                </>}
            </SideBarProvider>
        </HeaderProvider>
    );
}

export default LecturesPage;