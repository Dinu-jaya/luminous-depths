import BioCanvas from "@/components/BioCanvas";
import TorchCursor from "@/components/TorchCursor";
import DepthHUD from "@/components/DepthHUD";
import GlowModeSwitcher from "@/components/GlowModeSwitcher";
import FactTicker from "@/components/FactTicker";
import AudioToggle from "@/components/AudioToggle";
import DepthZone from "@/components/DepthZone";
import CreatureCard from "@/components/CreatureCard";

const Index = () => (
  <div className="bg-background text-foreground font-serif min-h-screen overflow-x-hidden cursor-none">
    <BioCanvas />
    <TorchCursor />
    <DepthHUD />
    <GlowModeSwitcher />
    <FactTicker />
    <AudioToggle />

    {/* Hero */}
    <section className="relative z-[2] min-h-screen flex flex-col items-center justify-center text-center px-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl text-bio-hero animate-pulse-glow tracking-widest mb-4">
        Bioluminescent Bay
      </h1>
      <p className="text-bio-body/70 max-w-[540px] leading-relaxed mb-10 text-base md:text-lg">
        Where the ocean learns to glow. Move your torch through the darkness and watch ancient life ignite beneath the surface.
      </p>
      <span className="text-bio-muted/40 text-sm tracking-[0.18em] uppercase animate-bounce-slow">
        ↓ Dive Deeper
      </span>
    </section>

    {/* Zone 1 – Sunlight */}
    <DepthZone
      depthLabel="0 – 200m · Sunlight Zone"
      title="Where Light Still Reaches"
      subtitle="The epipelagic zone — warm, rich in oxygen, teeming with visible life. Bioluminescence here is camouflage and communication."
    >
      <CreatureCard
        icon="🌊"
        name="Dinoflagellates"
        description="Single-celled plankton that flash electric blue when disturbed. A bay of millions creates waves of living fire."
        stats={["700,000 per gallon", "470–505 nm light"]}
      />
      <CreatureCard
        icon="🐟"
        name="Flashlight Fish"
        description="Carry light organs beneath their eyes to hunt, signal mates, and confuse predators with blink patterns."
        stats={["Blinks 75x/min", "Green-blue glow"]}
      />
      <CreatureCard
        icon="🪼"
        name="Moon Jellyfish"
        description="Pulse with soft blue rings of light when threatened, creating ethereal halos in the shallows."
        stats={["95% water", "Pulsing glow"]}
      />
    </DepthZone>

    {/* Zone 2 – Twilight */}
    <DepthZone
      depthLabel="200 – 1000m · Twilight Zone"
      title="Where Sunlight Fades to Blue"
      subtitle="The mesopelagic — dim, cold, and pressurized. Here, 90% of all creatures produce their own light to survive."
    >
      <CreatureCard
        icon="🦑"
        name="Firefly Squid"
        description="Thousands of photophores cover their arms and mantle, creating dazzling light shows to attract prey."
        stats={["3cm long", "Toyama Bay, Japan"]}
      />
      <CreatureCard
        icon="🐠"
        name="Lanternfish"
        description="The most numerous vertebrate on Earth — rows of photophores along the belly match downwelling light, making them invisible from below."
        stats={["Countershading", "Billion ton biomass"]}
      />
      <CreatureCard
        icon="🦐"
        name="Krill"
        description="Emit green-yellow bioluminescence from ten light organs in coordinated synchronized pulses across massive swarms."
        stats={["Synchronized flash", "Yellow-green glow"]}
      />
    </DepthZone>

    {/* Zone 3 – Midnight */}
    <DepthZone
      depthLabel="1000 – 4000m · Midnight Zone"
      title="Total Darkness. Total Glow."
      subtitle="No sunlight has ever touched here. Every creature that survives in the bathypelagic zone makes its own reality with light."
    >
      <CreatureCard
        icon="🎣"
        name="Anglerfish"
        description="The iconic predator of the deep — a bioluminescent lure dangles above razor teeth to attract curious prey into the void."
        stats={["Bacterial symbiosis", "Lure = esca organ"]}
      />
      <CreatureCard
        icon="🐙"
        name="Vampire Squid"
        description="Not actually a squid — it discharges clouds of glowing blue mucus to confuse predators and vanishes into darkness."
        stats={["Bioluminescent decoy", "Ancient lineage"]}
      />
      <CreatureCard
        icon="🌊"
        name="Sea Pansy"
        description="Colonial organisms anchored to the seafloor that produce rippling waves of green light when touched or disturbed."
        stats={["Wave propagation", "Green glow"]}
      />
    </DepthZone>

    {/* Zone 4 – Abyss */}
    <DepthZone
      depthLabel="4000m+ · The Abyss"
      title="The Last Light"
      subtitle="Crushing pressure. Near-freezing temperatures. Yet even here — in the hadal zone — life finds a way to glow."
    >
      <CreatureCard
        icon="⭐"
        name="Brittle Stars"
        description="Flash bioluminescent warning pulses across their arms when disturbed, signaling danger through the dark."
        stats={["Flash warning", "6000m depth"]}
      />
      <CreatureCard
        icon="🌑"
        name="Black Dragonfish"
        description="Produces red bioluminescent light — invisible to most creatures — giving it a secret flashlight to hunt unseen."
        stats={["Red = invisible", "Infrared hunt"]}
      />
      <CreatureCard
        icon="💫"
        name="Comb Jellies"
        description="Ancient and alien — produce rolling rainbow bioluminescent waves along their cilia that pulse like living aurora."
        stats={["500M years old", "Rainbow pulses"]}
      />
    </DepthZone>

    <footer className="relative z-[2] text-center py-16 text-bio-muted/20 text-sm tracking-[0.12em] uppercase">
      © 2026 · Bioluminescent Bay · Click anywhere to summon the deep · The ocean remembers its own light
    </footer>
  </div>
);

export default Index;
