"use client";

import { useRef } from "react";
import FloatingHearts, { FloatingHeartsRef } from "./components/FloatingHearts";
import FloatingImage from "./components/FloatingImage";
import LikeButton from "./components/LikeButton";
import MarqueeText from "./components/MarqueeText";
import WaveBackground from "./components/WaveBackground";

export default function Home() {
  const heartsRef = useRef<FloatingHeartsRef>(null);

  const handleLike = () => {
    heartsRef.current?.addHearts(); 
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-500 to-sky-900 text-white font-sans overflow-hidden">
      <WaveBackground />
      <MarqueeText />
      <FloatingImage />
      <LikeButton onLike={handleLike} />
      <FloatingHearts ref={heartsRef} />
    </div>
  );
}
