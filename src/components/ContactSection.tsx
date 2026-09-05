import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll("[data-animate]");
    gsap.fromTo(
      els,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="contact" className="relative z-10 py-24 px-6 bg-muted" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-3">Reach Out</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy">Contact Us</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div data-animate className="flex flex-col items-center text-center p-6 rounded-sm border border-light-gray bg-white shadow-sm">
            <Phone className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-display text-sm text-navy mb-2 tracking-wider">Phone</h3>
            <a href="tel:+919944110082" className="font-body text-sm text-muted-foreground hover:text-gold transition-colors">
              +91 99441 10082
            </a>
          </div>

          <div data-animate className="flex flex-col items-center text-center p-6 rounded-sm border border-light-gray bg-white shadow-sm">
            <Mail className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-display text-sm text-navy mb-2 tracking-wider">Email</h3>
            <a href="mailto:ms11victor@gmail.com" className="font-body text-sm text-muted-foreground hover:text-gold transition-colors">
              ms11victor@gmail.com
            </a>
          </div>

          <div data-animate className="flex flex-col items-center text-center p-6 rounded-sm border border-light-gray bg-white shadow-sm">
            <MapPin className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-display text-sm text-navy mb-2 tracking-wider">Address</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Vetriselvan Advocate Chamber<br />
              No:06, Tanjammal Thirumana Mandabam<br />
              First Floor, Phase 1<br />
              South Avenue Road, Sathuvachari<br />
              Vellore - 632009
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
