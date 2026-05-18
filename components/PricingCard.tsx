import { Check } from "lucide-react";
import { CTAWhatsApp } from "./CTAWhatsApp";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ title, price, description, features, popular }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border flex flex-col h-full relative ${popular ? 'border-green-500 ring-1 ring-green-500' : 'border-slate-200'}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          Paling Laris
        </div>
      )}
      <div className="p-6 md:p-8 flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-3xl font-extrabold text-slate-900">{price}</span>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
              <span className="text-slate-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 md:p-8 pt-0 mt-auto">
        <CTAWhatsApp text="Pilih Paket" className="w-full" />
      </div>
    </div>
  );
}
