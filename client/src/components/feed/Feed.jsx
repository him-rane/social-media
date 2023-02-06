import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import { Posts } from "../../dummyData";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>
        {Posts.map((p) => (
          <Post key={p.id} post={p}></Post>
        ))}
      </div>
    </div>
  );
};

export default Feed;
