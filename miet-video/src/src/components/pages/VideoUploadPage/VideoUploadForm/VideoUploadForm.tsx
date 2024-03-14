import { SubmitHandler, useForm } from "react-hook-form";
import { FormEvent, FormEventHandler } from "react";

import FormWrapper from "@/src/components/ui/FormComponents/FormWrapper/FormWrapper";
import TextField from "@/src/components/ui/FormComponents/TextField/TextField";

import SubmitButton from "@/src/components/ui/FormComponents/SubmitButton/SubmitButton";
import FileLoader from "@/src/components/ui/FormComponents/FileLoader/FileLoader";
import SubjectsList from "@/src/components/ui/SubjectsList/SubjectsList";

import { Subject } from "@/src/types/subject/Subject";
import { UploadFormData } from "@/src/types/upload/UploadFormData";
import { ValidatePreview, ValidateVideo } from "@/src/scripts/validations/FormValidations";

import "@/src/assets/css/globals.css";
import "@/src/components/pages/VideoUploadPage/VideoUploadForm/VideoUploadForm.css";
import ErrorWindow from "@/src/components/ui/FormComponents/ErrorWindow/ErrorWindow";



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

    const getFileInputs = (data: FormEvent<HTMLFormElement>): Array<HTMLInputElement> => {
        data.preventDefault();

        const formData = new FormData(data.currentTarget);

        let videoInput = data.currentTarget.childNodes.item(3).firstChild?.firstChild?.firstChild as HTMLInputElement;
        let previewInput;
        if (!errors.VideoFile) {
            previewInput = data.currentTarget.childNodes.item(4).firstChild?.firstChild?.firstChild as HTMLInputElement;
        } else {
            previewInput = data.currentTarget.childNodes.item(4).firstChild?.firstChild?.firstChild as HTMLInputElement;
        }

        return [ videoInput, previewInput ];
    }

    async function onSubmit(data: FormEvent<HTMLFormElement>) {
        onChange(data);
    }

    const handleInput = (data: UploadFormData): boolean => {
        let maybeError;

        if (data.VideoTitle.length == 0) {
            setError("VideoTitle", { type: "custom", message: "Video title must be not empty" });
            return false;
        }
        clearErrors("VideoTitle");
        maybeError = ValidateVideo(data.VideoFile);
        if (maybeError.HasError()) {
            setError("VideoFile", { type: "custom", message: maybeError.GetErrorMessage() });
            return false;
        }
        clearErrors("VideoFile");

        maybeError = ValidatePreview(data.PreviewFile);
        if (maybeError.HasError()) {
            setError("PreviewFile", { type: "custom", message: maybeError.GetErrorMessage() });
            return false;
        }
        return true;
    }

    const onChange: FormEventHandler<HTMLFormElement> = (data) => {
        const [videoInput, previewInput] = getFileInputs(data);

        if (!videoInput.files || videoInput.files.length == 0) {
            setError("VideoFile", { type: "custom", message: "Video file field must be not empty" });
            return;
        }
        clearErrors("VideoFile");

        if (!previewInput.files || previewInput.files.length == 0) {
            setError("PreviewFile", { type: "custom", message: "Preview file field must be not empty" });
            return;
        }
        clearErrors("PreviewFile");

        if (!handleInput({ VideoFile: videoInput.files[0],
                           PreviewFile: previewInput.files[0],
                           VideoTitle: watch("VideoTitle") })) {
            return;
        }

        console.log(videoInput.files[0], previewInput.files[0], watch("VideoTitle"));
    }

    return (
        <FormWrapper formTitle="Video upload">
            <form onChange={onChange} onSubmit={onSubmit}>
                <div className="total-centralize-content">
                    <SubjectsList subjects={subjects} initialSelected={subjects[0]}/>
                </div>
                <ErrorWindow message={errors.VideoTitle?.message}>
                    <TextField label="Input video title:"
                            name="title" type="text"
                            hasError = { !!errors.VideoTitle }
                            placeholder="input title..."
                            args={ register("VideoTitle") }/>    
                </ErrorWindow>
                <ErrorWindow message={errors.VideoFile?.message}>
                    <div className="file-loader-wrapper">
                        <FileLoader name="video" placeholder="Select video" accept="video/*"/>
                    </div>
                </ErrorWindow>
                <ErrorWindow message={errors.PreviewFile?.message}>
                    <div className="file-loader-wrapper">
                        <FileLoader name="preview" placeholder="Select preview"/>
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