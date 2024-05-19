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
                        {comment.author}
                    </div>
                </div>
                <div className="date">
                    {comment.date}
                </div>
            </div>
            <div className="comment-text">
                {comment.text}
            </div>
        </div>
    );
}

export default CommentItem;