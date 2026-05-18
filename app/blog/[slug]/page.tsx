import { notFound } from "next/navigation";
import { blogPosts } from "@/data/siteData";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: `${post.title} | Blog Bahana Transport`,
    description: post.excerpt,
    keywords: [post.keyword, "rental mobil madiun", "travel madiun surabaya"],
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white pt-10">
      <article className="container mx-auto px-4 max-w-3xl py-12">
        <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Blog
        </Link>
        
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center text-sm text-slate-500 gap-4">
            <time>{new Date(post.date).toLocaleDateString("id-ID", { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>•</span>
            <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">{post.keyword}</span>
          </div>
        </header>

        <div className="prose prose-lg prose-slate max-w-none mb-12">
          {/* Simple rendering for now, you can extend this with MDX later */}
          <p className="text-xl text-slate-600 mb-8 font-medium leading-relaxed">{post.excerpt}</p>
          <div className="text-slate-800 leading-loose">
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-100 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Butuh Transportasi di Madiun?</h3>
          <p className="text-slate-600 mb-6">Kami siap melayani kebutuhan rental mobil dan travel Anda dengan harga terbaik.</p>
          <CTAWhatsApp text="Hubungi Kami Sekarang" />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-slate-200 pt-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Artikel Terkait</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map(related => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-green-200 transition-colors">
                    <h4 className="font-bold text-lg text-slate-900 group-hover:text-green-600 mb-2">{related.title}</h4>
                    <p className="text-sm text-slate-600 line-clamp-2">{related.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
