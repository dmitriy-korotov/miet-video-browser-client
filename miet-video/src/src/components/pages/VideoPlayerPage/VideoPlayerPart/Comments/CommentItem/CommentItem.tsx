import { Comment } from "@/src/types/comment/Comment";
import { NextPage } from "next";
import Image from "next/image";

import "@/src/components/pages/VideoPlayerPage/VideoPlayerPart/Comments/CommentItem/CommentItem.css";




const CommentItem: NextPage<{comment: Comment}> = ({ comment }) => {
    return (
        <div className="comment-wrapper">
            <div className="author-date">
                <div className="author">
                    <Image src={comment.authorAvatar} width={30} height={30} alt="" priority={true}/>
                    <div>
                        <span>{comment.author}</span>
                    </div>
                </div>
                <div className="date">
                    <span>{comment.date}</span>
                </div>
            </div>
            <div className="comment-text">
                <span>{comment.text}</span>
            </div>
        </div>
    );
}

export default CommentItem;