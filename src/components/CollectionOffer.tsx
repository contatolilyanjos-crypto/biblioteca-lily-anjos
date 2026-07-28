import Image from "next/image";
import { colecao, colecaoInteriores, volumes } from "@/data/products";
import CheckoutButton from "./CheckoutButton";
import Carousel from "./Carousel";

export default function CollectionOffer() {
  return (
    <section
      id="colecao"
      className="border-y border-(--color-card-border) bg-(--color-bg-soft) px-4 py-14 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
          <div className="mx-auto w-full max-w-sm md:max-w-none md:order-2">
            <div className="overflow-hidden rounded-2xl border border-(--color-card-border) bg-(--color-card) shadow-2xl">
              <Image
                src={colecao.imagem}
                alt="Mockup dos cinco volumes da Biblioteca Lily Anjos, coleção completa do Guia do Decorador e Florista."
                width={1254}
                height={1254}
                sizes="(min-width: 768px) 480px, 90vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="text-center md:order-1 md:text-left">
            <span className="inline-block rounded-full border border-(--color-gold)/50 bg-(--color-card) px-4 py-1.5 text-xs font-semibold tracking-wide text-(--color-gold) sm:text-sm">
              {colecao.selo}
            </span>

            <h2 className="font-display text-balance mt-4 text-2xl leading-tight text-(--color-title) sm:text-3xl md:text-4xl">
              {colecao.titulo}
            </h2>

            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              {colecao.descricao}
            </p>

            <ul className="mt-6 space-y-2 text-left text-sm text-(--color-text) sm:text-base">
              {volumes.map((v) => (
                <li key={v.slug} className="flex gap-2">
                  <span className="text-(--color-olive)">•</span>
                  <span>{v.titulo}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <p className="text-sm text-(--color-muted) line-through">
                {colecao.precoAnterior}
              </p>
              <p className="font-display mt-1 text-3xl text-(--color-title) sm:text-4xl">
                {colecao.precoAVista}
              </p>
              <p className="mt-1 text-sm text-(--color-text)">
                {colecao.parcelamento}
              </p>
            </div>

            <div className="mt-7">
              <CheckoutButton href={colecao.linkCheckout} label={colecao.ctaLabel} />
              <p className="mt-3 text-xs text-(--color-muted)">
                Compra segura pela Hotmart • Material digital • Acesso após a
                confirmação do pagamento
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <h3 className="font-display text-xl text-(--color-title) sm:text-2xl">
            Veja como é por dentro
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-(--color-text)">
            Fichas técnicas com fotos, tons disponíveis, cuidados e aplicações
            — um exemplo de cada volume da coleção.
          </p>
          <div className="mx-auto mt-6 max-w-xs sm:max-w-sm">
            <Carousel
              images={colecaoInteriores}
              label="Páginas internas da Biblioteca Lily Anjos"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
