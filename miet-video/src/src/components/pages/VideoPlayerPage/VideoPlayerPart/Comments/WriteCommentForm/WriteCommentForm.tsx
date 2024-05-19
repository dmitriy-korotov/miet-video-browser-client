'use client';

import { useState } from "react";

import "@/src/components/pages/VideoPlayerPage/VideoPlayerPart/Comments/WriteCommentForm/WriteCommentForm.css";
import { CommentsService } from "@/src/services/CommentsService";
import useAuth from "@/src/hooks/UseAuth";
import { NextPage } from "next";
import { useAlert } from "@/src/hooks/UseAlert";



const WriteCommentForm: NextPage<{ videoId: string }> = ({ videoId }) => {
    const { Alert } = useAlert();
    const { GetToken } = useAuth();
    const [commentData, setCommentData] = useState("");

    const WriteComment = async () => {
        let result = await CommentsService.WriteComment(videoId, commentData, GetToken());
        if (result.HasValue()) {
            setCommentData("");
        } else {
            Alert("ERROR:", result.Error() || "");
        }
    };

    return (
        <div className="write-comment-form-wrapper">
            <div className="comment-write-title">
                Write comment:
            </div>
            <textarea className="input-comment" placeholder="Input comment..." value={commentData} onInput={event => {
                let inputArea = event.target as HTMLInputElement;
                setCommentData(inputArea.value)
            }}/>
            <div className="send-button-wrapper" style={{ visibility: commentData ? "visible" : "hidden" }}>
                <button type="button" onClick={event => {
                    WriteComment();
                }}>Send</button>
            </div>
        </div>
    );
}

export default WriteCommentForm;