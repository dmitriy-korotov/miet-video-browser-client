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
    if (!(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password))) {
        return { error: new MaybeError("Incorrect password format"), isEquals: false };
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