'use client';

import { useState } from "react";

import "@/src/components/pages/VideoPlayerPage/VideoPlayerPart/Comments/WriteCommentForm/WriteCommentForm.css";



const WriteCommentForm = () => {
    const [isInput, setIsInput] = useState(false);

    return (
        <div className="write-comment-form-wrapper">
            <div className="comment-write-title">
                Write comment:
            </div>
            <textarea className="input-comment" placeholder="Input comment..." onInput={event => {
                let inputArea = event.target as HTMLInputElement;
                if (inputArea.value) {
                    setIsInput(true);
                } else {
                    setIsInput(false);
                }
            }}/>
            <div className="send-button-wrapper" style={{ visibility: isInput ? "visible" : "hidden" }}>
                <button type="button">Send</button>
            </div>
        </div>
    );
}

export default WriteCommentForm;