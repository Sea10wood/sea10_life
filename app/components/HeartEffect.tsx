"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/HeartEffect.module.css";

interface HeartEffectProps {
  onComplete: () => void;
}

export default function HeartEffect({ onComplete }: HeartEffectProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 2000); // エフェクトの継続時間
    return () => clearTimeout(timer);
  }, [onComplete]);

  return visible ? <div className={styles.heart}>❤️</div> : null;
}
