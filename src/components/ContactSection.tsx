import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

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

  const officeLocations = [
    {
      name: "Chennai Office",
      address: "No. 7A, Songarama Chetty Street, 4th Floor, Paries, Chennai - 600 001",
      url: "https://maps.google.com/?q=No.%207A%2C%20Songarama%20Chetty%20Street%2C%20Paries%2C%20Chennai%20600%20001",
    },
    {
      name: "Vellore Office",
      address: "No. 14, Sekkizhar Street, Thirunagar, Vellore - 632 006, Tamil Nadu",
      url: "https://maps.google.com/?q=No.%2014%2C%20Sekkizhar%20Street%2C%20Thirunagar%2C%20Vellore%20632%20006",
    },
  ];

  return (
    <section id="contact" className="relative z-10 overflow-hidden bg-navy px-6 py-24 text-white" ref={ref}>
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-12 max-w-2xl" data-animate>
              <p className="eyebrow mb-3">Start a conversation</p>
              <h2 className="section-title text-white">Need legal<br /><em>guidance?</em></h2>
              <p className="mt-5 max-w-lg font-body text-sm leading-7 text-white/60">Connect with P. Neelamegam and Lee Law Firm for professional legal consultation and representation.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div data-animate className="contact-card border border-white/10 bg-white/[.04] p-6"><Phone className="mb-8 h-6 w-6 text-gold" /><h3 className="mb-2 font-body text-xs uppercase tracking-[.2em] text-white/45">Phone</h3><a href="tel:+919876543210" className="font-display text-lg text-white hover:text-gold">+91 98765 43210</a></div>
              <div data-animate className="contact-card border border-white/10 bg-white/[.04] p-6"><Mail className="mb-8 h-6 w-6 text-gold" /><h3 className="mb-2 font-body text-xs uppercase tracking-[.2em] text-white/45">Email</h3><a href="mailto:neelu.lawyer@gmail.com" className="break-all font-body text-sm text-white hover:text-gold">neelu.lawyer@gmail.com</a></div>
              <div data-animate className="contact-card border border-white/10 bg-white/[.04] p-6 sm:col-span-2"><MapPin className="mb-8 h-6 w-6 text-gold" /><h3 className="mb-2 font-body text-xs uppercase tracking-[.2em] text-white/45">Offices</h3><p className="font-body text-sm leading-6 text-white/75"><strong className="text-white">Chennai Office:</strong><br />No. 7A, Songarama Chetty Street,<br />4th Floor, Paries,<br />Chennai - 600 001<br /><br /><strong className="text-white">Vellore Office:</strong><br />No. 14, Sekkizhar Street,<br />Thirunagar,<br />Vellore - 632 006, Tamil Nadu</p></div>
            </div>
          </div>

          <div data-animate className="grid h-full gap-6 lg:min-h-[520px]">
            {officeLocations.map((office) => (
              <a
                key={office.name}
                href={office.url}
                target="_blank"
                rel="noreferrer"
                className="contact-map flex h-full min-h-[220px] flex-col justify-between overflow-hidden border border-gold/35 bg-white/[.04] p-4 transition-colors hover:border-gold/60 hover:bg-white/[.06]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold">{office.name}</p>
                  <span className="inline-flex items-center gap-1 text-[0.6rem] uppercase tracking-[0.18em] text-white/60">
                    Open Map <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
                <div className="mt-4 flex flex-1 items-center rounded-md border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p className="ml-4 max-w-xs font-body text-sm leading-6 text-white/75">{office.address}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
