import { Check, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  price: string;
  features: string[];
  airline?: string;
  duration?: string;
  highlight?: boolean;
}

const PackageCard = ({ title, price, features, airline, duration, highlight }: PackageCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group ${
        highlight ? "ring-2 ring-gold" : ""
      }`}
    >
      <div className={`p-6 relative overflow-hidden ${highlight ? "gradient-gold" : "gradient-green"}`}>
        {highlight && (
          <div className="absolute top-3 right-3 bg-foreground/10 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-foreground">
            ⭐ Popular
          </div>
        )}
        <h3 className={`font-display text-xl font-bold ${highlight ? "text-foreground" : "text-gold"}`}>{title}</h3>
        {airline && (
          <div className={`flex items-center gap-1 mt-1 text-sm ${highlight ? "text-foreground/70" : "text-gold-light"}`}>
            <Plane className="h-3 w-3" />
            <span>{airline}</span>
          </div>
        )}
        {duration && (
          <p className={`text-sm mt-1 ${highlight ? "text-foreground/70" : "text-gold-light"}`}>{duration}</p>
        )}
        <p className={`mt-3 font-display text-3xl font-bold ${highlight ? "text-foreground" : "text-primary-foreground"}`}>
          {price}
        </p>
      </div>

      <div className="bg-card p-6">
        <ul className="space-y-2.5 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-foreground group-hover:text-foreground/90">
              <Check className="h-4 w-4 mt-0.5 shrink-0 text-green-light" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-green-medium shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5">
            Book Now
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PackageCard;
