import Image from "next/image";
import { CTAWhatsApp } from "./CTAWhatsApp";
import { siteConfig } from "../data/siteData";
import { Phone } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export function Hero({ title, subtitle, image, imageAlt }: HeroProps) {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/60" /> {/* Overlay */}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-sm">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAWhatsApp text="Pesan Sekarang" className="text-lg px-10 py-4 w-72" />
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all transform hover:scale-105 text-lg w-72"
          >
            <Phone className="w-5 h-5 mr-2" />
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
