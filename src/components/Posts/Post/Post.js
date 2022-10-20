import React, { useState } from "react";

import imagePlaceholder from "../../../assets/image/placeholder.png";
import { ReactComponent as LikeIcon } from "../../../assets/image/like.svg";

import "./Post.css";

export const Post = ({
  title,
  description,
  liked = false,
  image = imagePlaceholder,
}) => {
  const [isLiked, setIsLiked] = useState(liked);

  const customFilling = isLiked ? "crimson" : "black";

  const like = () => setIsLiked(!isLiked);

  const finalDescription = (
    <p>
      {description.length > 100 ? (
        <>
          {description.slice(0, 101)}...
          <a href="/"> More </a>
        </>
      ) : (
        description
      )}
    </p>
  );

  return (
    <div className="post">
      <img src={image} alt="post" />
      <h2>{title}</h2>

      {finalDescription}

      <button onClick={like} className="likeBtn">
        <LikeIcon fill={customFilling} height={25} />
      </button>
    </div>
  );
};
