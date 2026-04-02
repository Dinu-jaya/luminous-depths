import { useEffect, useState } from "react";

const facts = [
  "Move your cursor through the water to awaken the light ✦",
  "~76% of deep sea creatures produce their own light",
  "Bioluminescence evolved independently over 50 times",
  "Dinoflagellates flash at 470–505 nanometers",
  "The deepest bioluminescence recorded is at 3,800m",
  "Firefly squid migrate to the surface every spring in Japan",
  "Some jellyfish glow for up to 10 seconds when disturbed",
  "Anglerfish lures contain symbiotic bacteria",
];

const FactTicker = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % facts.length);
        setVisible(true);
      }, 600);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-10 bg-background/75 border border-border rounded-full px-5 py-2 text-[0.78rem] text-bio-hero/85 max-w-[420px] w-[90%] text-center tracking-wide backdrop-blur-lg transition-opacity duration-600"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {facts[index]}
    </div>
  );
};

export default FactTicker;
