import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function ArticleCard({ title, excerpt, date, slug }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 p-6 flex flex-col h-full">
      <time className="text-xs text-slate-500 mb-2">{new Date(date).toLocaleDateString("id-ID", { year: 'numeric', month: 'long', day: 'numeric' })}</time>
      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
        <Link href={`/blog/${slug}`} className="hover:text-green-600 transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-slate-600 mb-4 line-clamp-3 text-sm flex-grow">
        {excerpt}
      </p>
      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700 mt-auto"
      >
        Baca Selengkapnya
        <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </article>
  );
}
