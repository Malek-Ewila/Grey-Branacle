import type { Metadata } from "next";
import Link from "next/link";
import { studio } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: { 
    default: "Grey Barnacle — Make the unfamiliar visible", 
    template: "%s — Grey Barnacle" 
  },
  description: "Illustration workshops for learning to make images with new technologies.",
  verification: {
    google: "kqzQCO2bPV_a9dO6MnnIqHRweGB05qXyICztB4K7VI0",
  },
};

const nav = [
  { href: "/info", label: "Info" },
  { href: "/workshops", label: "Workshops" },
  { href: "/blog", label: "Journal" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only z-50 bg-[var(--accent)] p-3 text-sm focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
        <header className="site-shell flex items-center justify-between border-b rule py-5">
          <Link href="/" aria-label="Grey Barnacle home" className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[.1em] sm:text-base"><span aria-hidden="true" className="flex size-7 items-center justify-center border border-[var(--accent)] text-xs text-[var(--accent-soft)]">G</span>Grey Barnacle</Link>
          <nav aria-label="Main navigation" className="flex items-center gap-4 font-mono text-[.65rem] uppercase tracking-[.08em] sm:gap-8 sm:text-xs">
            {nav.map((item) => <Link key={item.href} href={item.href} className="site-nav-link">{item.label}</Link>)}
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hidden border rule px-3 py-2 transition-colors hover:border-[var(--accent)] sm:block">Instagram ↗</a>
          </nav>
        </header>
        <main id="main-content">{children}</main>
        <footer className="site-shell mt-24 border-t rule py-8">
          <div className="flex flex-col justify-between gap-5 text-xs text-muted sm:flex-row sm:items-center">
            <p className="font-mono text-[.65rem] uppercase tracking-wider">© {new Date().getFullYear()} Grey Barnacle · Draw beyond the expected</p>
            <div className="flex gap-6 font-mono text-[.65rem] uppercase tracking-wider"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="site-nav-link">Instagram ↗</a><a href={`mailto:${studio.contactEmail}`} className="site-nav-link">Say hello ↗</a></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
