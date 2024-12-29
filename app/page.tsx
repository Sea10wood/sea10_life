import FloatingImage from "./components/FloatingImage";
import MarqueeText from "./components/MarqueeText";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-500 to-sky-900 text-white font-sans overflow-hidden">
      <MarqueeText />
      <FloatingImage />
    </div>
  );
}
