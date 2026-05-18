import { Hero } from "@/components/Hero";
import { PricingCard } from "@/components/PricingCard";
import { MapEmbed } from "@/components/MapEmbed";
import { Clock, MapPin, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Travel Madiun Surabaya (PP) | Door to Door - Berangkat Tiap Hari",
  description: "Layanan travel Madiun Surabaya PP sistem door to door. Harga tiket murah, jadwal keberangkatan fleksibel pagi, siang, dan malam. Pesan sekarang!",
};

export default function TravelMadiunSurabayaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Travel Madiun Surabaya PP"
        subtitle="Layanan travel reguler door to door setiap hari. Nyaman, aman, dan pasti berangkat."
        image="/banner-berkah.jpg"
        imageAlt="Travel Madiun Surabaya"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Solusi Perjalanan Madiun - Surabaya</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Tidak perlu repot datang ke terminal atau stasiun. Dengan layanan <strong>travel Madiun Surabaya</strong> sistem door to door kami, Anda cukup menunggu di rumah dan kami akan mengantar sampai ke alamat tujuan di Surabaya atau Sidoarjo.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Door to Door</h3>
              <p className="text-slate-600">Jemput di rumah, antar sampai tujuan. Praktis dan efisien.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Berangkat Tiap Hari</h3>
              <p className="text-slate-600">Jadwal keberangkatan pasti setiap hari. Pagi, siang, dan malam.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aman & Nyaman</h3>
              <p className="text-slate-600">Armada terbaik dengan fasilitas AC, reclining seat, dan driver handal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Schedule */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Tarif & Jadwal Keberangkatan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Travel Reguler (Door to Door)"
              price="Rp 150.000 / tiket"
              description="Tiket travel satu orang untuk rute Madiun - Surabaya atau sebaliknya."
              features={[
                "Gratis Jemput Area Kota Madiun",
                "Fasilitas Full AC",
                "Snack & Air Mineral",
                "Keberangkatan via Tol"
              ]}
              popular
            />
            <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Jadwal Berangkat:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Keberangkatan Pagi</span>
                  <span className="font-bold">09:00 WIB</span>
                </li>
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Keberangkatan Siang</span>
                  <span className="font-bold">13:00 WIB</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Keberangkatan Malam</span>
                  <span className="font-bold">20:00 WIB</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm">*Jadwal bisa menyesuaikan kondisi di lapangan. Hubungi CS untuk kepastian jam jemput.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Lokasi Keberangkatan (Pool Madiun)</h2>
          <p className="text-slate-600 mb-8">Selain fasilitas penjemputan door-to-door, Anda juga bisa datang langsung ke pool keberangkatan kami di Madiun.</p>
          <div className="h-80 w-full rounded-2xl overflow-hidden shadow-lg mx-auto">
            <MapEmbed />
          </div>
        </div>
      </section>
    </div>
  );
}
