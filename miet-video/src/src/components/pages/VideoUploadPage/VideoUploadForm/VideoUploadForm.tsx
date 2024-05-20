'use client';

import { SubmitHandler, useForm } from "react-hook-form";
import { FormEvent, FormEventHandler, useCallback, useEffect, useRef, useState } from "react";

import FormWrapper from "@/src/components/ui/FormComponents/FormWrapper/FormWrapper";
import TextField from "@/src/components/ui/FormComponents/TextField/TextField";

import SubmitButton from "@/src/components/ui/FormComponents/SubmitButton/SubmitButton";
import FileLoader from "@/src/components/ui/FormComponents/FileLoader/FileLoader";
import SubjectsList from "@/src/components/ui/SubjectsList/SubjectsList";

import { Subject } from "@/src/types/subject/Subject";
import { UploadFormData } from "@/src/types/upload/UploadFormData";
import ErrorWindow from "@/src/components/ui/FormComponents/ErrorWindow/ErrorWindow";
import { useAlert } from "@/src/hooks/UseAlert";
import useAuth from "@/src/hooks/UseAuth";
import { StudentsService } from "@/src/services/StudentsService";

import "@/src/assets/css/globals.css";
import "@/src/components/pages/VideoUploadPage/VideoUploadForm/VideoUploadForm.css";
import LoadingComponent from "@/src/components/ui/LoadingComponent/LoadingComponent";
import { LectureUploadData } from "@/src/types/lecture/Lecture";
import { LecturesService } from "@/src/services/LecturesService";
import { useRouter } from "next/navigation";



const VideoUploadForm = () => {

    let initialSubject: Subject = {
        title: "Предмет",
        id: "0"
    }
    const [ subjects, setSubjects ] = useState<Array<Subject>>(new Array());
    const [ isLoading, setIsLoading ] = useState(true);

    const { GetToken } = useAuth();
    const { Alert } = useAlert();


    async function GetSubjects(token: string) {
        let result = await StudentsService.GetStudentSubjects(token);
        if (result.HasValue()) {
            let subjects = result.Value() || new Array();
            setSubjects(subjects);
        } else {
            Alert("ERROR:", result.Error() || "");
        }
    }

    useEffect(() => {
        GetSubjects(GetToken());
        setIsLoading(false);
    }, []);


    const [ selectedSubject, setSelectedSubject ] = useState<string>(initialSubject.title);
    const [ title, setTitle ] = useState<string>("");
    const [ description, setDescription ] = useState<string>("");
    const [ videoData, setVideoData ] = useState<File>();
    const [ previewData, setPreviewData ] = useState<File>();

    const {
        register,
        setError,
        clearErrors,
        handleSubmit,
        formState: { errors },
        } = useForm<UploadFormData>();

    const isMounted = useRef(false);
    const router = useRouter();

    const ClearAllErrors = () => {
        clearErrors("subject");
        clearErrors("VideoTitle");
        clearErrors("description");
        clearErrors("VideoFile");
        clearErrors("PreviewFile");
    }

    function ValidateInput(): boolean {
        if (!isMounted.current) {
            isMounted.current = true;
            return false;
        }

        if (selectedSubject.length == 0 || selectedSubject == initialSubject.title) {
            ClearAllErrors();
            setError("subject", { type: "custom", message: "Subject field must be not empty" });
            return false;
        }
        clearErrors("subject");

        if (title.length == 0) {
            ClearAllErrors();
            setError("VideoTitle", { type: "custom", message: "Title field must be not empty" });
            return false;
        }
        clearErrors("VideoTitle");

        if (!videoData) {
            ClearAllErrors();
            setError("VideoFile", { type: "custom", message: "Video file field must be not empty" });
            return false;
        }
        clearErrors("VideoFile");

        if (!previewData) {
            ClearAllErrors();
            setError("PreviewFile", { type: "custom", message: "Preview file field must be not empty" });
            return false;
        }
        clearErrors("PreviewFile");      

        return true;
    }

    async function HandleSubmit() {
        if (!ValidateInput()) {
            return;
        }
        let uploadData: LectureUploadData = {
            subject: selectedSubject,
            title: title,
            description: description ? description : undefined,
            video: btoa(videoData?.name || "null"),
            preview: btoa(previewData?.name || "null")
        }
        let result = await LecturesService.UploadLecture(uploadData, GetToken());
        if (!result.HasValue()) {
            Alert("ERROR:", result.Error() || "");
        }
        router.push("/");  
    }

    

    useEffect(() => {
        ValidateInput();
    }, [selectedSubject, title, videoData, previewData])

    return (
        isLoading ? <LoadingComponent/>
        :
        <FormWrapper formTitle="Lecture upload">
            <form onChange={ValidateInput} onSubmit={handleSubmit(HandleSubmit)}>
                <ErrorWindow message={errors.subject?.message}>
                    <div className="total-centralize-content">
                        <SubjectsList subjects={subjects} initialSelected={initialSubject} onSelect={subject => {
                            setSelectedSubject(subject.title);
                        }}/>
                    </div>
                </ErrorWindow>
                <ErrorWindow message={errors.VideoTitle?.message}>
                    <TextField label="Input video title:"
                            name="title" type="text"
                            hasError = { !!errors.VideoTitle }
                            placeholder="input title..."
                            args={ { onInput: (event: any) => {
                                let inputElem = event.target as HTMLInputElement;
                                setTitle(inputElem.value);
                            } } }/>    
                </ErrorWindow>
                <ErrorWindow message={errors.VideoFile?.message}>
                    <div className="file-loader-wrapper">
                        <FileLoader name="video" placeholder="Select video" accept="video/*"
                        onChange={file => {
                            setVideoData(file);
                        }}/>
                    </div>
                </ErrorWindow>
                <ErrorWindow message={errors.PreviewFile?.message}>
                    <div className="file-loader-wrapper">
                        <FileLoader name="preview" placeholder="Select preview" accept="image/*"
                        onChange={file => {
                            setPreviewData(file);
                        }}/>
                    </div>
                </ErrorWindow>
                <div className="button-to-right">
                    <SubmitButton type="submit">Submit</SubmitButton>
                </div>
            </form>
        </FormWrapper>
    );
}

export default VideoUploadForm;