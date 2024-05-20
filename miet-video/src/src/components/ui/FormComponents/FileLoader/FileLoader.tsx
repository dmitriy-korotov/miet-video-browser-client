import "@/src/components/ui/FormComponents/FileLoader/FileLoader.scss";
import { NextPage } from "next";
import { useState } from "react";



const FileLoader: NextPage<{ name: string,
                             accept?: string,
                             placeholder?: string,
                            onChange?: (file: File) => void }> = ({ name, accept = "image/*", placeholder = "Select your file!", onChange}) => {

    const [ selectedFile, setSelectedFile ] = useState<File | null>(null);

    return (
        <div className="container">
            <div className="file-upload-wrapper" data-text={selectedFile ? selectedFile.name : placeholder}>
                <input name={name}
                       type="file" className="file-upload-field"
                       accept={accept}
                       onChange={e => {
                            let fileField = e.target as HTMLInputElement;
                            if (!fileField.files) {
                                return;
                            }
                            setSelectedFile(fileField.files[0]);
                            if (onChange) {
                                onChange(fileField.files[0]);
                            }
                       }} />
            </div>
        </div>
    );
}

export default FileLoader;