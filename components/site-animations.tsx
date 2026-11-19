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
      const headings = gsap.utils.toArray<HTMLElement>("h1:not([data-enter]), .section-title:not([data-enter])", root);

      headings.forEach((heading) => {
        splits.push(
          SplitText.create(heading, {
            type: "words,lines",
            mask: "words",
            aria: "auto",
            autoSplit: true,
            onSplit: (split) =>
              gsap.from(split.words, {
                y: 5,
                autoAlpha: 0,
                duration: 1,
                stagger: 0.075,
                ease: "power4.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                  trigger: heading,
                  start: "top 88%",
                  once: true,
                },
              }),
          }),
        );
      });

      const prose = gsap.utils
        .toArray<HTMLElement>("p:not(.eyebrow), p.eyebrow, .button-primary, .button-secondary", root)
        .filter((element) => !element.hasAttribute("data-enter") && !element.closest("article:not(.site-shell), figure"));

      prose.forEach((element) => {
        gsap.from(element, {
          y: 5,
          autoAlpha: 0,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 91%",
            once: true,
          },
        });
      });

      const figures = gsap.utils.toArray<HTMLElement>("figure", root);
      figures.forEach((figure) => {
        const image = figure.querySelector("img");
        const caption = figure.querySelector("figcaption");
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: figure,
            start: "top 88%",
            once: true,
          },
        });

        timeline.from(figure, {
          x: 36,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
        });

        if (image) {
          timeline.fromTo(
            image,
            { scale: 1.14 },
            { scale: 1, duration: 1.25, ease: "power3.out" },
            "<",
          );
        }

        if (caption) {
          timeline.from(caption, {
            y: 12,
            autoAlpha: 0,
            duration: 0.55,
            ease: "power2.out",
          }, "<0.22");
        }
      });

      const cards = gsap.utils.toArray<HTMLElement>("article:not(.site-shell)", root);
      cards.forEach((card) => {
        const parts = gsap.utils.toArray<HTMLElement>("img, h2, h3, p, time", card);
        const images = card.querySelectorAll("img");

        gsap.from(parts, {
          y: 30,
          autoAlpha: 0,
          duration: 0.72,
          stagger: 0.075,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 86%",
            once: true,
          },
        });

        if (images.length) {
          gsap.fromTo(
            images,
            { scale: 1.12 },
            {
              scale: 1,
              duration: 1.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
                once: true,
              },
            },
          );
        }
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
