import Head from "next/head";



const UploadPreviewInput = () => {
    return (
        <div className="upload-wrapper">
            <h2>Select video preview</h2>
            <form id="file-upload-form" className="uploader">
            <input id="file-upload" type="file" name="fileUpload" accept="image/*" />

            <label htmlFor="file-upload" id="file-drag">
                <img id="file-image" src="#" alt="Preview" className="hidden"/>
                <div id="start">
                <i className="fa fa-download" aria-hidden="true"></i>
                <div>Select a file or drag here</div>
                <div id="notimage" className="hidden">Please select an image</div>
                <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
                </div>
                <div id="response" className="hidden">
                <div id="messages"></div>
                <progress className="progress" id="file-progress" value="0">
                    <span>0</span>%
                </progress>
                </div>
            </label>
            </form>
        </div>
    );
}

export default UploadPreviewInput;