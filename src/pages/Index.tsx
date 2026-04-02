import BioCanvas from "@/components/BioCanvas";
import GlowCard from "@/components/GlowCard";
import SpeciesCard from "@/components/SpeciesCard";

const species = [
  { icon: "🌊", name: "Dinoflagellates", description: "Microscopic plankton that flash electric blue when disturbed by waves or movement." },
  { icon: "🦑", name: "Firefly Squid", description: "Tiny squid with photophores along their arms, lighting up the deep in dazzling patterns." },
  { icon: "🐠", name: "Flashlight Fish", description: "Use light organs beneath their eyes to communicate, hunt prey and evade predators." },
  { icon: "🍄", name: "Sea Pansy", description: "Colonial organisms that produce rippling waves of green light when touched." },
];

const facts = [
  "~76% of deep sea creatures glow",
  "Light emitted at 470–505 nm",
  "No heat produced",
  "Pure chemical reaction",
];

const Index = () => (
  <div className="bg-background text-foreground font-serif min-h-screen overflow-x-hidden">
    <BioCanvas />

    {/* Hero */}
    <section className="relative z-[2] min-h-screen flex flex-col items-center justify-center text-center px-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl text-bio-hero animate-pulse-glow tracking-widest mb-4">
        Bioluminescent Bay
      </h1>
      <p className="text-bio-body max-w-xl leading-relaxed mb-8 opacity-85 text-base md:text-lg">
        Where the ocean learns to glow. Move your cursor through the water and watch the ancient light awaken beneath the surface.
      </p>
      <span className="text-bio-muted text-sm tracking-[0.15em] uppercase animate-bounce-slow">
        ↓ Dive Deeper
      </span>
    </section>

    {/* Content */}
    <div className="relative z-[2] max-w-[860px] mx-auto px-5 md:px-8 py-20">
      <GlowCard title="What is Bioluminescence?">
        <p className="text-bio-body leading-relaxed mb-6">
          Bioluminescence is the production and emission of light by living organisms — a chemical reaction where luciferin molecules react with oxygen, releasing energy as cold blue-green light. In bays like Mosquito Bay in Puerto Rico or Luminous Lagoon in Jamaica, billions of microscopic dinoflagellates create a living, breathing light show every time the water is disturbed.
        </p>
        <div className="flex flex-wrap gap-3">
          {facts.map((fact) => (
            <span
              key={fact}
              className="bg-[hsla(160,100%,75%,0.08)] border border-border rounded-full px-4 py-2 text-sm text-bio-hero tracking-wide"
            >
              {fact}
            </span>
          ))}
        </div>
      </GlowCard>

      <GlowCard title="Glowing Species of the Bay">
        <p className="text-bio-body leading-relaxed mb-6">
          The bay hosts an extraordinary diversity of bioluminescent life — each species with its own unique glow, purpose, and rhythm.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {species.map((s) => (
            <SpeciesCard key={s.name} {...s} />
          ))}
        </div>
      </GlowCard>

      <GlowCard title="Bays of Light — Around the World">
        <p className="text-bio-body leading-relaxed">
          A rare few places on Earth concentrate bioluminescent life so densely that the water itself appears to burn with cold fire. Mosquito Bay in Vieques, Puerto Rico holds the Guinness World Record for the brightest bioluminescent bay, with up to 700,000 dinoflagellates per gallon of water. The Luminous Lagoon in Falmouth, Jamaica glows where a freshwater river meets the sea — the precise salinity creating perfect conditions for the organisms to thrive in unimaginable numbers.
        </p>
      </GlowCard>
    </div>

    <footer className="relative z-[2] text-center py-12 text-bio-muted text-sm tracking-[0.1em] uppercase">
      © 2026 · Bioluminescent Bay · The ocean remembers its own light
    </footer>
  </div>
);

export default Index;
