import { Hero } from "@/components/Hero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PricingCard } from "@/components/PricingCard";
import { MapEmbed } from "@/components/MapEmbed";

export const metadata = {
  title: "Drop Juanda Madiun | Antar Jemput Bandara Murah",
  description: "Layanan antar jemput (drop off) dari Madiun ke Bandara Juanda Surabaya. Layanan private car 24 jam, langsung berangkat tanpa tunggu penumpang lain.",
};

export default function DropJuandaMadiunPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Antar Jemput Bandara Juanda"
        subtitle="Layanan Carter Drop Off Madiun - Bandara Juanda (PP) dengan Private Car 24 Jam."
        image="/std_in-2610267_yl6y.jpg" // Using an existing public image
        imageAlt="Drop Juanda Madiun"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Drop Juanda Madiun</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Tidak perlu khawatir tertinggal pesawat! Layanan <strong>Drop Juanda Madiun</strong> kami siap mengantar Anda tepat waktu. Menggunakan mobil pribadi (private car), sehingga privasi terjaga dan perjalanan lebih santai tanpa perlu mampir menjemput penumpang lain.
          </p>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Tarif Carter Drop Bandara Juanda</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Avanza / Xenia"
              price="Rp 700.000"
              description="Kapasitas s/d 5 orang + Bagasi"
              features={[
                "Termasuk Sopir, BBM & Tol",
                "Langsung Berangkat",
                "Layanan 24 Jam",
                "Jemput Depan Rumah"
              ]}
            />
            <PricingCard
              title="Innova Reborn"
              price="Rp 900.000"
              description="Kapasitas s/d 6 orang (Lebih Nyaman)"
              features={[
                "Termasuk Sopir, BBM & Tol",
                "Kabin Lebih Luas",
                "Suspensi Nyaman",
                "Langsung Berangkat"
              ]}
              popular
            />
            <PricingCard
              title="Hiace Premio"
              price="Rp 1.500.000"
              description="Cocok untuk rombongan keluarga s/d 14 orang"
              features={[
                "Termasuk Sopir, BBM & Tol",
                "Bagasi Super Luas",
                "Audio Lengkap",
                "Nyaman untuk Rombongan"
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Drop Juanda */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">FAQ Antar Jemput Bandara</h2>
          <FAQAccordion
            faqs={[
              { question: "Apakah harga sudah all-in?", answer: "Ya, harga yang tertera sudah termasuk biaya sewa mobil, jasa driver, BBM, dan tiket Tol. Tidak ada biaya tambahan." },
              { question: "Bisa pesan dadakan?", answer: "Sangat disarankan booking minimal H-1. Namun, kami akan mengusahakan unit jika Anda memesan dadakan (tergantung ketersediaan)." },
              { question: "Berapa lama estimasi perjalanan Madiun - Juanda?", answer: "Estimasi perjalanan via Tol trans-Jawa dari Madiun ke Juanda memakan waktu sekitar 2.5 hingga 3 jam dalam kondisi lalu lintas normal." }
            ]}
          />
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Lokasi Pusat Operasional Kami</h2>
          <p className="text-slate-600 mb-8">Percayakan layanan antar jemput Bandara Juanda Anda kepada Bahana Transport. Kami berpusat di Kota Madiun dan siap siaga 24 jam.</p>
          <div className="h-80 w-full rounded-2xl overflow-hidden shadow-lg mx-auto">
            <MapEmbed />
          </div>
        </div>
      </section>
    </div>
  );
}
