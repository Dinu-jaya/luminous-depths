import { useState } from "react";

const modes = [
  { name: "Aqua", color: "hsl(160, 100%, 75%)" },
  { name: "Electric", color: "hsl(195, 100%, 60%)" },
  { name: "Violet", color: "hsl(270, 80%, 70%)" },
  { name: "Amber", color: "hsl(40, 100%, 60%)" },
];

interface GlowModeSwitcherProps {
  onModeChange?: (idx: number) => void;
}

const GlowModeSwitcher = ({ onModeChange }: GlowModeSwitcherProps) => {
  const [active, setActive] = useState(0);

  const handleClick = (idx: number) => {
    setActive(idx);
    onModeChange?.(idx);
  };

  return (
    <div className="fixed top-5 right-5 z-10 flex flex-col items-end gap-2">
      <span className="text-[0.6rem] tracking-[0.15em] uppercase text-bio-muted/40">
        Glow Mode
      </span>
      <div className="flex gap-2">
        {modes.map((m, i) => (
          <button
            key={m.name}
            onClick={() => handleClick(i)}
            title={m.name}
            className={`w-[18px] h-[18px] rounded-full transition-transform duration-200 hover:scale-130 ${
              active === i ? "border-2 border-foreground" : "border-2 border-transparent"
            }`}
            style={{ background: m.color }}
          />
        ))}
      </div>
    </div>
  );
};

export default GlowModeSwitcher;
