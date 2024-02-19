import SubjectsList from "../lectures/subjects_list";
import UploadPreviewInput from "./upload-preview-input";
import UploadVideoInput from "./upload-video-input";
import TitleInput from "./title-input";
import SubmitButton from "./submit-button";



const UploadForm = () => {
    return (
        <div className="upload-body">
            <SubjectsList />
            <TitleInput />
            <UploadVideoInput />
            <UploadPreviewInput />
            <SubmitButton />
        </div>
    );
}

export default UploadForm;