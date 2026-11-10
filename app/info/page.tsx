import type { Metadata } from "next";
import { studio, teamMembers } from "@/lib/content";

export const metadata: Metadata = { title: "Info" };

export default function InfoPage() {
  return <div className="site-shell py-16 sm:py-24">
    <p className="eyebrow mb-8">About Grey Barnacle <span className="text-muted">/ {studio.location}</span></p>
    <h1 className="section-title max-w-5xl">Make with new tools.<br /><span className="text-muted">Stay true to your eye.</span></h1>
    <div className="mt-16 grid gap-12 border-t rule pt-10 md:grid-cols-[.65fr_1.35fr]">
      <p className="eyebrow">Our point of view</p>
      <div className="max-w-3xl space-y-6 text-base leading-8 text-muted"><p>{studio.introduction}</p><p>{studio.story}</p><p>Come with a finished practice or a half-formed idea. Bring questions. Leave with experiments worth following.</p></div>
    </div>
    <div className="mt-20 grid gap-5 border-t rule pt-10 sm:grid-cols-3">{studio.principles.map((principle, index) => <div key={principle.title}><p className="eyebrow">0{index + 1} / {principle.title}</p><p className="mt-4 text-sm leading-6 text-muted">{principle.description}</p></div>)}</div>
    <div className="mt-20 border-t rule pt-10"><p className="eyebrow">The people in the studio</p><h2 className="mt-5 font-display text-3xl tracking-tight">A compact team. A wide field of view.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{teamMembers.map((member, index) => <article key={member.id} className="border rule p-5"><p className="eyebrow">Studio member / 0{index + 1}</p><h3 className="mt-5 font-display text-2xl tracking-tight">{member.name}</h3><p className="mt-1 font-mono text-[.65rem] uppercase tracking-wider text-[var(--accent-soft)]">{member.role}</p><p className="mt-5 text-sm leading-6 text-muted">{member.bio}</p><ul className="mt-5 flex flex-wrap gap-2">{member.focus.map((focus) => <li key={focus} className="border rule px-2 py-1 font-mono text-[.58rem] uppercase tracking-wider text-muted">{focus}</li>)}</ul></article>)}</div></div>
  </div>;
}
