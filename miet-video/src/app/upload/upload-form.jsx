import SubjectsList from "../lectures/subjects-list";
import UploadPreviewInput from "./upload-preview-input";
import UploadVideoInput from "./upload-video-input";
import TitleInput from "./title-input";
import SubmitButton from "./submit-button";
import { useRef } from "react";



const UploadForm = () => {

    const videoInputRef = useRef();

    return (
        <div className="upload-body-inner">
            <SubjectsList />
            <div className="upload-font" style={{marginBottom: '30px'}}>
                <span>Uploading form</span>
            </div>
            <TitleInput />
            <UploadVideoInput ref={useRef} />
            <UploadPreviewInput />
            <SubmitButton />
        </div>
    );
}

export default UploadForm;