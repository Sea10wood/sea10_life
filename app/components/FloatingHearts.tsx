"use client";

import React, { useImperativeHandle, useState, forwardRef } from "react";
import styles from "@/app/styles/FloatingHearts.module.css";

export type FloatingHeartsRef = {
  addHearts: () => void;
};

const FloatingHearts = forwardRef<FloatingHeartsRef>((_, ref) => {
  const [hearts, setHearts] = useState<number[]>([]);

  useImperativeHandle(ref, () => ({
    addHearts: () => {
      const newHearts = Array.from({ length: 23 }, (_, i) => i + Date.now());
      setHearts((prev) => [...prev, ...newHearts]);

      setTimeout(() => {
        setHearts((prev) => prev.slice(newHearts.length));
      }, 3000); 
    },
  }));

  return (
    <div className={styles.container}>
      {hearts.map((id) => (
        <div key={id} className={styles.heart}>
          {"💕"}
        </div>
      ))}
    </div>
  );
});

export default FloatingHearts;
