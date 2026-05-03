import { BrandMark } from "./brand-mark";

const columns = [
  {
    title: "Produto",
    links: [
      { label: "Agentes", href: "#" },
      { label: "Conhecimento", href: "#" },
      { label: "Inbox", href: "#" },
      { label: "Integrações", href: "#" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Documentação", href: "#" },
      { label: "API", href: "#" },
      { label: "Status", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Contato", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "LGPD", href: "#" },
      { label: "Segurança", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <BrandMark />
            <p className="mt-4 max-w-[280px] text-[13.5px] leading-[1.55] text-fg-muted">
              Atendimento com IA + handoff humano para times brasileiros que
              levam conversa a sério.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-[12px]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              <span className="font-medium text-fg-muted">Tudo operando</span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fg">
                {col.title}
              </span>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13.5px] text-fg-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[12.5px] text-fg-subtle md:flex-row md:items-center">
          <span>© 2026 AI Assistente. Feito no Brasil. ☕</span>
          <span className="tabular">v0.1.0 · São Paulo, BR</span>
        </div>
      </div>
    </footer>
  );
}
