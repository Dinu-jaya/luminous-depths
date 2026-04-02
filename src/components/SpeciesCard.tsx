interface SpeciesCardProps {
  icon: string;
  name: string;
  description: string;
}

const SpeciesCard = ({ icon, name, description }: SpeciesCardProps) => (
  <div className="bg-secondary/50 border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_hsla(160,100%,75%,0.12)] cursor-default">
    <span className="text-4xl block mb-3">{icon}</span>
    <h3 className="text-bio-hero font-serif text-base mb-1">{name}</h3>
    <p className="text-bio-muted text-sm leading-relaxed">{description}</p>
  </div>
);

export default SpeciesCard;
