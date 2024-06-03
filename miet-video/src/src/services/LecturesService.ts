import Expected from "../types/Expected";
import { Lecture, LectureUploadData } from "../types/lecture/Lecture";
import { VideoInfo } from "../types/video/VideoInfo";



class TLecturesService {

    //api = "http://90.156.217.85:8080";
    api = "http://localhost:80";
    userAgent = "miet-video-browser-client";

    async UploadLecture(lecture: LectureUploadData, token: string): Promise<Expected<boolean, string>> {
        try {
            const response = await fetch(this.api + "/v1/lectures", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent,
                    Authorization: token
                },
                body: JSON.stringify(lecture)
            });
    
            if (!response.ok) {
                return new Expected({ error: "Unexpected server error" });
            }
            return new Expected({ value: true });
        } catch (ex) {
            return new Expected({ error: "Server is not response" });
        }
    }

    async GetLectures(token: string, subject?: string): Promise<Expected<Array<Lecture>, string>> {
        try {
            let uri: string = "/v1/lectures" + (subject ? "?subject=" + subject : "");
            const response = await fetch(this.api + uri, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent,
                    Authorization: token
                }
            });

            let jsonBody = await response.json();
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["error_message"] });
            }
            let lectures: Array<Lecture> = new Array();
            jsonBody.forEach((json_lecture: any) => {
                let json_video = json_lecture["video"];
                let video: VideoInfo = {
                    id: json_video["video_id"],
                    source: json_video["video_src"],
                    preview: json_video["preview_src"],
                    title: json_video["title"],
                    author: json_video["author"],
                    description: json_video["description"],
                    date: json_video["creation_date"],
                    resolution: 4 / 3,
                    video_type: "video/mp4",
                    preview_type: "image/png"
                }
                lectures.push({
                    subject: json_lecture["subject"],
                    video: video
                });
            });
            return new Expected({ value: lectures });
        } catch (ex) {
            return new Expected({ error: "Server is not response" });
        }
    }

    async GetLecture(id: string, token: string): Promise<Expected<Lecture, string>> {
        try {
            const response = await fetch(this.api + "/v1/lectures/" + id, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent,
                    Authorization: token 
                }
            });

            let jsonBody = await response.json();
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["error_message"] });
            }
            let json_video = jsonBody["video"];
            let video: VideoInfo = {
                id: json_video["video_id"],
                source: json_video["video_src"],
                preview: json_video["preview_src"],
                title: json_video["title"],
                author: json_video["author"],
                description: json_video["description"],
                date: json_video["creation_date"],
                resolution: 4 / 3,
                video_type: "video/mp4",
                preview_type: "image/png"
            };
            return new Expected({ value: {
                subject: jsonBody["subject"],
                video: video
            }});
        } catch (ex) {
            return new Expected({ error: "Server is not response" });
        }
    }
}

export const LecturesService = new TLecturesService();