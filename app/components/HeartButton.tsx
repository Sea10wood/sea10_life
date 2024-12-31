"use client";

import { useState } from "react";
import styles from "@/app/styles/HeartButton.module.css";
import HeartEffect from "./HeartEffect";

export default function HeartButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // ハートエフェクトを追加
    setHearts((prev) => [...prev, Date.now()]);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.heartButton} ${isLiked ? styles.liked : ""}`}
        onClick={handleLike}
      >
        ❤️
      </button>
      {hearts.map((id) => (
        <HeartEffect key={id} onComplete={() => setHearts((prev) => prev.filter((h) => h !== id))} />
      ))}
    </div>
  );
}
