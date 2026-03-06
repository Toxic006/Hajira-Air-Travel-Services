import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import heroHaram from "@/assets/hero-haram.jpg";
import galleryHaramNight from "@/assets/gallery-haram-night.jpg";
import galleryNabawiInterior from "@/assets/gallery-nabawi-interior.jpg";
import { Calendar, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SpecialPackages = () => {
  return (
    <div>
      <section className="relative h-72 md:h-96 overflow-hidden">
        <motion.img src={heroHaram} alt="Masjid Al Haram" className="h-full w-full object-cover" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(152,50%,8%,0.6)] to-[hsl(152,50%,8%,0.85)]" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-semibold">✦ Exclusive Offers ✦</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Special Packages</h1>
          </motion.div>
        </div>
      </section>

      {/* Image feature */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { src: galleryHaramNight, title: "Extended Stay in Makkah", desc: "Our Double Makkah Package gives you 12 days in the blessed city" },
              { src: galleryNabawiInterior, title: "Ramadan in the Holy Land", desc: "Experience the spiritual atmosphere of Ramadan near the Haram" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative rounded-xl overflow-hidden shadow-xl group aspect-[16/9]"
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(152,50%,8%,0.9)] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-gold" />
                    <span className="text-gold text-sm font-semibold">Special Offer</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-gold-light/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream islamic-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading title="Special Umrah Packages" subtitle="Extended stays and Ramadan specials for an enriched spiritual experience" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PackageCard
              title="Double Makkah Package"
              price="₹1,55,000"
              airline="Saudi Airline (Direct)"
              duration="23 Days"
              highlight
              features={[
                "5 Days Makkah → 11 Days Madina → 7 Days Makkah",
                "Eid in Madina",
                "Makkah Hotel 150 meters from Haram",
                "Madina Hotel 150 meters",
                "3 time meals daily",
                "Laundry service",
                "Makkah & Madina Ziyarat",
                "Shoulder bags",
                "5L Zam Zam water",
              ]}
            />
            <div>
              <PackageCard
                title="Ramadan Special Umrah"
                price="Contact for Price"
                duration="14 Nights / 15 Days"
                features={[
                  "Departure: February – March",
                  "3 star hotels close to Haram",
                  "Hyderabadi food",
                  "Ziyarat tours",
                  "Laundry services",
                  "Zam Zam water",
                  "Limited seats available",
                ]}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 bg-card rounded-xl p-5 shadow-md flex items-center gap-3 border border-gold/30"
              >
                <Calendar className="h-6 w-6 text-gold shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Limited Seats Available!</p>
                  <p className="text-xs text-muted-foreground">Book early for Ramadan special packages. Contact us for current availability.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Don't Miss These <span className="text-gold italic">Special Offers</span>
            </h2>
            <p className="text-gold-light/80 mb-8 max-w-xl mx-auto">Limited time packages with exclusive benefits. Book now to secure your spot.</p>
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

export default SpecialPackages;
