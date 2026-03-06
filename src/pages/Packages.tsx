import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import heroKaaba from "@/assets/hero-kaaba.jpg";
import hotelRoom from "@/assets/hotel-room.jpg";
import foodSpread from "@/assets/food-spread.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Plane, Hotel, Utensils } from "lucide-react";

const packages = [
  {
    title: "Premium Package",
    price: "₹1,20,000",
    airline: "Saudi Airline",
    duration: "14 Nights / 15 Days",
    highlight: true,
    features: [
      "Hyderabad to Jeddah – Saudi Airline",
      "Makkah Hotel 150 meters from Haram",
      "Madina Hotel 150–200 meters from Masjid",
      "3 time Hyderabadi Indian food",
      "Laundry service",
      "Cabin bag",
      "5L Zam Zam water",
      "Ziyarat in Makkah & Madina",
    ],
  },
  {
    title: "Indigo Package",
    price: "₹1,05,000",
    airline: "Direct Indigo Flight",
    duration: "15 Days",
    features: [
      "Direct Indigo Flight",
      "Makkah Hotel 300 meters from Haram",
      "Madina Hotel 100 meters",
      "Visa + Insurance",
      "3 time Hyderabadi food",
      "Laundry services",
      "Cabin bag",
      "5L Zam Zam water",
    ],
  },
  {
    title: "Air India Express Package",
    price: "₹76,000",
    airline: "Air India Express",
    duration: "14 Nights / 15 Days",
    features: [
      "Direct Flight Hyd – Jeddah – Madina – Hyd",
      "Room type: 4 bed sharing",
      "Makkah Hotel 800 meters from Haram",
      "Madina Hotel 800 meters",
      "Visa with insurance",
      "3 time Indian food",
      "Unlimited laundry",
      "Cabin bag + hand bag",
      "ID cards",
      "5L Zam Zam water",
    ],
  },
];

const highlights = [
  { icon: Plane, title: "Direct Flights", desc: "Non-stop flights from Hyderabad to Jeddah", img: heroKaaba },
  { icon: Hotel, title: "Premium Hotels", desc: "Hotels within walking distance of Haram", img: hotelRoom },
  { icon: Utensils, title: "Hyderabadi Food", desc: "Authentic home-style meals 3 times daily", img: foodSpread },
];

const Packages = () => {
  return (
    <div>
      <section className="relative h-72 md:h-96 overflow-hidden">
        <motion.img src={heroKaaba} alt="Kaaba" className="h-full w-full object-cover" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(152,50%,8%,0.6)] to-[hsl(152,50%,8%,0.85)]" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Affordable & Premium</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Umrah Packages</h1>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((h, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                className="rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="h-40 overflow-hidden">
                  <img src={h.img} alt={h.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="bg-card p-5 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <h.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-foreground">{h.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream islamic-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading title="Choose Your Package" subtitle="Affordable Umrah packages from Hyderabad with flights, hotels, food, and more" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Can't Decide? <span className="text-gold italic">We'll Help!</span>
            </h2>
            <p className="text-gold-light/80 mb-8 max-w-xl mx-auto">
              Contact us on WhatsApp and our team will help you choose the perfect package for your needs and budget.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/918977860730" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gold text-foreground hover:bg-gold-dark font-semibold px-8 shadow-lg shadow-gold/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  WhatsApp Us <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
              <Link to="/special-packages">
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 font-semibold px-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
                  View Special Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
