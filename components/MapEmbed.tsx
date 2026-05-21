import { siteConfig } from "@/data/siteData";

export function MapEmbed() {
  // Using a standard, keyless Google Maps embed URL based on query
  // The query includes the business name and address for high accuracy
  const mapQuery = encodeURIComponent("Bahana Sewa Mobil Madiun, Jl. Margobawero VA, Madiun");
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7909.049761761818!2d111.5118030935791!3d-7.626560599999982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79be92b301476b%3A0x867fe0c3b221e38d!2sBahana%20Sewa%20Mobil%20Madiun!5e0!3m2!1sen!2sus!4v1779330634552!5m2!1sen!2sus'

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
