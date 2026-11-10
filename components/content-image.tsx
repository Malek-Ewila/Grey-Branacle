"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import type { ContentImage as ContentImageData } from "@/lib/content";

type ContentImageProps = {
  image: ContentImageData;
  sizes: string;
  className: string;
  children?: ReactNode;
};

export default function ContentImage({ image, sizes, className, children }: ContentImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative isolate overflow-hidden bg-[#17171a] ${className}`}>
      {hasError ? (
        <div className="image-fallback" role="img" aria-label={image.alt}>
          <div className="art-panel-grid" aria-hidden="true" />
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover brightness-[.78] saturate-[.72] transition-transform duration-500 group-hover:scale-[1.025]"
          onError={() => setHasError(true)}
        />
      )}
      {children ? <div className="pointer-events-none absolute inset-0 z-10">{children}</div> : null}
    </div>
  );
}
