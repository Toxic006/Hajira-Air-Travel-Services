import SectionHeading from "@/components/SectionHeading";
import heroHaram from "@/assets/hero-haram.jpg";
import hotelRoom from "@/assets/hotel-room.jpg";
import makkahSkyline from "@/assets/makkah-skyline.jpg";
import { Star, MapPin, ChevronRight, Wifi, Coffee, Car } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const hotels = [
  { name: "Swissotel Al Maqam", distance: "Adjacent to Haram", stars: 5, desc: "Luxury 5-star directly connected to Haram" },
  { name: "Movenpick Hotel", distance: "50 meters", stars: 5, desc: "Swiss hospitality steps from the Holy Mosque" },
  { name: "Fairmont Makkah", distance: "100 meters", stars: 5, desc: "Clock Tower luxury with panoramic views" },
  { name: "Pullman ZamZam", distance: "100 meters", stars: 5, desc: "Premium comfort with Haram views" },
  { name: "Elaf Kinda Hotel", distance: "150 meters", stars: 4, desc: "Modern amenities near the Haram" },
  { name: "Swiss Al Maqom", distance: "200 meters", stars: 4, desc: "Quality accommodation at great value" },
  { name: "Safwa Makkah", distance: "300 meters", stars: 4, desc: "Comfortable stay for pilgrims" },
  { name: "Dar Al Tawhid", distance: "Adjacent to Haram", stars: 5, desc: "Historic luxury right at the Haram entrance" },
];

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Coffee, label: "Room Service" },
  { icon: Car, label: "Airport Transfer" },
  { icon: Star, label: "Daily Housekeeping" },
];

const Hotels = () => {
  return (
    <div>
      <section className="relative h-72 md:h-96 overflow-hidden">
        <motion.img src={heroHaram} alt="Inside Haram" className="h-full w-full object-cover" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(152,50%,8%,0.6)] to-[hsl(152,50%,8%,0.85)]" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Premium Accommodation</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Hotels Near Haram</h1>
          </motion.div>
        </div>
      </section>

      {/* Hotel room showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-xl group"
            >
              <img src={hotelRoom} alt="Luxury hotel room with Haram view" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2 font-semibold">Luxury Stays</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Premium Hotels with <span className="text-primary">Haram Views</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our packages feature carefully selected hotels within walking distance of Masjid Al Haram. Wake up to the view of the Holy Kaaba and walk to prayers in minutes. All our hotel partners offer modern amenities and exceptional service.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((a, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <a.icon className="h-4 w-4 text-primary" />
                    <span>{a.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hotel cards */}
      <section className="py-20 bg-cream islamic-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Partner Hotels"
            subtitle="Premium hotels within walking distance of Masjid Al Haram"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {hotels.map((hotel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-xl hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{hotel.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{hotel.desc}</p>
                <div className="flex items-center gap-1 text-sm text-primary font-medium">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{hotel.distance} from Haram</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Panoramic CTA */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={makkahSkyline} alt="Makkah" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(152,50%,8%,0.9)] to-[hsl(152,50%,8%,0.4)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Stay Close to the <span className="text-gold italic">Haram</span>
            </h2>
            <p className="text-gold-light/80 mb-6">Some of our premium packages offer hotels within 150 meters of Masjid Al Haram, giving you easy access to prayers and Tawaf.</p>
            <Link to="/packages">
              <Button size="lg" className="bg-gold text-foreground hover:bg-gold-dark font-semibold px-8 shadow-lg shadow-gold/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                View Packages <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;
