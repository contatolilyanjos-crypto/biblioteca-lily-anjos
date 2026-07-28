const links = [
  { href: "#colecao", label: "Coleção" },
  { href: "#volumes", label: "Volumes" },
  { href: "#informacoes", label: "Informações" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-(--color-card-border) bg-(--color-bg)/90 backdrop-blur supports-[backdrop-filter]:bg-(--color-bg)/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#topo"
          className="font-display text-sm tracking-wide text-(--color-title) sm:text-base"
        >
          Biblioteca Lily Anjos
        </a>
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-4 text-xs text-(--color-text) sm:gap-6 sm:text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-(--color-gold)"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
