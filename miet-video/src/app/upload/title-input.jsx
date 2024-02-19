const TitleInput = () => {
    return (
        <div className="text-input-field">
            <label for="inp" class="inp">
                <input type="text" id="inp" placeholder="&nbsp;" />
                <span class="label">Label</span>
                <span class="focus-bg"></span>
            </label>
        </div>
    );
}

export default TitleInput;