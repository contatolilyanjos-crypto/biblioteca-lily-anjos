import type { Volume } from "@/data/products";
import CheckoutButton from "./CheckoutButton";
import Carousel from "./Carousel";

export default function VolumeCard({ volume }: { volume: Volume }) {
  const images = [
    {
      src: volume.imagem,
      alt: `Capa do ${volume.titulo}, Biblioteca Lily Anjos.`,
    },
    ...volume.imagensCarrossel,
  ];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-(--color-card-border) bg-(--color-card) p-5 shadow-md">
      <div className="mx-auto w-full max-w-[220px]">
        <Carousel images={images} label={`Imagens do ${volume.titulo}`} sizes="(min-width: 768px) 220px, 60vw" />
      </div>

      <h3 className="font-display mt-4 text-center text-lg text-(--color-title) sm:text-xl">
        {volume.titulo}
      </h3>

      <p className="mt-2 flex-1 text-center text-sm text-(--color-text)">
        {volume.descricao}
      </p>

      <div className="mt-4 text-center">
        <p className="font-display text-xl text-(--color-title)">
          {volume.precoAVista}
        </p>
        <p className="text-xs text-(--color-muted)">{volume.parcelamento}</p>
      </div>

      <div className="mt-4">
        <CheckoutButton
          href={volume.linkCheckout}
          label={volume.ctaLabel}
          variant="secondary"
        />
      </div>
    </article>
  );
}
