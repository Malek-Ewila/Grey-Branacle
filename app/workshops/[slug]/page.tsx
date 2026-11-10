import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, formatPrice, studio, teamMembers, workshops } from "@/lib/content";
import ContentImage from "@/components/content-image";

export function generateStaticParams() { return workshops.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const workshop = workshops.find((item) => item.slug === slug);
  return { title: workshop?.title ?? "Workshop" };
}

export default async function WorkshopDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const workshop = workshops.find((item) => item.slug === slug);
  if (!workshop) notFound();
  const instructor = teamMembers.find((member) => member.id === workshop.instructorId);
  if (!instructor) notFound();
  const subject = encodeURIComponent(`Workshop enquiry: ${workshop.title}`);
  return <article className="site-shell py-16 sm:py-24">
    <Link href="/workshops" className="font-mono text-[.68rem] uppercase tracking-wider text-muted transition-colors hover:text-[var(--accent-soft)]">← All workshops</Link>
    <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_.8fr]">
      <div><p className="eyebrow mb-6">{workshop.category} <span className="text-muted">/ {workshop.format}</span></p><h1 className="section-title">{workshop.title}</h1><p className="mt-8 max-w-xl text-base leading-8 text-muted">{workshop.description}</p>
        <dl className="mt-9 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t rule pt-6 text-sm"><div><dt className="eyebrow">Location</dt><dd className="mt-2 text-muted">{workshop.location}</dd></div><div><dt className="eyebrow">Duration</dt><dd className="mt-2 text-muted">{workshop.duration}</dd></div><div><dt className="eyebrow">Level</dt><dd className="mt-2 text-muted">{workshop.level}</dd></div><div><dt className="eyebrow">Group size</dt><dd className="mt-2 text-muted">Up to {workshop.capacity} participants</dd></div></dl>
      </div>
      <figure><ContentImage image={workshop.image} sizes="(max-width: 1024px) 100vw, 40vw" className="aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]"><span className="absolute bottom-5 left-5 font-mono text-[.62rem] uppercase tracking-wider text-white/90">FIELD STUDY / GB—0{workshops.indexOf(workshop) + 1}</span></ContentImage><figcaption className="image-credit">Photo by <a href={workshop.image.sourceUrl} target="_blank" rel="noreferrer">{workshop.image.photographer} / Unsplash ↗</a></figcaption></figure>
    </div>
    <section aria-labelledby="cohort-heading" className="mt-16 grid gap-8 border-y rule py-8 md:grid-cols-[1fr_auto] md:items-center"><div><h2 id="cohort-heading" className="eyebrow">Next cohort</h2><ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">{workshop.cohortDates.map((date) => <li key={date}>{formatDate(date)}</li>)}</ul></div><div className="flex flex-col gap-4 sm:flex-row sm:items-center"><p className="font-display text-2xl">{formatPrice(workshop.priceEGP)} <span className="font-sans text-xs text-muted">per participant</span></p><a href={`mailto:${studio.contactEmail}?subject=${subject}`} className="button-primary">Ask about this workshop <span aria-hidden="true">↗</span></a></div></section>
    <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_.7fr]">
      <section aria-labelledby="outcomes-heading"><p className="eyebrow">01 / In the studio</p><h2 id="outcomes-heading" className="mt-4 font-display text-3xl tracking-tight">What you’ll leave with</h2><ul className="mt-6 space-y-4">{workshop.outcomes.map((outcome) => <li key={outcome} className="flex gap-4 border-b rule pb-4 text-sm leading-6 text-muted"><span className="text-[var(--accent-soft)]">↗</span>{outcome}</li>)}</ul></section>
      <section aria-labelledby="materials-heading"><p className="eyebrow">02 / Come prepared</p><h2 id="materials-heading" className="mt-4 font-display text-3xl tracking-tight">What to bring</h2><ul className="mt-6 space-y-3">{workshop.materials.map((material) => <li key={material} className="border-b rule pb-3 text-sm leading-6 text-muted">{material}</li>)}</ul></section>
    </div>
    <section aria-labelledby="instructor-heading" className="mt-16 border-t rule pt-8"><p className="eyebrow">03 / Your instructor</p><div className="mt-5 max-w-2xl"><h2 id="instructor-heading" className="font-display text-2xl">{instructor.name}</h2><p className="mt-1 font-mono text-[.65rem] uppercase tracking-wider text-[var(--accent-soft)]">{instructor.role}</p><p className="mt-4 text-sm leading-7 text-muted">{instructor.bio}</p></div></section>
  </article>;
}
