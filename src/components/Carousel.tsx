"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { CarouselImage } from "@/data/products";

type Props = {
  images: CarouselImage[];
  label: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export default function Carousel({
  images,
  label,
  sizes = "(min-width: 768px) 420px, 90vw",
  priority = false,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (i: number) => setIndex((i + images.length) % images.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        prev();
      } else {
        next();
      }
    }
    touchStartX.current = null;
  };

  if (images.length === 0) return null;
  const current = images[index];

  return (
    <div
      className={`relative ${className}`}
      role="group"
      aria-roledescription="carrossel"
      aria-label={label}
    >
      <div
        className="relative aspect-square w-full overflow-hidden rounded-xl border border-(--color-card-border) bg-(--color-card)"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes={sizes}
          className="object-contain"
          priority={priority && index === 0}
          loading={priority && index === 0 ? undefined : "eager"}
        />
      </div>

      <p aria-live="polite" className="sr-only">
        {current.alt}
      </p>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full border border-(--color-card-border) bg-(--color-bg)/80 p-2 text-(--color-title) transition-colors hover:bg-(--color-card)"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border border-(--color-card-border) bg-(--color-bg)/80 p-2 text-(--color-title) transition-colors hover:bg-(--color-card)"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="mt-3 flex justify-center gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para imagem ${i + 1} de ${images.length}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-(--color-gold)" : "bg-(--color-card-border)"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
