import CommentItem from "./CommentItem/CommentItem";
import WriteCommentForm from "./WriteCommentForm/WriteCommentForm";

import "@/src/components/pages/VideoPlayerPage/VideoPlayerPart/Comments/Comments.css";



const Comments = () => {
    return (
        <div className="comments-wrapper">
            <WriteCommentForm/>
            <div className="comments-list">
                <CommentItem comment={{
                    author: "Dima",
                    date: "01.05.2025",
                    authorAvatar: "/miet.png",
                    text: "Comment"
                }}/>
                <CommentItem comment={{
                    author: "Author",
                    date: "01.05.2024",
                    authorAvatar: "/miet.png",
                    text: "Some text"
                }}/>
            </div>
        </div>
    );
}

export default Comments;