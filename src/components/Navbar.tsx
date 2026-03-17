import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#project", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-lg">
      <div className="section-padding">
        <div className="section-container flex items-center justify-between py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight text-foreground">
            Aniket Gore
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-primary hidden md:inline-flex">
            Let&apos;s Connect
          </a>

          <button
            className="rounded-lg p-2 text-foreground md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="mb-4 rounded-2xl border border-border bg-background/95 p-3 md:hidden">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary mt-2 justify-center" onClick={() => setIsOpen(false)}>
                Let&apos;s Connect
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
