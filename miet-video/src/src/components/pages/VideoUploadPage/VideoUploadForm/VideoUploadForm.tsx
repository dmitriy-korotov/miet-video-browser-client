import { useForm } from "react-hook-form";

import FormWrapper from "@/src/components/ui/FormComponents/FormWrapper/FormWrapper";
import TextField from "@/src/components/ui/FormComponents/TextField/TextField";

import SubmitButton from "@/src/components/ui/FormComponents/SubmitButton/SubmitButton";
import FileLoader from "@/src/components/ui/FormComponents/FileLoader/FileLoader";
import SubjectsList from "@/src/components/ui/SubjectsList/SubjectsList";

import { Subject } from "@/src/types/subject/Subject";
import { UploadFormData } from "@/src/types/upload/UploadFormData";

import "@/src/assets/css/globals.css";
import "@/src/components/pages/VideoUploadPage/VideoUploadForm/VideoUploadForm.css";



const VideoUploadForm = () => {

    const subjects: Subject[] = [ { title: "Math", id: "1" }, { title: "C++", id: "2" }, { title: "C#", id: "3" },
                                  { title: "Python", id: "4" }, { title: "Java", id: "5" }, { title: "Web", id: "6" } ];

    const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
    } = useForm<UploadFormData>();

    return (
        <FormWrapper formTitle="Video upload">
            <div className="total-centralize-content">
                <SubjectsList subjects={subjects} initialSelected={subjects[0]}/>
            </div>
            <TextField label="Input video title:" name="title" type="text" placeholder="input title..."/>
            <div className="file-loader-wrapper">
                <FileLoader placeholder="Select video"/>
            </div>
            <div className="file-loader-wrapper">
                <FileLoader placeholder="Select preview"/>
            </div>
            <div className="button-to-right">
                <SubmitButton type="submit">Submit</SubmitButton>
            </div>
        </FormWrapper>
    );
}

export default VideoUploadForm;