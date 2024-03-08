export interface UserData {
    login: string,
    password: string
}

export interface UserAuthorizationFormData extends UserData {

}

export interface UserRegistrationFormData extends UserData {
    repassword: string
}