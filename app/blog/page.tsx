import type { Metadata } from "next";
import Link from "next/link";
import { articles, formatDate, teamMembers } from "@/lib/content";
import ContentImage from "@/components/content-image";

export const metadata: Metadata = { title: "Journal" };

export default function BlogPage() {
  return <div className="site-shell py-16 sm:py-24"><p className="eyebrow mb-8">Notes from the studio <span className="text-muted">/ 03</span></p><h1 className="section-title">The <span className="text-muted">journal.</span></h1><p className="mt-7 max-w-lg text-sm leading-7 text-muted">Ideas, process notes and dispatches from the messy middle of making.</p>
    <div className="mt-16 grid gap-5 md:grid-cols-3">{articles.map((article, index) => {
      const author = teamMembers.find((member) => member.id === article.authorId);
      return <article key={article.slug} className="group border-t rule pt-5"><Link href={`/blog/${article.slug}`} className="block"><ContentImage image={article.image} sizes="(max-width: 768px) 100vw, 33vw" className="mb-6 aspect-[4/3]"><span className="absolute bottom-4 left-4 font-mono text-[.62rem] uppercase tracking-widest text-white/90">FIELD NOTES / 0{index + 1}</span></ContentImage><div className="flex justify-between font-mono text-[.62rem] uppercase tracking-widest text-muted"><span>{article.category}</span><time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time></div><h2 className="mt-4 font-display text-2xl tracking-tight transition-colors group-hover:text-[var(--accent-soft)]">{article.title}</h2><p className="mt-3 text-sm leading-6 text-muted">{article.excerpt}</p><div className="mt-5 flex justify-between border-t rule pt-4 font-mono text-[.6rem] uppercase tracking-wider text-muted"><span>{author?.name ?? "Grey Barnacle"}</span><span>{article.readingMinutes} min read</span></div></Link><p className="image-credit mt-3"><a href={article.image.sourceUrl} target="_blank" rel="noreferrer">Photo: {article.image.photographer} / Unsplash ↗</a></p></article>;
    })}</div>
  </div>;
}
