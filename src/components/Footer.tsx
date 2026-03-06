import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-dark text-primary-foreground">
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-gold mb-2">Hajira Air Travel</h3>
            <p className="text-gold/60 text-xs tracking-[0.2em] uppercase mb-4">Complete Umrah & Hajj Services</p>
            <p className="text-gold-light/70 text-sm mb-6 leading-relaxed">
              Your trusted travel partner for Umrah and Hajj pilgrimage from Hyderabad, India. Making sacred journeys comfortable since years.
            </p>
            <div className="flex items-start gap-2 text-sm text-gold-light/70 mb-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
              <span>Banjara Hills Road No.1, Opp. Kingstone Hospital, Behind Sarvi Restaurant, Hyderabad</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gold-light/70 mb-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <span>+91 8977860730 / 8977860733</span>
            </div>
            <a
              href="https://wa.me/918977860730"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/packages", label: "Umrah Packages" },
                { to: "/special-packages", label: "Special Packages" },
                { to: "/hajj", label: "Hajj Packages" },
                { to: "/hotels", label: "Hotels" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-1 text-sm text-gold-light/70 hover:text-gold transition-colors group"
                >
                  <ChevronRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-gold-light/70">
              {[
                "Air Ticket Booking",
                "Umrah Visa Processing",
                "Hotel Booking (Makkah & Madina)",
                "Hyderabadi Food (3 times)",
                "Ziyarat Tours",
                "Transport Services",
                "Laundry Services",
                "Zam Zam Water (5L)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-green-medium/50 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gold-light/50">
          <p>© {new Date().getFullYear()} Hajira Air Travel Services. All rights reserved.</p>
          <p className="text-xs">Trusted Umrah & Hajj partner from Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
