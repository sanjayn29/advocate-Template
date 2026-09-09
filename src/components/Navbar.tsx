import { useState, useEffect } from "react";
import { Scale, Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Services", "Why Choose Us", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    const target = id.toLowerCase().replaceAll(" ", "-");
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-navy/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(10,24,45,.18)]" : "border-b border-white/10 bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-10">
        <button onClick={() => scrollTo("home")} className="group flex items-center gap-3">
          <Scale className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-105" />
          <span className="flex flex-col text-left font-body text-[0.68rem] font-semibold leading-tight tracking-[0.2em] text-white"><span>VETRISELVAN</span><span className="text-gold">ADVOCATE</span></span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-body tracking-widest uppercase text-white/80 hover:text-gold transition-colors duration-300"
            >
              {item}
            </button>
          ))}
          <a href="tel:+919600263273" className="button-primary ml-2 px-4 py-2 text-[0.65rem]">Book Consultation</a>
        </div>

        {/* Mobile toggle */}
        <button aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} className="md:hidden text-gold" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-gold/30 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left px-6 py-3 text-sm font-body tracking-widest uppercase text-white/80 hover:text-gold hover:bg-navy-light transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
