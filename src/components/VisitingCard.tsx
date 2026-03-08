import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const VisitingCard = () => {
  const [flipped, setFlipped] = useState(false);
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
    <section id="card" className="relative z-10 py-24 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-3">Digital Card</p>
          <h2 className="font-display text-3xl md:text-4xl gradient-gold-text">Visiting Card</h2>
          <div className="w-16 h-px gradient-gold mx-auto mt-4" />
          <p className="mt-4 text-sm text-muted-foreground font-body">Click the card to flip</p>
        </div>

        <div
          className="mx-auto cursor-pointer"
          style={{ perspective: "1000px", maxWidth: "480px" }}
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className="relative w-full transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              aspectRatio: "1.75",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 rounded-lg gold-border-glow bg-card p-8 flex flex-col items-center justify-center gap-3"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Scale className="w-12 h-12 text-gold" />
              <h3 className="font-display text-2xl gradient-gold-text tracking-wider">SATHIYANESAN M</h3>
              <p className="font-accent text-muted-foreground tracking-[0.2em] text-sm uppercase">
                Legal Business Consultant
              </p>
              <div className="w-16 h-px gradient-gold mt-2" />
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 rounded-lg gold-border-glow bg-card p-6 flex flex-col justify-center gap-4"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-muted-foreground">+91 99441 10082</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-muted-foreground">ms11victor@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-muted-foreground leading-relaxed">
                  Vetriselvan Advocate Chamber, No:06, Tanjammal Thirumana Mandabam,
                  First Floor, Phase 1, South Avenue Road, Sathuvachari, Vellore - 632009
                </span>
              </div>
              <div className="w-16 h-px gradient-gold mx-auto mt-2" />
              <p className="text-center font-display text-xs text-gold tracking-widest">SATHIYANESAN M</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitingCard;
