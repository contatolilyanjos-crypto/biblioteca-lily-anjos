import Reveal from "./Reveal";

const infos = [
  {
    icon: (
      <path d="M6 3h9l3 3v15H6zM15 3v3h3" />
    ),
    text: "Entrega: arquivos digitais em PDF.",
  },
  {
    icon: (
      <path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4" />
    ),
    text: "Acesso: enviado pela Hotmart após a confirmação do pagamento.",
  },
  {
    icon: <path d="M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7z" />,
    text: "Uso: acesso individual, protegido por direitos autorais.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="informacoes"
      className="border-y border-(--color-card-border) bg-(--color-bg-soft) px-4 py-14 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-2xl text-(--color-title) sm:text-3xl">
            Criado por Lily Anjos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-(--color-text) sm:text-lg">
            Decoradora, designer de eventos e professora, Lily reuniu nesta
            coleção sua experiência profissional, pesquisa e curadoria para
            facilitar o trabalho de decoradores e floristas.
          </p>
        </Reveal>

        <Reveal delayMs={120}>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {infos.map((info, i) => (
              <li
                key={i}
                className="flex flex-col items-center gap-3 rounded-2xl border border-(--color-card-border) bg-(--color-card) px-4 py-6"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  {info.icon}
                </svg>
                <span className="text-sm text-(--color-text)">{info.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
