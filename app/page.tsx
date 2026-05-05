"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Car,
  BadgeCheck,
  Check,
  ArrowRight,
  Phone,
  ChevronRight,
  Users,
  Headset,
  Sparkles,
  Wallet,
  Clock,
  CheckCircle2,
  MapPin,
  ChevronDown,
  Mail,
  Facebook,
  Share2
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Car className="text-blue-600 w-8 h-8" />
              <span className="text-xl font-extrabold tracking-tight">
                BahanaMadiun<span className="text-blue-600">Trans</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-semibold">
              <a href="#armada" className="hover:text-blue-600 transition">Armada</a>
              <a href="#mengapa" className="hover:text-blue-600 transition">Keunggulan</a>
              <a href="#area" className="hover:text-blue-600 transition">Area Layanan</a>
              <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
            </div>
            <a
              href="https://wa.me/6281215084257"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                Solusi Transportasi Terbaik
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
                Layanan <span className="text-blue-600">Sewa Mobil Madiun</span> Profesional & Terpercaya
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Nikmati perjalanan nyaman dengan berbagai pilihan armada terbaru. Kami menyediakan <span className="font-semibold">Rental Mobil Madiun</span> dengan driver untuk kebutuhan wisata, dinas, atau acara keluarga.
              </p>
              <div className="mb-10 flex flex-col sm:flex-row items-center gap-6 p-6 bg-blue-50/50 rounded-3xl border border-blue-100/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200 rotate-3 hover:rotate-0 transition-transform">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">Hubungi Sekarang</p>
                    <p className="text-2xl font-black text-slate-900 tracking-tight">0812-1508-4257</p>
                  </div>
                </div>
                <div className="flex gap-3 w-full sm:w-auto ml-auto">
                  <a href="tel:081215084257" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition shadow-sm active:scale-95">
                    <Phone className="w-5 h-5" /> Telepon
                  </a>
                  <a href="https://wa.me/6281215084257" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-2xl font-bold hover:bg-[#20ba5a] transition shadow-lg shadow-green-200 active:scale-95">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg> WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#armada" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition">
                  Lihat Katalog
                </a>
                <div className="flex items-center gap-3 px-4">
                  <div className="flex -space-x-2">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT4ZnARVnhbvvby-Z5UyaE62ZTzLgU3xxHVeAD6GeZRwzqfgDndSHMYduACKAetkzRjfrqa71Q5SVCC4_LRhPjcFQrBADHRt0fAm5BFqgVaGfbxaJxYEyJ_iVQF3OeSvgjaKaLBk2JTQ-qQV13WS4SlFtef3RbzHe0xhCjVfO5ou9Gt38v2cyyd3IBC_U1QD8y7tWARFDf7JEFSB7YixxgbqmgUb5U2zbQVvBaRWsF-icUkf2yxXZZVJYwIc2RCfwjXqNj0-AzOQ"
                      alt="Pelanggan BahanaMadiunTrans - Rental Mobil Terpercaya"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLd6GJEolQDu0GsxykjDGxWDuHbcUw4_tGs1h9xvJMjytkd5oRG0dW6lR1p3B6yIaJc-Tv6RNgnH5RIz1_YOa62MvEjTG8TzugbtgrA9zU3Su15h0wjdsM9q27qlu2EN15S0FOkDxf34FLrMSECFDtAhukvauFQcav1OeRUnWDzgIBWGQ4eXBS2b7eM7Lh59KBAQV_2yVuWGqzAkuEVtWUGW8uWmeR_CEzSkMR1f__nZ0n_jqMnJM6AUfq1xVMKgF4uVOgrq4Blw"
                      alt="Testimoni Sewa Mobil Madiun"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-500">Dipesan 500+ Pelanggan</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <Image
                src="/innova-reborn-madiun2.jpg"
                alt="Sewa Hiace Madiun - Toyota Hiace Premio Terbaru"
                width={800}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terbaik Section */}
      <section id="terbaik" className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] shadow-xl shadow-blue-900/5 overflow-hidden border border-gray-100"
          >
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-16 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6">
                  <BadgeCheck className="w-4 h-4" />
                  CV Berkah Cempaka
                </div>
                <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                  <span className="text-blue-600">Sewa Mobil Madiun</span> Terbaik & Exclusive
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  CV Berkah Cempaka hadir sebagai pilihan <span className="font-bold text-slate-800 underline decoration-blue-500 decoration-2">Terpercaya</span> untuk kebutuhan transportasi premium Anda. Kami menghadirkan <span className="font-semibold text-slate-800">Armada Terbaru</span> yang selalu prima, termasuk unit unggulan kami: <span className="text-blue-600 font-bold italic">Toyota Innova Zenix</span>.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Unit Innova Zenix Hybrid & Gasoline Terbaru",
                    "Sistem Reservasi Mudah & Fast Response",
                    "Layanan Premium untuk VIP & Business Trip"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/6281215084257" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-200">
                  Pesan Zenix Sekarang
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="relative h-80 lg:h-full min-h-[400px] order-1 lg:order-2 bg-slate-100">
                <Image
                  src="/hiace-premio-11-1024x498-1.jpg"
                  alt="Toyota Innova Zenix - Armada Unggulan Rental Mobil BahanaMadiunTrans"
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Armada Section */}
      <section id="armada" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Daftar Harga Sewa Mobil Madiun Terbaru</h2>
            <p className="text-slate-600">Tarif transparan untuk berbagai kebutuhan perjalanan Anda. Tersedia pilihan Lepas Kunci maupun dengan Driver Profesional.</p>
          </motion.div>
          <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-xl shadow-blue-900/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="p-6 font-bold">Jenis Armada</th>
                  <th className="p-6 font-bold">Dalam Kota Madiun</th>
                  <th className="p-6 font-bold">Luar Kota Madiun</th>
                  <th className="p-6 font-bold text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "Toyota Avanza / Xenia", desc: "7 Penumpang • AC Double Blower" },
                  { name: "Toyota Innova Reborn", desc: "7 Penumpang • Captain Seat (Opt)" },
                  { name: "Toyota Hiace Premio/Commuter", desc: "14-16 Penumpang • Ekstra Luas" },
                  { name: "Toyota Fortuner GR Sport", desc: "7 Penumpang • SUV Premium" },
                  { name: "Toyota Alphard / Vellfire", desc: "VIP Luxury • 7 Penumpang" }
                ].map((car, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-6">
                      <div className="font-bold text-slate-900">{car.name}</div>
                      <div className="text-xs text-slate-500">{car.desc}</div>
                    </td>
                    <td className="p-6 font-bold text-blue-600">Call</td>
                    <td className="p-6 font-bold text-blue-600">Call</td>
                    <td className="p-6 text-center">
                      <a href="https://wa.me/6281215084257" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
                        <Phone className="w-4 h-4" /> Hubungi Kami
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-blue-100">
            <p className="text-sm text-slate-700">
              <span className="font-bold">Catatan:</span> Harga sewa dapat berubah sewaktu-waktu tergantung musim liburan dan durasi sewa. Silakan hubungi kami untuk mendapatkan penawaran harga terbaik.
            </p>
            <a href="https://wa.me/6281215084257" className="font-bold text-blue-600 hover:underline flex items-center gap-1 whitespace-nowrap">
              Konsultasi Gratis <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Mengapa Memilih Kami Section */}
      <section id="mengapa" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Mengapa Memilih Layanan Sewa Mobil Madiun Kami?</h2>
            <p className="text-slate-600">Kami berkomitmen memberikan pengalaman perjalanan yang aman dan menyenangkan dengan standar pelayanan tinggi untuk setiap pelanggan.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">Pengemudi Profesional</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Driver kami ramah, berpengalaman, dan menguasai rute jalan di wilayah Jawa Timur.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">Dukungan 24/7</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Layanan customer service siap membantu proses reservasi dan bantuan darurat kapanpun.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">Armada Bersih & Terawat</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Setiap kendaraan melalui pengecekan rutin dan dibersihkan sebelum diserahkan ke pelanggan.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">Harga Kompetitif</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Tarif sewa transparan tanpa biaya tersembunyi, sangat terjangkau untuk semua kalangan.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">On-Time</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Ketepatan waktu adalah prioritas kami, baik saat penjemputan maupun pengantaran unit.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Area Layanan Section */}
      <section id="area" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-extrabold mb-6">Cakupan Luas Area Layanan Kami</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Sebagai penyedia jasa <span className="font-semibold text-blue-600">Sewa Mobil Madiun</span> terkemuka, kami melayani berbagai wilayah untuk memastikan mobilitas Anda tidak terhambat. Baik untuk kebutuhan harian di dalam kota maupun perjalanan jarak jauh dengan <span className="font-semibold text-blue-600">Sewa Elf Madiun</span> untuk rombongan besar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Kecamatan Kartoharjo",
                  "Kecamatan Manguharjo",
                  "Kecamatan Taman",
                  "Kecamatan Jiwan",
                  "Wilayah Balerejo",
                  "Wilayah Caruban",
                  "Dolopo & Dagangan",
                  "Wungu & Mejayan"
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-slate-500 italic">
                *Kami juga melayani penjemputan di Stasiun Madiun, Terminal Purboyo, dan hotel-hotel di area Madiun tanpa biaya tambahan (S&K berlaku).
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-blue-600 rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Butuh Layanan Antar Jemput?</h3>
              <p className="opacity-90 mb-8 leading-relaxed">
                Kami menyediakan layanan antar jemput unit untuk wilayah <span className="font-bold underline">Rental Mobil Lepas Kunci</span> langsung ke depan pintu rumah atau kantor Anda. Cukup kirimkan lokasi via WhatsApp, tim kami akan segera tiba.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-8 h-8" />
                  <span className="font-semibold text-lg">Lokasi Strategis</span>
                </div>
                <p className="text-sm opacity-80">Kantor pusat kami berada di pusat kota Madiun, memudahkan akses bagi Anda yang ingin datang langsung ke pool kami.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h2>
            <p className="text-slate-600">Punya pertanyaan seputar layanan kami? Temukan jawabannya di sini.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Bagaimana cara booking sewa mobil?", a: "Proses booking sangat mudah. Anda bisa menghubungi kami melalui WhatsApp atau formulir website. Sertakan tanggal pemakaian, jenis armada yang diinginkan, dan durasi sewa. Setelah konfirmasi ketersediaan, Anda cukup melakukan pembayaran DP untuk mengamankan unit." },
              { q: "Apakah sudah termasuk driver?", a: "Kami menyediakan dua opsi layanan: All-in (Mobil + Driver + BBM) untuk Anda yang ingin duduk santai, atau Rental Mobil Lepas Kunci bagi Anda yang menginginkan privasi dan fleksibilitas berkendara sendiri dengan syarat dan ketentuan yang berlaku." },
              { q: "Apa saja metode pembayarannya?", a: "Kami menerima pembayaran melalui Transfer Bank (BCA, Mandiri, BRI), E-Wallet (Dana, OVO, ShopeePay), maupun tunai saat penyerahan kunci di lokasi penjemputan." },
              { q: "Apakah bisa sewa harian atau jangka panjang?", a: "Tentu bisa. Kami melayani sewa harian (minimal 12 jam), mingguan, hingga bulanan untuk perusahaan atau kontrak dinas. Semakin lama durasi sewa, semakin kompetitif harga yang kami berikan." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none appearance-none hover:bg-slate-50 transition-colors">
                  <h3 className="text-lg font-bold pr-4">{faq.q}</h3>
                  <ChevronDown className="w-6 h-6 text-blue-600 transition-transform duration-300 group-open:rotate-180 shrink-0" />
                </summary>
                <div className="p-6 pt-0 text-slate-600 border-t border-gray-50 bg-white">
                  <p className="leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Car className="text-blue-400 w-8 h-8" />
                <span className="text-2xl font-extrabold">BahanaMadiun<span className="text-blue-400">Trans</span></span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed">
                Penyedia jasa <span className="text-white">Sewa Mobil Madiun</span> terbaik dengan armada lengkap seperti Avanza, Innova Reborn, Fortuner, hingga <span className="text-white">Sewa Elf Madiun</span>. Melayani sepenuh hati untuk perjalanan Anda.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Navigasi</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#armada" className="hover:text-blue-400 transition">Katalog Armada</a></li>
                <li><a href="#mengapa" className="hover:text-blue-400 transition">Keunggulan Kami</a></li>
                <li><a href="#area" className="hover:text-blue-400 transition">Cakupan Wilayah</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Kontak</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <Mail className="text-blue-400 w-5 h-5 shrink-0" />
                  <span>info@bahanatransport.id</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-blue-400 w-5 h-5 shrink-0" />
                  <a href="tel:+6281215084257" className="hover:text-blue-400 transition">0812 1508 4257</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">© 2024 BahanaTransport. All rights reserved. | Spesialis Sewa Mobil Madiun & Rental Mobil Lepas Kunci.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
