import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.webp";

const links = [
  { label: "Start", href: "#hero" },
  { label: "Oferta", href: "#offer" },
  { label: "Galeria", href: "#gallery" },
  { label: "Opinie", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-border">
      <nav className="app-container h-16 lg:h-24 flex items-center justify-between">
        <a href="#hero" aria-label="Catering — strona główna">
          <img
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            className="h-16 lg:h-20 w-auto"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-semibold hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-border bg-cream"
        >
          <ul className="app-container py-5 flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-semibold py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
