import { useEffect, useState } from "react";

const zones = [
  { maxScroll: 0.2, depth: "0m", temp: "20°C", pressure: "1 atm" },
  { maxScroll: 0.4, depth: "200m", temp: "10°C", pressure: "21 atm" },
  { maxScroll: 0.6, depth: "1000m", temp: "4°C", pressure: "100 atm" },
  { maxScroll: 0.8, depth: "4000m", temp: "2°C", pressure: "400 atm" },
  { maxScroll: 1, depth: "6000m+", temp: "1°C", pressure: "600 atm" },
];

const DepthHUD = () => {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollPct(Math.min(1, pct));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const zone = zones.find((z) => scrollPct <= z.maxScroll) || zones[zones.length - 1];

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-2 hidden md:flex">
      <span className="text-[0.62rem] tracking-[0.15em] uppercase text-bio-muted/50">Depth</span>
      <div className="w-1.5 h-40 bg-accent/[0.08] border border-accent/20 rounded relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 rounded"
          style={{
            height: `${scrollPct * 100}%`,
            background: "linear-gradient(to top, hsl(var(--glow-primary)), hsl(var(--glow-secondary) / 0.4))",
            transition: "height 0.4s ease",
          }}
        />
      </div>
      <div className="text-[0.7rem] text-bio-hero tracking-wide text-center leading-snug">
        <div>{zone.depth}</div>
        <div className="text-bio-muted text-[0.6rem]">{zone.temp}</div>
        <div className="text-bio-muted text-[0.6rem]">{zone.pressure}</div>
      </div>
    </div>
  );
};

export default DepthHUD;
