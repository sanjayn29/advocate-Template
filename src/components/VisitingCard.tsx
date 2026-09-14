import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import visitingCard from "@/assets/VC.jpeg";

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
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 font-body">P. Neelamegam, BSc, MA, LLB, ML, Advocate and Legal Consultant at Lee Law Firm, offers focused legal consultation and representation.</p>
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
              className="absolute inset-0 flex items-center justify-center"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={visitingCard} alt="LLF - Lee Law Firm visiting card" className="w-full max-w-xl rounded-2xl object-contain" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitingCard;
