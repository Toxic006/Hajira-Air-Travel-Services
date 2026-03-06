import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import heroNabawi from "@/assets/hero-nabawi.jpg";
import galleryHaramNight from "@/assets/gallery-haram-night.jpg";
import makkahSkyline from "@/assets/makkah-skyline.jpg";
import foodSpread from "@/assets/food-spread.jpg";
import transport from "@/assets/transport.jpg";
import { ShieldCheck, Heart, Star, Users, CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  { icon: ShieldCheck, title: "Trust & Reliability", desc: "Years of dedicated service with honesty and transparency in every package we offer." },
  { icon: Heart, title: "Care & Comfort", desc: "We prioritize your comfort with premium hotels and Hyderabadi food so you can focus on ibadah." },
  { icon: Star, title: "Quality Service", desc: "Every detail from flights to Ziyarat is carefully planned for the best experience." },
  { icon: Users, title: "Experienced Guidance", desc: "Our experienced team ensures a smooth and spiritually enriching journey." },
];

const milestones = [
  "5000+ satisfied pilgrims served",
  "Partnerships with top Saudi hotels",
  "Direct flights from Hyderabad",
  "24/7 support during your journey",
  "Hotels within 150 meters of Haram",
  "Authentic Hyderabadi food daily",
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <motion.img
          src={heroNabawi}
          alt="Masjid Nabawi"
          className="h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(152,50%,8%,0.6)] to-[hsl(152,50%,8%,0.85)]" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">About Us</h1>
          </motion.div>
        </div>
      </section>

      {/* About content with image */}
      <section className="py-20 bg-cream islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img src={galleryHaramNight} alt="Masjid Al Haram" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-card hidden md:block">
                <img src={makkahSkyline} alt="Makkah" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2 font-semibold">Who We Are</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Trusted <span className="text-primary">Umrah & Hajj</span> Travel Partner
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Hajira Air Travel Services</strong> is a trusted travel company dedicated to providing complete Umrah and Hajj pilgrimage services for pilgrims traveling from India. Our mission is to make the sacred journey smooth, comfortable, and spiritually fulfilling.
                </p>
                <p>
                  We offer carefully designed Umrah packages that include flights, visa, hotel accommodation close to Haram, Indian food, transportation, and guided Ziyarat in Makkah and Madina.
                </p>
                <p>
                  With experienced guidance and quality services, we ensure every pilgrim can focus on their ibadah and spiritual journey while we manage all travel arrangements.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{m}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Values" subtitle="The principles that guide everything we do" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-xl p-6 text-center shadow-md border border-border hover:shadow-xl hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                  <v.icon className="h-8 w-8 text-primary group-hover:text-gold-dark transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we provide - image sections */}
      <section className="py-20 bg-cream islamic-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading title="What We Provide" subtitle="End-to-end services for a worry-free pilgrimage" />
          <div className="space-y-16 max-w-5xl mx-auto">
            {[
              {
                img: foodSpread,
                title: "Authentic Hyderabadi Cuisine",
                desc: "We understand the importance of home-style food during your journey. Our pilgrims enjoy freshly prepared Hyderabadi meals 3 times a day — including biryani, kebabs, curries, and roti. We ensure the food is hygienic, delicious, and comforting.",
                reverse: false,
              },
              {
                img: transport,
                title: "Comfortable AC Transport",
                desc: "Travel in comfort with our modern AC buses that cover all routes — Jeddah to Makkah, Makkah to Madina, and all Ziyarat locations. Our experienced drivers know every route, ensuring safe and timely travel throughout your journey.",
                reverse: true,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${item.reverse ? "md:[direction:rtl]" : ""}`}
              >
                <div className={`rounded-xl overflow-hidden shadow-xl group ${item.reverse ? "md:[direction:ltr]" : ""}`}>
                  <img src={item.img} alt={item.title} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className={item.reverse ? "md:[direction:ltr]" : ""}>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
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
              Start Your <span className="text-gold italic">Sacred Journey</span> Today
            </h2>
            <p className="text-gold-light/80 mb-8 max-w-xl mx-auto">
              Contact us to learn more about our packages and how we can make your Umrah or Hajj experience unforgettable.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold text-foreground hover:bg-gold-dark font-semibold px-8 shadow-lg shadow-gold/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Contact Us <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
