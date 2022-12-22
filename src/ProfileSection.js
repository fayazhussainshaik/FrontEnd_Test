import React from "react";
import profiles from "./images/Profile.png";
import "./styles.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="rectangle">
        <div className="profilepic">
          <img src={profiles} alt="profilepic" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
