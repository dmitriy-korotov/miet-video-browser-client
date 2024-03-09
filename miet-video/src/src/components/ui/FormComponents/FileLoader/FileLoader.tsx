import "@/src/components/ui/FormComponents/FileLoader/FileLoader.scss";
import { NextPage } from "next";
import { useState } from "react";



const FileLoader: NextPage<{ placeholder?: string }> = ({ placeholder = "Select your file!"}) => {

    const [ selectedFile, setSelectedFile ] = useState<File | null>(null);

    return (
        <div className="container">
            <div className="file-upload-wrapper" data-text={selectedFile ? selectedFile.name : placeholder}>
                <input name="file-upload-field"
                       type="file" className="file-upload-field"
                       onChange={e => {
                            let fileField = e.target as HTMLInputElement;
                            if (!fileField.files) {
                                return;
                            }
                            setSelectedFile(fileField.files[0]);
                       }} />
            </div>
        </div>
    );
}

export default FileLoader;