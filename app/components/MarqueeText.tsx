export default function MarqueeText() {
    return (
      <div className="absolute top-0 w-full overflow-hidden bg-black text-white">
        <div className="whitespace-nowrap animate-marquee text-lg font-bold">
          <span className="mx-4">Welcome to Sea10's Room</span>
          <span className="mx-4">Welcome to Sea10's Room</span>
          <span className="mx-4">Welcome to Sea10's Room</span>
        </div>
      </div>
    );
  }
  