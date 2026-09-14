import logo from "@/assets/llf.jpeg";

const Footer = () => (
  <footer className="relative z-10 border-t border-white/10 bg-navy px-6 py-10">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="LLF - Lee Law Firm" className="h-10 w-auto rounded-full object-contain" />
        <span className="flex flex-col font-body text-xs font-semibold leading-5 tracking-[.16em] text-white"><span>LLF - LEE LAW FIRM</span><span className="text-gold">P. NEELAMEGAM | ADVOCATE | LEGAL CONSULTANT</span></span>
      </div>
      <div className="text-left md:text-right"><p className="mb-2 max-w-sm font-body text-xs leading-5 text-white/45">LLF - LEE LAW FIRM · Advocates &amp; Legal Consultants</p><p className="font-body text-xs text-white/55">© 2026 LLF - Lee Law Firm. All Rights Reserved.</p></div>
      </div>
      <p className="mt-8 border-t border-white/10 pt-5 text-center font-body text-xs tracking-[.08em] text-white/45">Developed by <a href="https://www.sanjayn.me" target="_blank" rel="noreferrer" className="font-semibold text-gold transition-colors hover:text-white">Sanjay N</a> at <a href="https://www.neovateai.tech" target="_blank" rel="noreferrer" className="font-semibold text-gold transition-colors hover:text-white">Neovate</a></p>
    </div>
  </footer>
);

export default Footer;
