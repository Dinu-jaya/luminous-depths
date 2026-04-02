import { ReactNode } from "react";

interface DepthZoneProps {
  depthLabel: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const DepthZone = ({ depthLabel, title, subtitle, children }: DepthZoneProps) => (
  <section className="relative z-[2] min-h-screen flex flex-col items-center justify-center px-5 md:px-8 py-20">
    <div className="text-center mb-10">
      <span className="inline-block text-[0.7rem] tracking-[0.2em] uppercase border border-border rounded-full px-4 py-1.5 mb-4 text-bio-muted/60">
        {depthLabel}
      </span>
      <h2 className="text-2xl md:text-4xl text-bio-hero font-serif tracking-wide"
        style={{ textShadow: "0 0 30px hsla(160,100%,75%,0.4)" }}>
        {title}
      </h2>
      <p className="mt-3 text-bio-body/55 text-base max-w-[500px] mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[860px] w-full">
      {children}
    </div>
  </section>
);

export default DepthZone;
