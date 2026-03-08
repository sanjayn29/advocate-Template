import { Scale } from "lucide-react";

const Footer = () => (
  <footer className="relative z-10 border-t border-gold/10 py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Scale className="w-5 h-5 text-gold" />
        <span className="font-display text-sm text-gold tracking-wider">Sathiyanesan M</span>
      </div>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} All rights reserved. Legal Business Consultant.
      </p>
    </div>
  </footer>
);

export default Footer;
