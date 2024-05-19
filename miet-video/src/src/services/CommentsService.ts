import Expected from "../types/Expected";
import { Comment } from "../types/comment/Comment";



class TCommentsService {

    api = "http://localhost:80";
    userAgent = "miet-video-browser-client";

    async WriteComment(videoId: string, text: string, token: string): Promise<Expected<boolean, string>> {
        try {
            const response = await fetch(this.api + "/v1/comments", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent,
                    Authorization: token
                },
                body: JSON.stringify({
                    video_id: videoId,
                    text: text
                })
            });
    
            let jsonBody = await response.json();
    
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: "Unexpected server error" });
            }
            return new Expected({ value: true });
        } catch (ex) {
            return new Expected({ error: "Server is not response" });
        }
    }

    async GetComments(videoId: string, token: string): Promise<Expected<Array<Comment>, string>> {
        try {
            const response = await fetch(this.api + "/v1/comments?video_id=" + videoId, {
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
            let comments: Array<Comment> = new Array();
            jsonBody.forEach((json_lecture: any) => {
                let comment: Comment = {
                    id: json_lecture["comment_id"],
                    video_id: json_lecture["video_id"],
                    author: json_lecture["author_id"],
                    authorAvatar: "/miet.png",
                    text: json_lecture["text"],
                    date: json_lecture["date"],
                    likes: json_lecture["likes"]
                }
                comments.push(comment);
            });
            return new Expected({ value: comments });
        } catch (ex) {
            return new Expected({ error: "Server is not response" });
        }
    }
}

export const CommentsService = new TCommentsService();