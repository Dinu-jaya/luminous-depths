import { useRef, useState } from "react";

const AudioToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      // Browsers block playback unless triggered by a direct user gesture.
      console.error("Could not start background music:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/wake-up.mp3" loop preload="auto" />

      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-10 bg-accent/[0.07] border border-accent/25 rounded-full px-3 h-12 flex items-center justify-center text-xs text-bio-hero tracking-wide transition-colors duration-300 hover:bg-accent/15 cursor-pointer"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? "MUSIC ON" : "MUSIC OFF"}
      </button>
    </>
  );
};

export default AudioToggle;
