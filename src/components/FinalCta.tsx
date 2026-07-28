import { colecao } from "@/data/products";
import CheckoutButton from "./CheckoutButton";
import FloralCorner from "./FloralCorner";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      <FloralCorner className="pointer-events-none absolute -bottom-2 -left-2 h-24 w-24 sm:h-32 sm:w-32" />
      <FloralCorner
        flip
        className="pointer-events-none absolute -bottom-2 -right-2 h-24 w-24 sm:h-32 sm:w-32"
      />

      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-balance text-2xl text-(--color-title) sm:text-3xl md:text-4xl">
          Tenha centenas de referências sempre ao seu alcance.
        </h2>
        <p className="mt-4 text-base leading-relaxed sm:text-lg">
          Escolha seus elementos com mais facilidade, amplie seu repertório e
          crie composições com mais segurança.
        </p>

        <p className="font-display mt-8 text-sm tracking-wide text-(--color-gold)">
          5 volumes completos
        </p>
        <p className="font-display mt-1 text-3xl text-(--color-title) sm:text-4xl">
          {colecao.precoAVista}
        </p>
        <p className="mt-1 text-sm text-(--color-text)">
          {colecao.parcelamento}
        </p>

        <div className="mx-auto mt-8 max-w-xs">
          <CheckoutButton
            href={colecao.linkCheckout}
            label="QUERO A BIBLIOTECA COMPLETA"
          />
        </div>
      </Reveal>
    </section>
  );
}
