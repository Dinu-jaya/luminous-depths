import { useState } from "react";

const AudioToggle = () => {
  const [muted, setMuted] = useState(true);

  return (
    <button
      onClick={() => setMuted(!muted)}
      className="fixed bottom-6 right-6 z-10 bg-accent/[0.07] border border-accent/25 rounded-full w-12 h-12 flex items-center justify-center text-xl text-bio-hero transition-colors duration-300 hover:bg-accent/15 cursor-pointer"
      aria-label={muted ? "Unmute" : "Mute"}
    >
      {muted ? "🔇" : "🔊"}
    </button>
  );
};

export default AudioToggle;
