export interface ShortUserData {
    username: string
}

export interface UserData extends ShortUserData {
    login: string,
    password: string
}

export interface UserAuthorizationFormData {
    login: string,
    password: string
}

export interface UserRegistrationFormData extends UserData {
    repassword: string
    checkbox: boolean
}