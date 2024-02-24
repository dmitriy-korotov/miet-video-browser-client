import SubjectsList from "../lectures/subjects_list";
import UploadPreviewInput from "./upload-preview-input";
import UploadVideoInput from "./upload-video-input";
import TitleInput from "./title-input";
import SubmitButton from "./submit-button";
import { useRef } from "react";




const videoInputRef = useRef();



const UploadForm = () => {
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