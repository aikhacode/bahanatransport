import { siteConfig } from "@/data/siteData";
import { MessageCircle } from "lucide-react";

interface CTAWhatsAppProps {
  text?: string;
  className?: string;
}

export function CTAWhatsApp({ text = "Hubungi Kami Via WhatsApp", className = "" }: CTAWhatsAppProps) {
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {text}
    </a>
  );
}
