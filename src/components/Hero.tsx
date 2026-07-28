import Image from "next/image";
import FloralCorner from "./FloralCorner";

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
        <div className="text-center md:text-left">
          <p className="font-display text-base tracking-[0.2em] text-(--color-gold) sm:text-lg">
            Biblioteca Lily Anjos
          </p>
          <h1 className="font-display text-balance mt-3 text-3xl leading-tight text-(--color-title) sm:text-4xl md:text-5xl">
            Centenas de flores, folhagens e elementos da decoração de eventos
            reunidos em um só lugar.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-(--color-text) sm:text-lg">
            Uma biblioteca visual para você conhecer, comparar e escolher com
            facilidade os elementos que darão vida às suas composições.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-2 text-xs text-(--color-muted) sm:text-sm md:justify-start">
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

          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#colecao"
              className="inline-flex items-center justify-center rounded-full bg-(--color-green) px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-colors hover:bg-(--color-green-hover) sm:text-base"
            >
              QUERO CONHECER A COLEÇÃO
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-(--color-card-border) bg-(--color-card) shadow-2xl">
            <Image
              src="/produtos/colecao-completa.png"
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
