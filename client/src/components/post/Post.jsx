import React from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="https://img.freepik.com/free-photo/smiling-attractive-young-woman-texting-sms-phone_1262-19398.jpg?w=900&t=st=1675627131~exp=1675627731~hmac=48535852f1af06291904b1b74109616a38a83f1779ce5cb87611ca419b01f284"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Himanshu Rane</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert></MoreVert>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey its my first post</span>
          <img
            src="https://img.freepik.com/free-photo/sunrise-dal-lake-kashmir-india_1232-4766.jpg?w=900&t=st=1675627055~exp=1675627655~hmac=afc80d971f32a280d1306ef5287a00a39dd43add903116912c020881bc14c74c"
            alt=""
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="https://cdn-icons-png.flaticon.com/512/889/889140.png"
              alt=""
            />
            <img
              className="likeIcon"
              src="https://cdn-icons-png.flaticon.com/512/2589/2589054.png"
              alt=""
            />
            <span className="likeCounter">34 People Like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">19 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
