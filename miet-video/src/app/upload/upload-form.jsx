import SubjectsList from "../lectures/subjects-list";
import UploadPreviewInput from "./upload-preview-input";
import UploadVideoInput from "./upload-video-input";
import TitleInput from "./title-input";
import SubmitButton from "./submit-button";
import { useRef } from "react";



const UploadForm = () => {

    const videoInputRef = useRef();

    return (
        <div className="upload-body">
            <SubjectsList />
            <TitleInput />
            <UploadVideoInput ref={useRef} />
            <UploadPreviewInput />
            <SubmitButton />
        </div>
    );
}

export default UploadForm;