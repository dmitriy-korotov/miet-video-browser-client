const TitleInput = () => {
    return (
        <div className="text-input-field">
            <label for="inp" class="inp">
                <input type="text" id="inp" placeholder="Input video title..." />
                <span class="label">Label</span>
                <span class="focus-bg"></span>
            </label>
        </div>
    );
}

export default TitleInput;