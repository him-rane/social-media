import React from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg?t=st=1675613574~exp=1675614174~hmac=0465d739daa75e4b076d58f2b95bb780fe2376d46d19fb643405426314cf32e0"
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder="What's in your mind Himanshu"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBotton">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon"></PermMedia>
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
