class MaybeError {
    errorMessage?: string

    constructor(errorMessage?: string) {
        this.errorMessage = errorMessage;
    }

    GetErrorMessage(): string {
        if (!this.errorMessage) {
            return "";
        }
        return this.errorMessage;
    }

    HasError(): boolean {
        return !!this.errorMessage;
    }
}

export const ValidateUsername = (username: string): MaybeError => {
    if (username.length == 0) {
        return new MaybeError("Please fill username field");
    }
    if (!(/^[a-zA-Z0-9]+$/.test(username))) {
        return new MaybeError("Username must contans only a-z A-Z 0-9 symbols");
    }
    if (username.length < 5) {
        return new MaybeError("Username length must be greater then 5");
    }
    return new MaybeError();
}

export const ValidateLogin = (login: string): MaybeError => {
    if (login.length == 0) {
        return new MaybeError("Please fill login field");
    }
    if (!(/^\d+$/.test(login))) {
        return new MaybeError("Login must contans only digits");
    }
    if (login.length != 7) {
        return new MaybeError("Login length must be equal 7");
    }
    return new MaybeError();
}

export const ValidatePassword = (password: string, repassword?: string): { error: MaybeError, isEquals: boolean } => {
    if (password.length == 0) {
        return { error: new MaybeError("Please fill password field"), isEquals: false };
    }
    if (!(/^[а-яА-Яa-zA-Z0-9!@#$%^&*-]{8,16}$/.test(password))) {
        return { error: new MaybeError("Password must contains only а-я А-Я a-z A-Z 0-9 !@#$%^&- cahracters. Password lenght must be in [8, 16]"), isEquals: false };
    }
    if (password.length < 8) {
        return { error: new MaybeError("Password length must be greater then 7"), isEquals: false };
    }
    if (!repassword) {
        return { error: new MaybeError(), isEquals: true };
    }
    return { error: new MaybeError(), isEquals: password == repassword };
}

export const ValidateRepassword = (repassword: string, password: string): MaybeError => {
    if (repassword.length == 0) {
        return new MaybeError("Please fill repassword field");
    }
    if (repassword != password) {
        return new MaybeError("Repassword must be equal password");
    }
    return new MaybeError();
}

export const ValidateVideo = (video: File): MaybeError => {
    if (video.size > 2 * 1024 * 1024 * 1024) {
        return new MaybeError("Preview file size must be less than 2GB");
    }
    return new MaybeError();
}

export const ValidatePreview = (preview: File): MaybeError => {
    if (preview.size > 3 * 1024 * 1024) {
        return new MaybeError("Preview file size must be less than 3MB");
    }
    return new MaybeError();
}