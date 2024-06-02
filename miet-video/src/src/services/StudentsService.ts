import Expected from "../types/Expected";
import { StudentData } from "../types/student/Student";
import { Subject } from "../types/subject/Subject";



class TStudentsService {

    api = "http://90.156.217.85:8080";
    userAgent = "miet-video-browser-client";

    async GetStudentInfo(token: string): Promise<Expected<StudentData, string>> {
        try {
            const response = await fetch(this.api + "/v1/student/info", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent,
                    Authorization: token
                },
            });
    
            let jsonBody = await response.json();
            
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["error_message"] });
            }
            let student: StudentData = {
                username: jsonBody["username"],
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

    async GetStudentSubjects(token: string): Promise<Expected<Array<Subject>, string>> {
        try {
            const response = await fetch(this.api + "/v1/user/disciplines", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent,
                    Authorization: token
                },
            });
            
            let jsonBody = await response.json();
    
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["error_message"] });
            }

            let subjects: Array<Subject> = new Array();
            jsonBody.forEach((subjectJson: any) => {
                let subject: Subject = {
                    title: subjectJson["name"],
                    id: subjectJson["id"],
                    description: subjectJson["department"]
                }
                subjects.push(subject);
            });
            
            return new Expected({ value: subjects });
        } catch (ex) {
            console.log(ex);
            return new Expected({ error: "Server is not response" });
        }
    }
    
}

export const StudentsService = new TStudentsService();