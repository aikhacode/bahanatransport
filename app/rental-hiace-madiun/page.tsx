import { Hero } from "@/components/Hero";
import { FleetCard } from "@/components/FleetCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { MapEmbed } from "@/components/MapEmbed";
import { fleets } from "@/data/siteData";

export const metadata = {
  title: "Rental Hiace Madiun | Sewa Hiace Premio & Commuter Murah",
  description: "Sewa Toyota Hiace di Madiun untuk rombongan wisata, dinas, atau ziarah wali. Unit Hiace Premio dan Commuter terbaru yang nyaman dan luas.",
};

export default function RentalHiaceMadiunPage() {
  const hiaceFleets = fleets.filter(f => f.tags.includes("rental hiace madiun") || f.tags.includes("rental elf madiun"));

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Rental Hiace Madiun"
        subtitle="Solusi transportasi rombongan terbaik di Madiun. Kami sedia Toyota Hiace Premio, Commuter, dan Isuzu Elf Long untuk wisata dan dinas."
        image="/hiace-premio-11-1024x498-1.jpg"
        imageAlt="Sewa Hiace Madiun"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Layanan Sewa Hiace Madiun</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Perjalanan rombongan lebih menyenangkan dengan <strong>rental Hiace Madiun</strong>. Kendaraan berkapasitas besar ini sangat cocok untuk perjalanan wisata, rombongan keluarga, ziarah wali, hingga acara kantor. Armada Hiace kami dilengkapi dengan AC dingin, audio yang bagus, dan driver berpengalaman.
          </p>
        </div>
      </section>

      {/* Fleets */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Armada Hiace & Minibus Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiaceFleets.map(fleet => (
              <FleetCard key={fleet.id} {...fleet} />
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Kenapa Sewa Hiace di Tempat Kami?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-800 mb-3">Unit Terbaru & Terawat</h3>
              <p className="text-green-700 text-sm">Armada Hiace Premio dan Commuter kami merupakan unit tahun muda yang selalu rutin di service, memastikan kenyamanan dan keamanan selama perjalanan.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-800 mb-3">Driver Spesialis Luar Kota</h3>
              <p className="text-green-700 text-sm">Driver kami sangat memahami rute Jawa Timur, Jawa Tengah, hingga Bali. Tidak perlu khawatir kesasar atau perjalanan yang tidak nyaman.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Kantor & Garasi Kami</h2>
          <p className="text-slate-600 mb-8">Lokasi strategis di pusat kota Madiun, siap melayani penjemputan ke berbagai daerah di sekitarnya.</p>
          <div className="h-80 w-full rounded-2xl overflow-hidden shadow-lg mx-auto">
            <MapEmbed />
          </div>
        </div>
      </section>
    </div>
  );
}
