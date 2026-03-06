import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, MessageCircle, Clock, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroNabawi from "@/assets/hero-nabawi.jpg";
import galleryHaramNight from "@/assets/gallery-haram-night.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", package: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0APackage: ${form.package}%0ADate: ${form.date}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918977860730?text=${encodeURIComponent(`Assalamu Alaikum, I want to book Umrah.\n${text}`)}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Complete your booking on WhatsApp." });
  };

  return (
    <div>
      <section className="relative h-72 md:h-96 overflow-hidden">
        <motion.img src={heroNabawi} alt="Masjid Nabawi" className="h-full w-full object-cover" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(152,50%,8%,0.6)] to-[hsl(152,50%,8%,0.85)]" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-semibold">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream islamic-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading title="Book Your Journey" subtitle="Fill in the form below or contact us directly via WhatsApp" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+918977860730" className="block text-muted-foreground hover:text-primary transition-colors">+91 8977860730</a>
                    <a href="tel:+918977860733" className="block text-muted-foreground hover:text-primary transition-colors">+91 8977860733</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Banjara Hills Road No.1<br />
                      Opp. Kingstone Hospital<br />
                      Behind Sarvi Restaurant<br />
                      Hyderabad, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">Mon – Sat: 10:00 AM – 8:00 PM<br />Sunday: By Appointment</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/918977860730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary/5 rounded-lg p-3 text-primary font-semibold hover:bg-primary/10 transition-colors group"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                  <ChevronRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Small image */}
              <div className="rounded-xl overflow-hidden shadow-md group hidden md:block">
                <img src={galleryHaramNight} alt="Haram at night" className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-md border border-border space-y-5"
            >
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Your Name *</label>
                <Input
                  placeholder="Enter your full name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Phone Number *</label>
                <Input
                  placeholder="Enter your phone number"
                  required
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Package Interested In</label>
                <Input
                  placeholder="e.g., Premium Package, Hajj Package"
                  value={form.package}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, package: e.target.value })}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Preferred Travel Date</label>
                <Input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Message</label>
                <Textarea
                  placeholder="Any special requirements or questions..."
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-green-medium font-semibold py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                Book Your Umrah Now <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="text-xs text-center text-muted-foreground">You will be redirected to WhatsApp to complete your booking</p>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
