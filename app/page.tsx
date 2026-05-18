import { Hero } from "@/components/Hero";
import { FleetCard } from "@/components/FleetCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Testimonial } from "@/components/Testimonial";
import { ArticleCard } from "@/components/ArticleCard";
import { fleets, faqs, reviews, blogPosts, services, siteConfig } from "@/data/siteData";
import { MapEmbed } from "@/components/MapEmbed";
import Link from "next/link";
import { MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Rental Mobil Madiun & Travel Surabaya | Bahana Transport",
  description: "Layanan rental mobil Madiun terpercaya, sewa hiace Madiun, travel Madiun Surabaya, dan drop Juanda. Harga murah, armada lengkap, dengan sopir profesional.",
};

export default function HomePage() {
  // Only show top 3 for preview
  const featuredFleets = fleets.slice(0, 3);
  const recentBlogs = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <Hero
        title="Rental Mobil Madiun & Travel Terpercaya"
        subtitle="Solusi transportasi Anda di Madiun. Kami melayani sewa mobil harian, carter drop off dengan driver, hingga travel reguler Madiun - Surabaya PP."
        image="/banner-berkah.jpg" // Using an existing image from public/
        imageAlt="Rental Mobil Madiun Bahana Transport"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Layanan Utama Kami</h2>
            <p className="text-slate-600 text-lg">Pilih layanan transportasi yang sesuai dengan kebutuhan perjalanan Anda.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="block group">
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 h-full hover:bg-green-50 hover:border-green-200 transition-colors">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fleet Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Pilihan Armada Terbaik</h2>
              <p className="text-slate-600 text-lg">Kendaraan bersih, terawat, dan siap menemani perjalanan Anda di dalam maupun luar kota Madiun.</p>
            </div>
            <Link href="/rental-mobil-madiun" className="text-green-600 font-semibold hover:text-green-700 whitespace-nowrap">
              Lihat Semua Armada &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFleets.map((fleet) => (
              <FleetCard key={fleet.id} {...fleet} />
            ))}
          </div>
        </div>
      </section>

      {/* Area Coverage & Keunggulan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Area Layanan & Coverage</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Selain berpusat di <strong className="text-slate-900">Madiun</strong>, kami juga melayani penjemputan dan pengantaran ke berbagai kota di sekitarnya. Cocok untuk Anda yang membutuhkan travel antar kota maupun drop bandara.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {siteConfig.coverage.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-green-500 rounded-full blur-3xl opacity-20"></div>
              <h3 className="text-2xl font-bold mb-6">Mengapa Memilih Kami?</h3>
              <ul className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0 h-fit">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Lokasi Strategis di Madiun</h4>
                    <p className="text-slate-400 text-sm mb-2">Mudah dijangkau dan siap menjemput Anda tepat waktu.</p>
                    <a href={siteConfig.contact.gmaps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-semibold text-green-400 hover:text-green-300">
                      Buka di Aplikasi Maps &rarr;
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0 h-fit">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Armada Terawat & Bersih</h4>
                    <p className="text-slate-400 text-sm">Kenyamanan Anda adalah prioritas kami. AC dingin dan mesin prima.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-lg shrink-0 h-fit">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Harga Transparan</h4>
                    <p className="text-slate-400 text-sm">Tidak ada biaya tersembunyi. Harga rental mobil dan travel Madiun Surabaya bersahabat.</p>
                  </div>
                </li>
              </ul>
              
              <div className="w-full h-48 sm:h-64 mt-6">
                <MapEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Kata Pelanggan Kami</h2>
            <p className="text-slate-600 text-lg">Ribuan perjalanan telah kami layani dengan sepenuh hati.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Testimonial key={idx} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Pertanyaan Seputar Layanan</h2>
            <p className="text-slate-600 text-lg">Informasi yang sering ditanyakan seputar rental mobil Madiun dan travel.</p>
          </div>
          
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Blog/Articles Preview */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Artikel & Tips Terkini</h2>
              <p className="text-slate-600 text-lg">Dapatkan informasi menarik seputar wisata dan perjalanan di Madiun.</p>
            </div>
            <Link href="/blog" className="text-green-600 font-semibold hover:text-green-700 whitespace-nowrap">
              Baca Semua Artikel &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentBlogs.map((post) => (
              <ArticleCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
