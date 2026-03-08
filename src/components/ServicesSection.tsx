import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  Landmark,
  MapPin,
  Scale,
  CreditCard,
  Briefcase,
  Handshake,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Shield, title: "Criminal Cases", desc: "Expert defense and prosecution representation in criminal matters." },
  { icon: Landmark, title: "Civil Litigation", desc: "Comprehensive civil dispute resolution and court representation." },
  { icon: MapPin, title: "Land Registrations", desc: "DTCP, CMDA & RERA approvals with end-to-end documentation." },
  { icon: Scale, title: "Loan Arbitration & Mediation", desc: "Professional mediation for loan disputes and settlements." },
  { icon: CreditCard, title: "CIBIL Clearance, NDC & OTS", desc: "Credit score repair, No Due Certificates & One Time Settlements." },
  { icon: Briefcase, title: "Business Solutions", desc: "Legal advisory for business formation, compliance and strategy." },
  { icon: Handshake, title: "Liaison Services", desc: "Government liaison and regulatory coordination services." },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll("[data-service]");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="services" className="relative z-10 py-24 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="font-display text-3xl md:text-4xl gradient-gold-text">Our Services</h2>
          <div className="w-16 h-px gradient-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              data-service
              className="group p-6 rounded-lg bg-card/50 gold-border-glow hover:bg-card/80 transition-all duration-500 cursor-default"
            >
              <service.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-lg text-foreground mb-2">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
