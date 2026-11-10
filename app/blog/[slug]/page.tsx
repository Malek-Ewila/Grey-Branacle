import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, formatDate, teamMembers } from "@/lib/content";
import ContentImage from "@/components/content-image";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return { title: article?.title ?? "Journal", description: article?.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const author = teamMembers.find((member) => member.id === article.authorId);
  if (!author) notFound();
  return <article className="site-shell max-w-5xl py-16 sm:py-24">
    <Link href="/blog" className="font-mono text-[.68rem] uppercase tracking-wider text-muted transition-colors hover:text-[var(--accent-soft)]">← Back to journal</Link>
    <header className="mt-12"><p className="eyebrow mb-6">{article.category} <span className="text-muted">/ {formatDate(article.publishedAt)}</span></p><h1 className="section-title max-w-4xl">{article.title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-muted">{article.excerpt}</p><div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t rule pt-4 font-mono text-[.62rem] uppercase tracking-wider text-muted"><span>Words by {author.name}</span><time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time><span>{article.readingMinutes} min read</span></div><ul aria-label="Article topics" className="mt-4 flex flex-wrap gap-2">{article.tags.map((tag) => <li key={tag} className="border rule px-2 py-1 font-mono text-[.58rem] uppercase tracking-wider text-muted">{tag}</li>)}</ul></header>
    <figure className="mt-12"><ContentImage image={article.image} sizes="(max-width: 1024px) 100vw, 70vw" className="aspect-[16/10] sm:aspect-[16/9]"><span className="absolute bottom-5 left-5 font-mono text-[.62rem] uppercase tracking-wider text-white/90">GREY BARNACLE / JOURNAL</span></ContentImage><figcaption className="image-credit">Photo by <a href={article.image.sourceUrl} target="_blank" rel="noreferrer">{article.image.photographer} / Unsplash ↗</a></figcaption></figure>
    <div className="mx-auto mt-12 max-w-2xl space-y-12">{article.sections.map((section, index) => <section key={section.heading}><p className="eyebrow mb-3">Section / 0{index + 1}</p><h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">{section.heading}</h2><div className="mt-5 space-y-5 text-base leading-8 text-muted">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div>
    <footer className="mx-auto mt-14 max-w-2xl border-t rule pt-6"><p className="eyebrow">About the author</p><h2 className="mt-3 font-display text-xl">{author.name} <span className="font-sans text-sm font-normal text-muted">/ {author.role}</span></h2><p className="mt-3 text-sm leading-7 text-muted">{author.bio}</p><Link href="/info" className="mt-5 inline-block font-mono text-[.62rem] uppercase tracking-wider transition-colors hover:text-[var(--accent-soft)]">Meet the team ↗</Link></footer>
  </article>;
}
