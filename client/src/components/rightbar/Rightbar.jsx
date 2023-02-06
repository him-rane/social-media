import React from "react";
import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="https://cdn-icons-png.flaticon.com/512/837/837891.png"
            alt=""
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img
          className="rightbarAd"
          src="https://img.freepik.com/free-vector/flat-golden-circle-balloons-birthday-background_52683-34659.jpg?w=900&t=st=1675656500~exp=1675657100~hmac=3a59a5aafd4e18447fa1e6a2e42183e6645c816e95f8ce3742dbf0e72624cc3a"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
