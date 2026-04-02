interface CreatureCardProps {
  icon: string;
  name: string;
  description: string;
  stats?: string[];
}

const CreatureCard = ({ icon, name, description, stats }: CreatureCardProps) => (
  <div className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_10px_40px_hsla(160,100%,75%,0.07)] cursor-default">
    <span className="text-[2rem] block mb-3">{icon}</span>
    <h3 className="text-bio-hero font-serif text-base mb-2 tracking-wide">{name}</h3>
    <p className="text-bio-muted text-sm leading-relaxed mb-3">{description}</p>
    {stats && stats.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {stats.map((s) => (
          <span
            key={s}
            className="bg-accent/[0.07] border border-accent/[0.18] rounded-full px-3 py-1 text-[0.78rem] text-bio-hero/80"
          >
            {s}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default CreatureCard;
