const UploadVideoInput = () => {
    return (
        <div className="container">
            <form className="form">
                <div className="file-upload-wrapper" data-text="Select your file!">
                <input name="file-upload-field" type="file" className="file-upload-field" value="" />
                </div>
            </form>
        </div>
    );
}

export default UploadVideoInput;