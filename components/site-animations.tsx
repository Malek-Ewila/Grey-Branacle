"use client";

import { useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
}

type SiteAnimationsProps = {
  children: ReactNode;
};

export default function SiteAnimations({ children }: SiteAnimationsProps) {
  const mainRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const motion = gsap.matchMedia();

    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const root = mainRef.current;
      if (!root) return;

      const splits: SplitText[] = [];
      const headings = gsap.utils.toArray<HTMLElement>("h1, .section-title", root);

      headings.forEach((heading) => {
        splits.push(
          SplitText.create(heading, {
            type: "words,lines",
            mask: "words",
            aria: "auto",
            autoSplit: true,
            onSplit: (split) =>
              gsap.from(split.words, {
                yPercent: 110,
                autoAlpha: 0,
                duration: 0.72,
                stagger: 0.055,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
              }),
          }),
        );
      });

      const reveals = gsap.utils.toArray<HTMLElement>("article, figure", root);
      reveals.forEach((element) => {
        gsap.from(element, {
          y: 20,
          autoAlpha: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            once: true,
          },
        });
      });

      return () => splits.forEach((split) => split.revert());
    });

    return () => motion.revert();
  }, { scope: mainRef, dependencies: [pathname], revertOnUpdate: true });

  return (
    <main id="main-content" ref={mainRef}>
      {children}
    </main>
  );
}
