import Image from "next/image";
import { Check } from "lucide-react";
import { CTAWhatsApp } from "./CTAWhatsApp";

interface FleetCardProps {
  name: string;
  image: string;
  price: number;
  features: string[];
}

export function FleetCard({ name, image, price, features }: FleetCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-slate-100 flex flex-col h-full">
      <div className="relative h-48 w-full bg-slate-100">
        <Image
          src={image}
          alt={`Rental Mobil ${name} Madiun`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-2xl font-bold text-green-600 mb-4">
          Rp {price.toLocaleString("id-ID")} <span className="text-sm font-normal text-slate-500">/ hari</span>
        </p>
        
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-600">
              <Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <CTAWhatsApp text="Booking Unit" className="w-full text-sm py-2 px-4" />
        </div>
      </div>
    </div>
  );
}
