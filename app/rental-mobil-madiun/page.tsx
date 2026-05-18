import { Hero } from "@/components/Hero";
import { FleetCard } from "@/components/FleetCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PricingCard } from "@/components/PricingCard";
import { MapEmbed } from "@/components/MapEmbed";
import { fleets, faqs } from "@/data/siteData";

export const metadata = {
  title: "Rental Mobil Madiun dengan Sopir | Bahana Transport",
  description: "Layanan rental mobil Madiun terdekat. Sewa Avanza, Innova, Hiace harian/mingguan dengan sopir profesional dan berpengalaman. Booking sekarang!",
};

export default function RentalMobilMadiunPage() {
  const rentalFleets = fleets.filter(f => f.tags.includes("rental mobil madiun"));

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Rental Mobil Madiun"
        subtitle="Pilihan lengkap armada sewa mobil di Madiun untuk segala kebutuhan Anda dengan layanan sopir (all-in)."
        image="/innova-reborn-madiun1.jpg"
        imageAlt="Sewa Mobil Madiun"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Layanan Rental Mobil Madiun Terbaik</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Bahana Transport menyediakan jasa <strong>rental mobil Madiun</strong> dengan berbagai pilihan armada terbaru dan terawat. Kami melayani sewa harian, mingguan, hingga carter perusahaan dengan sopir profesional. Nikmati perjalanan wisata, dinas, atau acara keluarga Anda dengan nyaman dan aman bersama kami.
          </p>
        </div>
      </section>

      {/* Fleets */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Pilihan Armada Rental</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalFleets.map(fleet => (
              <FleetCard key={fleet.id} {...fleet} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Paket Sewa Mobil Madiun</h2>
          <div className="max-w-md mx-auto">
            <PricingCard
              title="All In (Dengan Sopir)"
              price="Mulai Rp 450rb"
              description="Duduk manis, biar driver kami yang mengantar sampai ke tujuan."
              popular
              features={[
                "Termasuk Sopir Profesional",
                "Sewa 12 Jam / 24 Jam",
                "Unit Bersih & Wangi",
                "Aman dan Nyaman",
                "Driver Hafal Rute Madiun & Sekitarnya"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Lokasi Garasi Kami di Madiun</h2>
          <p className="text-slate-600 mb-8">Kunjungi kantor dan garasi kami secara langsung untuk melihat pilihan armada yang tersedia.</p>
          <div className="h-80 w-full rounded-2xl overflow-hidden shadow-lg mx-auto">
            <MapEmbed />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">FAQ Rental Mobil Madiun</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}
