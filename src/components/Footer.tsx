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
    <footer className="bg-valozzi-black text-valozzi-offwhite/70 border-t border-valozzi-gold/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-sm">Investimentos</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-valozzi-gold mb-4">
            Navegação
          </p>
          <ul className="space-y-2 text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-valozzi-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-valozzi-gold mb-4">
            Canais
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-valozzi-gold transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-valozzi-gold transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm text-valozzi-offwhite/50">
          {/* TODO: incluir CNPJ, registro na administradora de consórcio,
             endereço e canal de ouvidoria antes de publicar. */}
          <p>© {new Date().getFullYear()} Valozzi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
