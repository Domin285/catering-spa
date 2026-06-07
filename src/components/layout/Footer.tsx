import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-card py-10 lg:py-12">
      <div className="app-container">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <a href="#hero" aria-label="Catering — strona główna">
            <img
              src={logo}
              alt="Catering"
              width={144}
              height={144}
              className="h-28 lg:h-32 w-auto"
            />
          </a>

          <div className="flex flex-col gap-3 text-dark/80 lg:flex-row lg:items-center lg:gap-12">
            <a
              href="tel:123456789"
              className="hover:text-primary transition-colors"
            >
              tel. 123 456 789
            </a>

            <a
              href="mailto:kontakt@catering.pl"
              className="hover:text-primary transition-colors"
            >
              email: kontakt@catering.pl
            </a>

            <p>©2026 Catering Smak i Styl</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center hover:text-primary hover:border-primary transition-colors"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="X / Twitter"
              className="w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center hover:text-primary hover:border-primary transition-colors"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center hover:text-primary hover:border-primary transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
