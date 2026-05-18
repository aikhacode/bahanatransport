import { siteConfig } from "@/data/siteData";
import { MessageCircle } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Pesan Sekarang via WA
      </a>
    </div>
  );
}
