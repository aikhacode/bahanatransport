import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  rating: number;
  text: string;
}

export function Testimonial({ name, rating, text }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-current" : "text-slate-200"}`}
          />
        ))}
      </div>
      <p className="text-slate-600 italic mb-6 flex-grow">"{text}"</p>
      <div className="mt-auto">
        <p className="font-semibold text-slate-900">{name}</p>
        <p className="text-sm text-slate-500">Pelanggan</p>
      </div>
    </div>
  );
}
