import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MapPin, Phone, MessageCircle } from "lucide-react";

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
    <section id="contact" className="relative z-10 overflow-hidden bg-navy px-6 py-24 text-white" ref={ref}>
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-12 max-w-2xl" data-animate>
              <p className="eyebrow mb-3">Start a conversation</p>
              <h2 className="section-title text-white">Need legal<br /><em>guidance?</em></h2>
              <p className="mt-5 max-w-lg font-body text-sm leading-7 text-white/60">Connect with VetriSelvan Advocate for professional consultation and practical legal solutions.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div data-animate className="contact-card border border-white/10 bg-white/[.04] p-6"><Phone className="mb-8 h-6 w-6 text-gold" /><h3 className="mb-2 font-body text-xs uppercase tracking-[.2em] text-white/45">Phone</h3><a href="tel:+919600263273" className="font-display text-lg text-white hover:text-gold">+91 96002 63273</a></div>
              <div data-animate className="contact-card border border-white/10 bg-white/[.04] p-6"><MessageCircle className="mb-8 h-6 w-6 text-gold" /><h3 className="mb-2 font-body text-xs uppercase tracking-[.2em] text-white/45">Connect</h3><div className="flex flex-col gap-3 font-body text-sm"><a href="tel:+919600263273" className="text-white/75 hover:text-gold">Call Now <ArrowUpRight className="ml-1 inline h-3 w-3" /></a><a href="https://wa.me/919600263273" target="_blank" rel="noreferrer" className="text-white/75 hover:text-gold">WhatsApp <ArrowUpRight className="ml-1 inline h-3 w-3" /></a><a href="https://www.google.com/maps/search/?api=1&query=VETRISELVAN+ADVOCATE+CHAMBER+Vellore" target="_blank" rel="noreferrer" className="text-white/75 hover:text-gold">Get Directions <ArrowUpRight className="ml-1 inline h-3 w-3" /></a></div></div>
              <div data-animate className="contact-card border border-white/10 bg-white/[.04] p-6 sm:col-span-2"><MapPin className="mb-8 h-6 w-6 text-gold" /><h3 className="mb-2 font-body text-xs uppercase tracking-[.2em] text-white/45">Office</h3><p className="font-body text-sm leading-6 text-white/75">VETRISELVAN ADVOCATE CHAMBER<br />No:06, Tanjammal Thirumana Mandabam,<br />First Floor, Phase 1, South Avenue Road Sathuvachari,<br />Vellore - 632009</p></div>
            </div>
          </div>

          <div data-animate className="contact-map overflow-hidden border border-gold/35 bg-white/[.04] p-2 lg:min-h-[520px]">
          <iframe
            title="Map to VetriSelvan Advocate Chamber"
            src="https://www.google.com/maps?q=VETRISELVAN%20ADVOCATE%20CHAMBER%2C%20NO%3A06%2C%20TANJAMMAL%20THIRUMANA%20MANDABAM%2C%20FIRST%20FLOOR%2C%20PHASE%201%2C%20SOUTH%20AVENUE%20ROAD%20SATHUVACHARI%2C%20VELLORE%20-%20632009&output=embed"
            loading="lazy"
            className="h-[360px] w-full border-0 grayscale-[.2] lg:h-full lg:min-h-[504px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
