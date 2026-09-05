import { useState, useEffect } from "react";
import { Scale, Menu, X } from "lucide-react";

const navItems = ["Home", "Services", "Contact", "Card"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-card" : "bg-navy"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <Scale className="w-6 h-6 text-gold" />
          <span className="font-display text-lg text-white tracking-wider">SM</span>
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
