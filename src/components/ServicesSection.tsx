import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scale,
  Shield,
  Users,
  Home,
  Briefcase,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Scale, title: "Civil Law", desc: "Clear legal guidance and representation for civil disputes and proceedings." },
  { icon: Shield, title: "Criminal Law", desc: "Dedicated defense and representation in criminal matters." },
  { icon: Users, title: "Family Law", desc: "Practical legal support for family matters and related proceedings." },
  { icon: Home, title: "Property Law", desc: "Advice and representation for property transactions and disputes." },
  { icon: Briefcase, title: "Corporate Law", desc: "Legal counsel for companies, businesses, compliance, and commercial matters." },
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
    <section id="services" className="relative z-10 bg-[#f5f5f2] px-6 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="eyebrow mb-3">Practice areas</p><h2 className="section-title text-navy">Legal support with<br /><em>clear direction.</em></h2></div>
          <p className="max-w-sm font-body text-sm leading-7 text-slate-500">Focused counsel for individuals, families, and businesses seeking practical legal solutions.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              data-service
              className="service-card group cursor-default rounded-lg border border-gold/30 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_rgba(20,42,72,.1)]"
            >
              <div className="mb-8 flex items-start justify-between"><service.icon className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-110" /><span className="font-body text-xs text-slate-300">0{services.indexOf(service) + 1}</span></div>
              <h3 className="mb-3 font-display text-lg text-navy">{service.title}</h3>
              <p className="font-body text-sm leading-6 text-slate-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
