import { ReactNode } from "react";

interface GlowCardProps {
  title: string;
  children: ReactNode;
}

const GlowCard = ({ title, children }: GlowCardProps) => (
  <div className="bg-[hsla(170,100%,40%,0.04)] border border-border rounded-3xl p-8 md:p-10 mb-10 backdrop-blur-sm transition-all duration-400 hover:border-[hsla(170,100%,40%,0.4)] hover:shadow-[0_0_40px_hsla(170,100%,40%,0.08)]">
    <h2 className="text-bio-hero font-serif text-xl md:text-2xl mb-4 tracking-wide">
      ✦ {title}
    </h2>
    {children}
  </div>
);

export default GlowCard;
