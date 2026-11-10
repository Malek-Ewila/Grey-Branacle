import Link from "next/link";
import { formatDate, formatPrice, studio, teamMembers, workshops } from "@/lib/content";
import ContentImage from "@/components/content-image";

export default function HomePage() {
  return (
    <>
      <section className="site-shell grid min-h-[76vh] items-center gap-10 py-16 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
        <div>
          <p className="eyebrow mb-8">Independent illustration studio <span className="text-muted">/ EST. {studio.established}</span></p>
          <h1 className="display max-w-4xl">Draw the<br />world<br /><span className="accent-text">differently.</span></h1>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-sm leading-7 text-muted">{studio.introduction}</p>
            <Link href="/workshops" className="button-primary">Explore workshops <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <figure>
          <ContentImage image={workshops[0].image} sizes="(max-width: 1024px) 100vw, 42vw" className="aspect-[4/3] sm:aspect-[5/4]">
            <span className="absolute bottom-5 left-5 font-mono text-[.62rem] uppercase tracking-[.12em] text-white/90">STUDY 001 <span className="mx-2 text-[var(--accent-soft)]">/</span> Material, memory, machine</span>
          </ContentImage>
          <figcaption className="image-credit">Photo by <a href={workshops[0].image.sourceUrl} target="_blank" rel="noreferrer">{workshops[0].image.photographer} / Unsplash ↗</a></figcaption>
        </figure>
      </section>

      <section className="site-shell border-t rule py-20 sm:py-28">
        <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
          <p className="eyebrow">01 / About the team</p>
          <div>
            <h2 className="section-title max-w-4xl">A studio built for <span className="text-muted">curious image makers.</span></h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <p className="text-sm leading-7 text-muted">{studio.story}</p>
              <p className="text-sm leading-7 text-muted">Based in {studio.location}, our small teaching team brings illustration, digital craft and creative technology into one shared studio practice.</p>
            </div>
            <Link href="/info" className="mt-8 inline-flex items-center gap-5 border-b rule pb-2 font-mono text-[.68rem] uppercase tracking-wider transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]">Meet the studio <span>↗</span></Link>
          </div>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => <article key={member.id} className="border-t rule pt-5">
            <p className="eyebrow">Studio member / 0{index + 1}</p>
            <h3 className="mt-4 font-display text-2xl tracking-tight">{member.name}</h3>
            <p className="mt-1 font-mono text-[.65rem] uppercase tracking-wider text-[var(--accent-soft)]">{member.role}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{member.bio}</p>
          </article>)}
        </div>
      </section>

      <section className="site-shell border-t rule py-20 sm:py-28">
        <div className="mb-10 flex items-end justify-between gap-5"><div><p className="eyebrow mb-4">02 / Learn by doing</p><h2 className="section-title">Current workshops</h2></div><Link href="/workshops" className="hidden font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-[var(--accent-soft)] sm:block">View all ↗</Link></div>
        <div className="grid gap-4 md:grid-cols-3">
          {workshops.map((workshop, index) => <article key={workshop.slug} className="group border rule transition-colors hover:border-[var(--accent)]"><Link href={`/workshops/${workshop.slug}`} className="block p-4 sm:p-5"><ContentImage image={workshop.image} sizes="(max-width: 768px) 100vw, 33vw" className="mb-6 aspect-[4/3]"><span className="absolute bottom-4 left-4 font-mono text-[.62rem] uppercase tracking-widest text-white/90">STUDY 0{index + 1}</span></ContentImage><p className="eyebrow">{workshop.category}</p><h3 className="mt-3 font-display text-2xl tracking-tight transition-colors group-hover:text-[var(--accent-soft)]">{workshop.title}</h3><p className="mt-3 text-xs text-muted">{workshop.format}</p><div className="mt-6 flex justify-between border-t rule pt-4 font-mono text-[.62rem] uppercase tracking-wider text-muted"><span>{formatDate(workshop.cohortDates[0])}</span><span>{formatPrice(workshop.priceEGP)}</span></div></Link><p className="image-credit px-4 pb-4 sm:px-5"><a href={workshop.image.sourceUrl} target="_blank" rel="noreferrer">Photo: {workshop.image.photographer} / Unsplash ↗</a></p></article>)}
        </div>
      </section>

      <section className="site-shell pb-24 pt-8">
        <div className="grid gap-8 border border-[var(--accent)]/50 bg-[var(--surface)] p-7 sm:p-12 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow mb-5">03 / Keep in touch</p><h2 className="max-w-3xl font-display text-5xl font-medium leading-[.94] tracking-[-.07em] sm:text-7xl">Make more room for ideas.</h2><p className="mt-5 max-w-lg text-sm leading-6 text-muted">Follow the studio for open calls, works in progress and notes from the workshop floor.</p></div>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="button-secondary">Follow on Instagram <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}
