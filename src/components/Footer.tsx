import Link from "next/link";
import { Logo } from "./Logo";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const LINKS = [
  { label: "Estratégia", href: "/#estrategia" },
  { label: "Consórcio", href: "/consorcio" },
  { label: "Patrimônio", href: "/planejamento-patrimonial" },
  { label: "Cases", href: "/#cases" },
  { label: "Conteúdos", href: "/blog" },
  { label: "Sobre nós", href: "/sobre" },
];

export function Footer() {
  return (
    <footer className="vars-dark surface-dark border-t border-valozzi-gold/15">
      <div className="mx-auto max-w-6xl px-6 py-14 text-[13px] lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="text-muted mt-3">Investimentos</p>
          </div>

          <div>
            <p className="mb-3 font-semibold text-valozzi-offwhite">Navegação</p>
            <ul className="space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted transition-colors hover:text-valozzi-offwhite">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-semibold text-valozzi-offwhite">Canais</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-valozzi-offwhite"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-valozzi-offwhite"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="text-subtle">
            {/* TODO: incluir CNPJ, registro na administradora de consórcio,
               endereço e canal de ouvidoria antes de publicar. */}
            <p>© {new Date().getFullYear()} Valozzi. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
