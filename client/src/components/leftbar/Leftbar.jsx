import React from "react";
import "./leftbar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";

import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledOutlined className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton"> Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img
              src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=900&t=st=1675623219~exp=1675623819~hmac=04b9aa6dd7201b10c0061dded19d1a0de547ccfe813ad96b9f43d40286525936"
              alt=""
              className="leftbarFriendImg"
            />
            <span className="leftbarFriendName"></span>
          </li>
          <li className="leftbarFriend">
            <img
              src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=900&t=st=1675623219~exp=1675623819~hmac=04b9aa6dd7201b10c0061dded19d1a0de547ccfe813ad96b9f43d40286525936"
              alt=""
              className="leftbarFriendImg"
            />
            <span className="leftbarFriendName"></span>
          </li>
          <li className="leftbarFriend">
            <img
              src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=900&t=st=1675623219~exp=1675623819~hmac=04b9aa6dd7201b10c0061dded19d1a0de547ccfe813ad96b9f43d40286525936"
              alt=""
              className="leftbarFriendImg"
            />
            <span className="leftbarFriendName"></span>
          </li>
          <li className="leftbarFriend">
            <img
              src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=900&t=st=1675623219~exp=1675623819~hmac=04b9aa6dd7201b10c0061dded19d1a0de547ccfe813ad96b9f43d40286525936"
              alt=""
              className="leftbarFriendImg"
            />
            <span className="leftbarFriendName"></span>
          </li>
          <li className="leftbarFriend">
            <img
              src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=900&t=st=1675623219~exp=1675623819~hmac=04b9aa6dd7201b10c0061dded19d1a0de547ccfe813ad96b9f43d40286525936"
              alt=""
              className="leftbarFriendImg"
            />
            <span className="leftbarFriendName"></span>
          </li>
          <li className="leftbarFriend">
            <img
              src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=900&t=st=1675623219~exp=1675623819~hmac=04b9aa6dd7201b10c0061dded19d1a0de547ccfe813ad96b9f43d40286525936"
              alt=""
              className="leftbarFriendImg"
            />
            <span className="leftbarFriendName"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
