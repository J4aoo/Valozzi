"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { CtaLink } from "./ui/CtaButton";
import { Logo } from "./Logo";
import { springs } from "@/lib/motion";

const NAV_LINKS = [
  { label: "Estratégia", href: "/#estrategia" },
  { label: "Consórcio", href: "/consorcio" },
  { label: "Patrimônio", href: "/planejamento-patrimonial" },
  { label: "Cases", href: "/#cases" },
  { label: "Sobre nós", href: "/sobre" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  // A cápsula encolhe um pouco quando o conteúdo passa por baixo, como as
  // barras do iOS 26 — o material continua, só cede foco ao conteúdo.
  const scale = useTransform(scrollY, [0, 160], [1, 0.975]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...springs.default, delay: 0.1 }}
      className="vars-dark fixed inset-x-0 top-0 z-50 px-3 pt-3"
    >
      <motion.div
        style={{ scale }}
        className={`glass-thick mx-auto max-w-6xl overflow-hidden ${open ? "rounded-[1.75rem]" : "rounded-full"}`}
      >
        <div className="flex h-16 items-center justify-between gap-4 pl-4 pr-2.5">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[14px] font-medium text-valozzi-offwhite/85 transition-colors hover:bg-white/[0.07] hover:text-valozzi-offwhite"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <CtaLink href="/contato" size="sm" className="hidden sm:inline-flex">
              Falar com especialista
            </CtaLink>

            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-valozzi-offwhite transition-colors hover:bg-white/[0.07] lg:hidden"
            >
              <motion.span
                className="absolute h-[1.5px] w-[18px] rounded-full bg-current"
                animate={{ y: open ? 0 : -4, rotate: open ? 45 : 0 }}
                transition={springs.snappy}
              />
              <motion.span
                className="absolute h-[1.5px] w-[18px] rounded-full bg-current"
                animate={{ y: open ? 0 : 4, rotate: open ? -45 : 0 }}
                transition={springs.snappy}
              />
            </button>
          </div>
        </div>

        {/* O menu nasce de dentro da própria cápsula (origem no botão),
            em vez de uma faixa separada. */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={springs.snappy}
              className="lg:hidden"
            >
              <ul className="list-inset mx-2 mb-2 overflow-hidden rounded-[1.25rem] bg-white/[0.04]">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-5 py-4 text-[17px] text-valozzi-offwhite/90 transition-colors active:bg-white/[0.06]"
                    >
                      {link.label}
                      <span className="text-valozzi-gold" aria-hidden>
                        ›
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-2 pb-3 sm:hidden">
                <CtaLink href="/contato" className="w-full">
                  Falar com especialista
                </CtaLink>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
