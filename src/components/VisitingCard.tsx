import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const VisitingCard = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section id="about" className="relative z-10 bg-white px-6 py-24" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">The practice</p>
          <h2 className="section-title text-navy">Trusted legal guidance<br /><em>with a practical approach.</em></h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 font-body">S VetriSelvan, B.Com, LLB, Advocate and Senior Consultant, offers focused legal consultation, representation, and strategic guidance with a client-focused approach.</p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl" style={{ perspective: "1000px" }}>
          <div
            className="relative w-full transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateY(0deg)",
              aspectRatio: "2.5",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 rounded-lg border border-gold/40 bg-navy p-8 flex flex-col items-center justify-center gap-3"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Scale className="w-12 h-12 text-gold" />
              <h3 className="font-display text-2xl text-white tracking-wider">S VETRYSELVAN</h3>
              <p className="font-body text-white/70 tracking-[0.2em] text-sm uppercase">B.COM, LLB <span className="text-gold">|</span> ADVOCATE</p>
              <p className="font-body text-xs uppercase tracking-[.25em] text-gold">Senior Consultant</p>
              <div className="w-16 h-px bg-gold mt-2" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitingCard;
