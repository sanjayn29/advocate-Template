import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDownRight, ArrowRight, Scale } from "lucide-react";
import logo from "@/assets/llf-logo.jpeg";

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
    <section id="home" className="hero relative min-h-[min(860px,100vh)] flex items-center overflow-hidden bg-navy text-white">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div ref={containerRef} className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pb-16 pt-32 lg:grid-cols-[minmax(0,1fr)_minmax(300px,.72fr)] lg:gap-10 lg:px-10 lg:pt-28">
        <div className="min-w-0 max-w-2xl lg:pr-8">
          <div data-animate className="mb-8 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-gold-light">
            <span className="h-px w-12 bg-gold" />
            LLF - Lee Law Firm
          </div>
          <p data-animate className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.24em] text-white/65">BSc, MA, LLB, ML <span className="mx-2 text-gold">|</span> Advocate | Legal Consultant</p>
          <h1 data-animate className="max-w-full whitespace-nowrap font-display text-[clamp(1.7rem,4.5vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.055em]">P. <span className="text-gold">N</span>EELAMEGAM</h1>
          <div data-animate className="mt-7 h-px w-20 bg-gold" />
          <p data-animate className="mt-7 max-w-lg font-display text-xl leading-relaxed text-white/85 sm:text-2xl">Advocates &amp; Legal Consultants</p>
          <p data-animate className="mt-5 max-w-md font-body text-sm leading-7 text-white/55">P. Neelamegam, Advocate and Legal Consultant at Lee Law Firm.</p>
          <div data-animate className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="tel:+919876543210" className="button-primary inline-flex items-center justify-center gap-3">Book a Consultation <ArrowRight className="h-4 w-4" /></a>
            <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="button-ghost inline-flex items-center justify-center gap-3">Explore Services <ArrowDownRight className="h-4 w-4" /></button>
          </div>
          <a data-animate href="tel:+919876543210" className="mt-7 inline-flex text-sm text-white/60 transition-colors hover:text-gold">Call +91 98765 43210 <span className="ml-2 text-gold">↗</span></a>
        </div>

        <div data-animate className="hero-emblem relative mx-auto flex aspect-square w-[min(74vw,410px)] items-center justify-center lg:ml-0 lg:mr-0 lg:w-[min(38vw,460px)] lg:justify-self-end lg:translate-x-12" aria-label="LLF - Lee Law Firm logo">
          <div className="emblem-ring emblem-ring-one" />
          <div className="emblem-ring emblem-ring-two" />
          <div className="emblem-cross absolute h-px w-3/4 bg-gold/25" />
          <div className="emblem-cross absolute h-3/4 w-px bg-gold/25" />
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-gold/55 bg-navy/60 sm:h-56 sm:w-56">
            <img src={logo} alt="LLF - Lee Law Firm" className="w-40 rounded-full object-contain sm:w-52" />
          </div>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.35em] text-white/45">Justice • Clarity • Counsel</span>
        </div>
      </div>
      <div className="absolute bottom-7 left-6 hidden items-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-white/35 sm:flex lg:left-10"><span className="h-8 w-px bg-gold/60" /> Scroll to explore</div>
    </section>
  );
};

export default HeroSection;
