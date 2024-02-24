import { NextPage } from "next";
import { MutableRefObject, Ref } from "react";



const HandleUploadVideo = (event: React.ChangeEvent<HTMLButtonElement>, input: HTMLButtonElement) => {

    if (input == null)
        return;

    const file = event.target;

    //upload(file);
}



const upload = (file: File) => {
    if (file == null)
        return;

    
}



const SubmitButton: NextPage<MutableRefObject<undefined>> = (input_video_ref) => {
    return (
        <div className="sbmt-btn wrap">
            <button onClick={e => {}} className="sbmt-btn button">Submit</button>
        </div>
    );
}

export default SubmitButton;