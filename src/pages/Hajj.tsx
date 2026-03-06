import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import heroKaaba from "@/assets/hero-kaaba.jpg";
import arafat from "@/assets/arafat.jpg";
import makkahSkyline from "@/assets/makkah-skyline.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle } from "lucide-react";

const hajjHighlights = [
  "Complete Hajj rituals with experienced guides",
  "AC tents in Mina, Arafat & Muzdalifah",
  "Premium hotels close to Haram",
  "Authentic Indian meals with refreshments",
  "Full Ziyarat of Makkah & Madina",
  "All transport included in package",
];

const Hajj = () => {
  return (
    <div>
      <section className="relative h-72 md:h-96 overflow-hidden">
        <motion.img src={heroKaaba} alt="Kaaba" className="h-full w-full object-cover" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(152,50%,8%,0.6)] to-[hsl(152,50%,8%,0.85)]" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-semibold">The Fifth Pillar of Islam</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Hajj Packages</h1>
          </motion.div>
        </div>
      </section>

      {/* Arafat section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={arafat} alt="Day of Arafat" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(152,50%,8%,0.85)] via-[hsl(152,50%,8%,0.5)] to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-md">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                The <span className="text-gold italic">Greatest</span> Pilgrimage
              </h2>
              <p className="text-gold-light/80 leading-relaxed mb-4">
                Hajj is the fifth pillar of Islam, a once-in-a-lifetime journey that every Muslim aspires to undertake. Let us help you fulfill this sacred obligation with comfort and care.
              </p>
              <div className="space-y-2">
                {hajjHighlights.slice(0, 3).map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gold-light">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream islamic-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading title="Hajj Packages 2025" subtitle="Complete Hajj packages with flights, hotels, AC transport, meals, and guided rituals" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PackageCard
              title="20 Days Hajj Package"
              price="₹5,20,000"
              duration="20 Days"
              highlight
              features={[
                "Air tickets included",
                "Hajj visa endorsement",
                "AC transport (Jeddah–Makkah–Madina–Jeddah)",
                "3 times Indian meals with tea/coffee/juice",
                "Laundry services",
                "5 days Hajj rituals",
                "Mina, Arafat, Muzdalifah AC tents",
                "Makkah hotel 400–500m from Haram",
                "Madina hotel 100–200m",
                "Makkah & Madina city Ziyarat",
              ]}
            />
            <PackageCard
              title="35 Days Hajj Package"
              price="₹5,50,000"
              duration="35 Days"
              features={[
                "Air tickets included",
                "Hajj visa endorsement",
                "AC transport (Jeddah–Makkah–Madina–Jeddah)",
                "3 times Indian meals with tea/coffee/juice",
                "Laundry services",
                "5 days Hajj rituals",
                "Mina, Arafat, Muzdalifah AC tents",
                "Makkah hotel 400–500m from Haram",
                "Madina hotel 100–200m",
                "Makkah & Madina city Ziyarat",
                "Extended stay for spiritual enrichment",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[35vh] min-h-[280px] overflow-hidden">
        <img src={makkahSkyline} alt="Makkah" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(152,50%,8%,0.9)] to-[hsl(152,50%,8%,0.4)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Book Your <span className="text-gold italic">Hajj Package</span> Today
            </h2>
            <p className="text-gold-light/80 mb-6 max-w-xl mx-auto">Limited seats available. Contact us now to reserve your spot for Hajj 2025.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold text-foreground hover:bg-gold-dark font-semibold px-8 shadow-lg shadow-gold/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Book Now <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hajj;
