import { ArticleCard } from "@/components/ArticleCard";
import { blogPosts } from "@/data/siteData";

export const metadata = {
  title: "Blog & Artikel | Bahana Transport Madiun",
  description: "Kumpulan artikel, tips wisata, dan informasi rental mobil di Madiun. Temukan destinasi wisata terbaik di Madiun bersama Bahana Transport.",
};

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-10">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">Blog & Informasi Terkini</h1>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Temukan tips perjalanan, rekomendasi wisata, dan berita terbaru seputar layanan transportasi di Madiun.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <ArticleCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
