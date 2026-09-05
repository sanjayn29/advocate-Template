import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Scale } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const els = containerRef.current.querySelectorAll("[data-animate]");
    gsap.fromTo(
      els,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(120deg, transparent 0 55%, hsl(42 45% 41% / 0.5) 55% 55.2%, transparent 55.2%)" }} />
      <div ref={containerRef} className="relative z-10 max-w-6xl w-full mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div data-animate className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 border border-gold flex items-center justify-center">
            <Scale className="w-10 h-10 text-gold" />
            </div>
            <div className="h-px w-20 bg-gold" />
          </div>

        <div data-animate className="mb-4">
          <p className="font-body text-gold text-sm font-semibold tracking-[0.25em] uppercase">
            Legal Business Consultant
          </p>
        </div>

        <h1 data-animate className="font-display text-3xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight break-words mb-6">
          SATHIYANESAN <span className="text-gold">M</span>
        </h1>

        <div data-animate className="w-24 h-px bg-gold mb-6" />

        <p data-animate className="font-body text-white/75 text-lg leading-relaxed max-w-xl">
          Providing expert legal counsel with integrity, precision, and a commitment to justice.
        </p>

        <div data-animate className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-sm bg-gold text-white font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors"
          >
            Get in Touch
          </button>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-sm border border-white/40 text-white font-body text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Our Services
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
