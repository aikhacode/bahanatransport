import { siteConfig } from "@/data/siteData";

export function MapEmbed() {
  // Using a standard, keyless Google Maps embed URL based on query
  // The query includes the business name and address for high accuracy
  const mapQuery = encodeURIComponent("Bahana Sewa Mobil Madiun, Jl. Margobawero VA, Madiun");
  const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "300px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Peta Lokasi ${siteConfig.name}`}
      ></iframe>
    </div>
  );
}
