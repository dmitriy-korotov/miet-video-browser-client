import Expected from "../types/Expected";
import { StudentData } from "../types/student/Student";
import { Subject } from "../types/subject/Subject";



class TStudentsService {

    api = "http://localhost:80";
    userAgent = "miet-video-browser-client";

    async GetStudentInfo(token: string): Promise<Expected<StudentData, string>> {
        try {
            const response = await fetch(this.api + "/v1/student/info", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent
                },
                body: JSON.stringify({ session_token: token })
            });
    
            let jsonBody = await response.json();
            
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["error_message"] });
            }
            let student: StudentData = {
                username: jsonBody["full_name"],
                full_name: jsonBody["full_name"],
                group: jsonBody["group"],
                department: jsonBody["department"],
                semester: jsonBody["semester"],
                record_book_id: jsonBody["record_book_id"],
                study_direction: jsonBody["study_direction"],
                study_profile: jsonBody["study_profile"],
                year: jsonBody["year"]
            }
            return new Expected({ value: student });
        } catch (ex) {
            console.log(ex);
            return new Expected({ error: "Server is not response" });
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
                body: JSON.stringify({ session_token: token })
            });
            
            let jsonBody = await response.json();
    
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["error_message"] });
            }
    
            let subject: Subject = {
                title: jsonBody["name"],
                id: jsonBody["name"],
                description: jsonBody["name"]
            }
            return new Expected({ value: subject });
        } catch (ex) {
            return new Expected({ error: "Server is not response" });
        }
    }
    
}

export const StudentsService = new TStudentsService();