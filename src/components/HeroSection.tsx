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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={containerRef} className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div data-animate className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full gold-border-glow flex items-center justify-center">
            <Scale className="w-10 h-10 text-gold" />
          </div>
        </div>

        <div data-animate className="mb-3">
          <p className="font-accent text-gold-light text-lg tracking-[0.3em] uppercase">
            Legal Business Consultant
          </p>
        </div>

        <h1 data-animate className="font-display text-5xl md:text-7xl font-bold tracking-wider gradient-gold-text mb-6">
          SATHIYANESAN M
        </h1>

        <div data-animate className="w-24 h-px gradient-gold mx-auto mb-6" />

        <p data-animate className="font-body text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
          Providing expert legal counsel with integrity, precision, and a commitment to justice.
        </p>

        <div data-animate className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-sm gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </button>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-sm border border-gold/30 text-gold font-body text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
