import { ShortUserData } from "../user/User";



export interface StudentData extends ShortUserData {
    full_name: string,
    group: string,
    departament: string,
    semester: number,
    record_book_id: number
    study_direction: string,
    study_profile: string,
    year: string
}