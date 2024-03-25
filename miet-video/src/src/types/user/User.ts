export interface UserData {
    username: string,
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