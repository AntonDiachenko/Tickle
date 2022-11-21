
import "./post.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Post(params) {
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/avatar1.jpg" alt="" className="postProfileImg" />
                        <span className="postUserName">Olivia Brown</span>
                        <span className="postDate"> 5 mins ago</span>
                    </div>
                    <div className="posTopRight">
                   < MoreHorizIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its my first post :)</span>
                    <img src="/assets/post/1.jpg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/post/like.png" alt="" className="likeIcon" />
                        <img src="/assets/post/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">26</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> 5 comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
};
