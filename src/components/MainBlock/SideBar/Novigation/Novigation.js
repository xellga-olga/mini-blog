import React from "react";
import "./Novigation.css";

import blogIcon from "../../../../assets/image/blog.svg";
import favoriteIcon from "../../../../assets/image/favorite.svg";
import settingsIcon from "../../../../assets/image/settings.svg";

export const Novigation = () => {
  return (
    <nav className="nav">
      <a href="/" className="active" >
        <img src={blogIcon} alt="Blog" />
        <span>Blog</span>
      </a>

      <a href="/">
        <img src={favoriteIcon} alt="Favorite" />
        <span>Favorite</span>
      </a>

      <a href="/">
        <img src={settingsIcon} alt="Settings" />
        <span>Settings</span>
      </a>
    </nav>
  );
};
