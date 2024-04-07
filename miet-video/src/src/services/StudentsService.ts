import Expected from "../types/expected";
import { StudentData } from "../types/student/Student";
import { Subject } from "../types/subject/Subject";



class TStudentsService {

    api = "http://localhost:8080";
    userAgent = "miet-video-browser-client";

    async GetStudentInfo(token: string): Promise<Expected<StudentData, string>> {
        try {
            const response = await fetch(this.api + "/v1/student", {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent
                },
                body: JSON.stringify({ token: token })
            });
    
            let jsonBody = await response.json();
    
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["message"] });
            }
            let student: StudentData = {
                username: jsonBody["full_name"],
                full_name: jsonBody["full_name"],
                group: jsonBody["group"],
                departament: jsonBody["departament"],
                semester: jsonBody["semester"],
                record_book_id: jsonBody["record_book_id"],
                study_direction: jsonBody["study_direction"],
                study_profile: jsonBody["study_profile"],
                year: jsonBody["year"]
            }
            return new Expected({ value: student });
        } catch (ex) {
            return new Expected({ error: JSON.stringify(ex) });
        }
    }

    async GetStudentSubjects(token: string): Promise<Expected<Subject, string>> {
        try {
            const response = await fetch(this.api + "/v1/student/subjects", {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent
                },
                body: JSON.stringify({ token: token })
            });
            
            let jsonBody = await response.json();
    
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["message"] });
            }
    
            let subject: Subject = {
                title: jsonBody["name"],
                id: jsonBody["name"],
                description: jsonBody["name"]
            }
            return new Expected({ value: subject });
        } catch (ex) {
            return new Expected({ error: JSON.stringify(ex) });
        }
    }
    
}

export const StudentsService = new TStudentsService();