import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918977860730?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20Umrah%20packages"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] shadow-lg hover:bg-[hsl(142,70%,40%)] transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-card" />
    </a>
  );
};

export default WhatsAppButton;
