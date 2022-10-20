import React from "react";
import "./User.css";
import avatar from '../../../../assets/image/avatar.jpeg'

export const User = () => {
  return (
    <div className="user">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>

      <h3>Olha</h3>
    </div>
  );
};
