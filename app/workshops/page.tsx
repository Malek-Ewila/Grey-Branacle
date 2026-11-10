import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, formatPrice, workshops } from "@/lib/content";
import ContentImage from "@/components/content-image";

export const metadata: Metadata = { title: "Workshops" };

export default function WorkshopsPage() {
  return <div className="site-shell py-16 sm:py-24"><p className="eyebrow mb-8">Learn by making <span className="text-muted">/ 02</span></p><h1 className="section-title max-w-4xl">Workshops for <span className="text-muted">the next image.</span></h1><p className="mt-7 max-w-lg text-sm leading-7 text-muted">Small, focused studios for drawing, digital illustration and experimental image-making. Join us in Cairo or online and leave with a process you can carry into your own work.</p>
    <div className="mt-16 border-t rule">{workshops.map((item, index) => <article key={item.slug} className="grid gap-4 border-b rule py-6 transition-colors hover:border-[var(--accent)] sm:grid-cols-[minmax(190px,.55fr)_1fr] sm:gap-6">
      <div><Link href={`/workshops/${item.slug}`} aria-label={`View ${item.title} workshop`}><ContentImage image={item.image} sizes="(max-width: 640px) 100vw, 35vw" className="aspect-[4/3]" /></Link><p className="image-credit"><a href={item.image.sourceUrl} target="_blank" rel="noreferrer">Photo: {item.image.photographer} / Unsplash ↗</a></p></div>
      <Link href={`/workshops/${item.slug}`} className="group grid gap-4 md:grid-cols-[.8fr_1fr_auto] md:items-center"><div><span className="eyebrow">0{index + 1} / {item.category}</span><h2 className="mt-3 font-display text-3xl tracking-tight transition-colors group-hover:text-[var(--accent-soft)]">{item.title}</h2><p className="mt-2 font-mono text-[.62rem] uppercase tracking-wider text-muted">{item.format} · {item.duration}</p></div><div><p className="text-sm leading-6 text-muted">{item.description}</p><p className="mt-3 font-mono text-[.62rem] uppercase tracking-wider text-muted">{item.location} · From {formatDate(item.cohortDates[0])}</p></div><div className="flex items-center justify-between gap-4 md:flex-col md:items-end"><span className="font-mono text-xs text-[var(--accent-soft)]">{formatPrice(item.priceEGP)}</span><span className="text-2xl text-[var(--accent-soft)]" aria-hidden="true">↗</span></div></Link>
    </article>)}</div>
  </div>;
}
