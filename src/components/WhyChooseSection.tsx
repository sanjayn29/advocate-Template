import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";

const values = [
  "Strategic Legal Guidance",
  "Practical Solutions",
  "Client-Focused Approach",
  "Professional Representation",
  "Responsive Consultation",
];

const steps = [
  ["01", "Consultation"],
  ["02", "Case Assessment"],
  ["03", "Legal Strategy"],
  ["04", "Representation / Resolution"],
];

const WhyChooseSection = () => (
  <section id="why-choose-us" className="bg-[#ebece9] px-6 py-24">
    <div className="mx-auto grid max-w-6xl gap-20 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <p className="eyebrow mb-3">The difference is in the approach</p>
        <h2 className="section-title text-navy">Why choose<br /><em>LLF - Lee Law Firm?</em></h2>
        <p className="mt-6 max-w-md font-body text-sm leading-7 text-slate-500">Legal matters call for clear thinking, measured advice, and a professional who stays close to the practical question at hand.</p>
      </div>
      <div className="grid gap-0 border-t border-slate-300">
        {values.map((value, index) => (
          <div key={value} className="flex items-center justify-between border-b border-slate-300 py-5">
            <span className="flex items-center gap-4 font-display text-lg text-navy"><Check className="h-4 w-4 text-gold" />{value}</span>
            <span className="font-body text-xs text-slate-400">0{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="mx-auto mt-24 max-w-6xl border-t border-slate-300 pt-10">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow mb-3">A considered process</p><h3 className="font-display text-3xl text-navy">From question to clarity.</h3></div><a href="#contact" className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[.16em] text-navy hover:text-gold">Begin a conversation <ArrowRight className="h-4 w-4" /></a></div>
      <div className="grid gap-4 md:grid-cols-4">{steps.map(([number, title]) => <div key={number} className="process-step group relative rounded-lg border border-gold/30 bg-white/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-white/50"><span className="font-body text-xs tracking-[.2em] text-gold">{number}</span><p className="mt-5 font-display text-lg text-navy transition-colors group-hover:text-[#123d73]">{title}</p></div>)}</div>
    </div>
  </section>
);

export const FloatingContactRail = () => (
  <div className="fixed bottom-5 right-5 z-30 flex flex-row gap-1 rounded-full border border-gold/45 bg-navy/95 p-1.5 shadow-[0_12px_30px_rgba(3,16,35,.3)] backdrop-blur-md md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:flex-col">
    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset">
      <MessageCircle className="h-5 w-5" />
    </a>
    <a href="tel:+919876543210" aria-label="Call LLF Advocate" title="Call +91 98765 43210" className="flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset">
      <Phone className="h-5 w-5" />
    </a>
  </div>
);

export default WhyChooseSection;
