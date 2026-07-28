import Image from "next/image";
import FloralCorner from "./FloralCorner";
import { colecao } from "@/data/products";

const destaques = [
  "5 volumes digitais",
  "Mais de 550 páginas",
  "Acesso imediato",
];

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden px-4 pt-10 pb-14 sm:px-6 sm:pt-14 md:pt-20"
    >
      <FloralCorner className="pointer-events-none absolute -top-2 -left-2 h-24 w-24 sm:h-32 sm:w-32" />
      <FloralCorner
        flip
        className="pointer-events-none absolute -top-2 -right-2 h-24 w-24 sm:h-32 sm:w-32"
      />

      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p
            className="font-display animate-fade-up text-base tracking-[0.2em] text-(--color-gold) sm:text-lg"
            style={{ animationDelay: "150ms" }}
          >
            Biblioteca Lily Anjos
          </p>
          <h1
            className="font-display text-balance animate-fade-up mt-3 text-3xl leading-tight text-(--color-title) sm:text-4xl md:text-5xl"
            style={{ animationDelay: "150ms" }}
          >
            Centenas de flores, folhagens e elementos da decoração de eventos
            reunidos em um só lugar.
          </h1>
          <p
            className="animate-fade-up mt-5 text-base leading-relaxed text-(--color-text) sm:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            Uma biblioteca visual para você conhecer, comparar e escolher com
            facilidade os elementos que darão vida às suas composições.
          </p>

          <ul
            className="animate-fade-up mt-6 flex flex-wrap justify-center gap-x-2 gap-y-2 text-xs text-(--color-muted) sm:text-sm md:justify-start"
            style={{ animationDelay: "300ms" }}
          >
            {destaques.map((item, i) => (
              <li key={item} className="flex items-center gap-2">
                <span className="rounded-full border border-(--color-card-border) bg-(--color-card) px-3 py-1">
                  {item}
                </span>
                {i < destaques.length - 1 && (
                  <span className="text-(--color-olive)">•</span>
                )}
              </li>
            ))}
          </ul>

          <div
            className="animate-fade-up mt-8 flex justify-center md:justify-start"
            style={{ animationDelay: "450ms" }}
          >
            <a
              href="#colecao"
              className="inline-flex items-center justify-center rounded-full bg-(--color-green) px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-colors hover:bg-(--color-green-hover) sm:text-base"
            >
              QUERO CONHECER A COLEÇÃO
            </a>
          </div>
        </div>

        <div className="animate-fade-up order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-(--color-card-border) bg-(--color-card) shadow-2xl">
            <Image
              src={colecao.imagemHero}
              alt="Coleção completa Biblioteca Lily Anjos: os cinco volumes do Guia do Decorador e Florista lado a lado, cercados por flores e folhagens naturais."
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 768px) 480px, 90vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
