import { colecao } from "@/data/products";

export default function MobileBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-(--color-card-border) bg-(--color-bg-soft)/95 p-3 backdrop-blur md:hidden">
      <a
        href={colecao.linkCheckout}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-full bg-(--color-green) py-3 text-center text-sm font-semibold tracking-wide text-white shadow-lg transition-colors hover:bg-(--color-green-hover)"
      >
        COMPRAR COLEÇÃO
      </a>
    </div>
  );
}
