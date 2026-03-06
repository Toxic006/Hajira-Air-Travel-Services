import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/packages", label: "Umrah Packages" },
  { to: "/special-packages", label: "Special Packages" },
  { to: "/hajj", label: "Hajj Packages" },
  { to: "/hotels", label: "Hotels" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-green-dark sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-green-medium py-2 text-sm">
          <div className="flex items-center gap-2 text-gold-light">
            <Phone className="h-3 w-3" />
            <a href="tel:+918977860730" className="hover:text-gold transition-colors">+91 8977860730</a>
            <span className="text-green-medium">|</span>
            <a href="tel:+918977860733" className="hover:text-gold transition-colors">+91 8977860733</a>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex flex-col">
            <span className="font-display text-xl font-bold text-gold">Hajira Air Travel</span>
            <span className="text-xs text-gold-light tracking-widest uppercase">Complete Umrah & Hajj Services</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-gold bg-green-medium"
                    : "text-primary-foreground hover:text-gold hover:bg-green-medium/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-gold bg-green-medium"
                    : "text-primary-foreground hover:text-gold hover:bg-green-medium/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
