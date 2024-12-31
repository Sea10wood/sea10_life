"use client";

import { useState } from "react";
import zIndex from "../styles/zIndex";

interface LikeButtonProps {
  onLike: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    onLike(); 
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-16 right-8 p-4 text-3xl bg-transparent border-2 border-white rounded-full"
      style={{ zIndex: zIndex.floatingImage }} 
    >
      <span className="absolute inset-0 flex items-center justify-center">
        {liked ? "❤️" : "♡"} 
      </span>
    </button>
  );
};

export default LikeButton;
