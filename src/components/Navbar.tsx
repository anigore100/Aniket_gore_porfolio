import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl">
      <div className="section-padding">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between">
          <a href="#home" className="text-base font-bold tracking-tight text-foreground">
            <span className="gradient-text">Aniket</span> Gore
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <a href="#contact" className="btn-primary">
              Contact
            </a>
          </div>

          <button
            className="rounded-xl border border-border/50 bg-card/70 p-2 text-foreground md:hidden"
            onClick={() => setIsOpen((prev) => (prev ? false : true))}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 space-y-1 rounded-2xl border border-border/60 bg-card/80 p-3 shadow-xl md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link block" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2 flex justify-center" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
