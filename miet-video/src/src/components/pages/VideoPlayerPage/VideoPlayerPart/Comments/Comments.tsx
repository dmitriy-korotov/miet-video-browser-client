import { NextPage } from "next";
import CommentItem from "./CommentItem/CommentItem";
import WriteCommentForm from "./WriteCommentForm/WriteCommentForm";

import "@/src/components/pages/VideoPlayerPage/VideoPlayerPart/Comments/Comments.css";
import { useEffect, useState } from "react";
import { CommentsService } from "@/src/services/CommentsService";
import useAuth from "@/src/hooks/UseAuth";
import { useAlert } from "@/src/hooks/UseAlert";
import { Comment } from "@/src/types/comment/Comment";



const socket = new WebSocket("ws://localhost:80/v1/comments/notifications");



const Comments: NextPage<{ videoId: string }> = ({ videoId }) => {
    const { GetToken } = useAuth();
    const { Alert } = useAlert();
    const [comments, setComments] = useState(new Array<Comment>());

    useEffect(() => {
        async function GetComments() {
            let gotten_comments = await CommentsService.GetComments(videoId, GetToken());
            if (gotten_comments.HasValue()) {
                setComments(gotten_comments.Value() || comments);
            } else {
                Alert("ERROR:", gotten_comments.Error() || "");
            }
        }
        GetComments();

        socket.addEventListener("open", (event) => {
            console.log("Connected to websocket");
            socket.send(JSON.stringify({
                video_id: videoId,
                session_token: GetToken()
            }));
        });
        socket.addEventListener("message", (event) => {
            /*
            
            let jsonComment = JSON.parse(event.data);
            let newComment: Comment = {
                id: jsonComment["comment_id"],
                video_id: jsonComment["video_id"],
                author: jsonComment["author_id"],
                text: jsonComment["text"],
                date: jsonComment["date"],
                likes: jsonComment["likes"],
                authorAvatar: "/miet.png"
            }
            console.log(comments);
            let newComments = [...comments, newComment];
            console.log(newComments);
            setComments(newComments);
            
            */

            console.log("New comment");
            GetComments();
        });
    }, []);

    return (
        <div className="comments-wrapper">
            <WriteCommentForm videoId={videoId}/>
            <div className="comments-list">
                { [...comments].map(comment => 
                    <CommentItem key={comment.id} comment={comment}/>
                ) }
            </div>
        </div>
    );
}

export default Comments;