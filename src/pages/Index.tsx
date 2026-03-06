import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Plane, Hotel, Utensils, Bus, CreditCard, Droplets, ShieldCheck, MapPin, Star, Users, Clock, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroKaaba from "@/assets/hero-kaaba.jpg";
import heroNabawi from "@/assets/hero-nabawi.jpg";
import heroHaram from "@/assets/hero-haram.jpg";
import galleryHaramNight from "@/assets/gallery-haram-night.jpg";
import galleryNabawiInterior from "@/assets/gallery-nabawi-interior.jpg";
import hotelRoom from "@/assets/hotel-room.jpg";
import foodSpread from "@/assets/food-spread.jpg";
import arafat from "@/assets/arafat.jpg";
import transport from "@/assets/transport.jpg";
import makkahSkyline from "@/assets/makkah-skyline.jpg";
import SectionHeading from "@/components/SectionHeading";
import { useState, useEffect, useRef } from "react";

const heroImages = [heroKaaba, heroNabawi, heroHaram];
const heroTexts = [
  "The Holy Kaaba – Heart of Islam",
  "Masjid Al Nabawi – The Prophet's Mosque",
  "Masjid Al Haram – The Sacred Mosque",
];

const services = [
  { icon: Plane, title: "Air Tickets", desc: "Direct flights from Hyderabad to Jeddah via Saudi, Indigo & Air India" },
  { icon: ShieldCheck, title: "Visa Processing", desc: "Complete Umrah & Hajj visa processing with insurance" },
  { icon: Hotel, title: "Hotel Booking", desc: "Premium hotels 150m–800m from Haram" },
  { icon: Utensils, title: "Hyderabadi Food", desc: "Authentic 3-times daily Hyderabadi meals" },
  { icon: MapPin, title: "Ziyarat Tours", desc: "Guided tours of holy sites in Makkah & Madina" },
  { icon: Bus, title: "AC Transport", desc: "Comfortable AC buses throughout your journey" },
  { icon: CreditCard, title: "ID Cards", desc: "Pilgrim identification cards for safety" },
  { icon: Droplets, title: "Zam Zam Water", desc: "5 liters of blessed Zam Zam water" },
];

const stats = [
  { value: "5000+", label: "Happy Pilgrims", icon: Users },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "15+", label: "Package Options", icon: Star },
  { value: "24/7", label: "Customer Support", icon: Clock },
];

const gallery = [
  { src: galleryHaramNight, title: "Masjid Al Haram at Night", desc: "Millions gather for Tawaf around the Holy Kaaba" },
  { src: galleryNabawiInterior, title: "Inside Masjid Nabawi", desc: "The magnificent interior of the Prophet's Mosque" },
  { src: hotelRoom, title: "Premium Hotels", desc: "Luxury rooms with views of the Haram" },
  { src: foodSpread, title: "Hyderabadi Cuisine", desc: "Authentic Indian food served 3 times daily" },
  { src: arafat, title: "Day of Arafat", desc: "The most important day of Hajj pilgrimage" },
  { src: transport, title: "AC Transport", desc: "Comfortable coaches for all your travel needs" },
];

const testimonials = [
  { name: "Mohammed Azhar", text: "Alhamdulillah, Hajira Air Travel made our Umrah journey so smooth. The hotels were very close to Haram and the food was excellent. Highly recommended!", rating: 5 },
  { name: "Fatima Begum", text: "We traveled with the whole family and the service was outstanding. From visa to Ziyarat, everything was perfectly arranged. JazakAllah Khair!", rating: 5 },
  { name: "Ahmed Khan", text: "Best Umrah package from Hyderabad. The Saudi Airline flight was comfortable, hotel was just 150 meters from Haram. Will book again InshaAllah.", rating: 5 },
];

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/[^0-9]/g, "")) || 0;

  useEffect(() => {
    if (!isInView || numericTarget === 0) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(numericTarget / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  const isNumeric = /^\d/.test(target);
  return <span ref={ref}>{isNumeric ? `${count}${target.replace(/[0-9]/g, "")}` : target}</span>;
}

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[650px] overflow-hidden">
        {heroImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: currentImage === idx ? 1 : 0,
              scale: currentImage === idx ? 1 : 1.1,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img src={img} alt={heroTexts[idx]} className="h-full w-full object-cover" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(152,50%,8%,0.6)] via-[hsl(152,50%,10%,0.5)] to-[hsl(152,50%,8%,0.85)]" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-3xl"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gold text-sm tracking-[0.4em] uppercase mb-4 font-semibold"
              >
                ✦ Hajira Air Travel Services ✦
              </motion.p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                Begin Your <span className="text-gold italic">Spiritual Journey</span> With Us
              </h1>
              <p className="text-lg md:text-xl text-gold-light/90 mb-4 max-w-xl leading-relaxed">
                Complete Umrah and Hajj travel packages from Hyderabad with premium hotels, direct flights, Hyderabadi food, and guided Ziyarat.
              </p>

              {/* Hero caption */}
              <motion.p
                key={currentImage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-gold/70 mb-8 italic"
              >
                {heroTexts[currentImage]}
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <Link to="/packages">
                  <Button size="lg" className="bg-gold text-foreground hover:bg-gold-dark font-semibold text-base px-8 shadow-lg shadow-gold/20 transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5">
                    View Packages <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 font-semibold text-base px-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`rounded-full transition-all duration-500 ${currentImage === idx ? "w-10 h-3 bg-gold" : "w-3 h-3 bg-gold/30 hover:bg-gold/60"}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Counter */}
      <section className="relative -mt-16 z-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-xl border border-border backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter target={stat.value} />
                </h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-cream islamic-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Complete Services" subtitle="Everything you need for a comfortable and spiritual Umrah experience" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/30 group cursor-pointer"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-gold-dark transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer - Image Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Experience the Journey" subtitle="A glimpse of what awaits you on your sacred pilgrimage" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedGallery(selectedGallery === idx ? null : idx)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(152,50%,8%,0.9)] via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.desc}</p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="h-4 w-4 text-gold" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Panoramic Makkah */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <motion.img
          src={makkahSkyline}
          alt="Makkah Skyline"
          className="h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(152,50%,8%,0.85)] via-[hsl(152,50%,8%,0.5)] to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg"
            >
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Why Choose Us</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
                Your Trusted <span className="text-gold italic">Umrah Partner</span> from Hyderabad
              </h2>
              <p className="text-gold-light/80 mb-6 leading-relaxed">
                With years of experience and thousands of satisfied pilgrims, we ensure every aspect of your journey is taken care of — from visa to Ziyarat.
              </p>
              <Link to="/about">
                <Button className="bg-gold text-foreground hover:bg-gold-dark font-semibold px-6 shadow-lg shadow-gold/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Learn More About Us <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream islamic-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading title="What Our Pilgrims Say" subtitle="Hear from those who have traveled with us on their sacred journey" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-xl transition-all duration-300 hover:border-gold/30 relative"
              >
                <div className="absolute -top-3 left-6 text-5xl text-gold/30 font-display">"</div>
                <div className="flex items-center gap-1 mb-4 pt-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display font-bold text-primary">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">Hyderabad</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Popular Packages" subtitle="Our most booked Umrah packages from Hyderabad" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Premium Package", price: "₹1,20,000", airline: "Saudi Airline", duration: "15 Days", highlight: true },
              { title: "Indigo Package", price: "₹1,05,000", airline: "Direct Indigo", duration: "15 Days" },
              { title: "Budget Package", price: "₹76,000", airline: "Air India Express", duration: "15 Days" },
            ].map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group ${pkg.highlight ? "ring-2 ring-gold" : ""}`}
              >
                <div className={`p-6 ${pkg.highlight ? "gradient-gold" : "gradient-green"} relative overflow-hidden`}>
                  {pkg.highlight && (
                    <div className="absolute top-3 right-3 bg-foreground/10 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded-full text-foreground">
                      ⭐ Most Popular
                    </div>
                  )}
                  <h3 className={`font-display text-xl font-bold ${pkg.highlight ? "text-foreground" : "text-gold"}`}>{pkg.title}</h3>
                  <div className={`flex items-center gap-1 mt-1 text-sm ${pkg.highlight ? "text-foreground/70" : "text-gold-light"}`}>
                    <Plane className="h-3 w-3" />
                    <span>{pkg.airline}</span>
                  </div>
                  <p className={`text-sm mt-1 ${pkg.highlight ? "text-foreground/70" : "text-gold-light"}`}>{pkg.duration}</p>
                  <p className={`mt-3 font-display text-3xl font-bold ${pkg.highlight ? "text-foreground" : "text-primary-foreground"}`}>{pkg.price}</p>
                </div>
                <div className="bg-card p-6">
                  <Link to="/packages">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-green-medium group-hover:shadow-md transition-all duration-300">
                      View Details <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/packages">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 font-semibold px-8">
                View All Packages <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-green relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-semibold">Limited Seats Available</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Begin Your <span className="text-gold italic">Sacred Journey?</span>
            </h2>
            <p className="text-gold-light/80 mb-8 max-w-xl mx-auto text-lg">
              Book your Umrah or Hajj package today. Departures available throughout the year from Hyderabad.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/packages">
                <Button size="lg" className="bg-gold text-foreground hover:bg-gold-dark font-semibold px-8 shadow-lg shadow-gold/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  View Packages
                </Button>
              </Link>
              <a href="https://wa.me/918977860730" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 font-semibold px-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
