"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...springs.default, delay: 0.1 }}
      className="fixed top-0 inset-x-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(13,13,11,0.85)" : "rgba(13,13,11,0.4)",
        borderColor: scrolled ? "rgba(165,155,117,0.2)" : "rgba(165,155,117,0)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm tracking-wide text-valozzi-offwhite/80 hover:text-valozzi-gold transition-colors py-1"
            >
              {link.label}
              <motion.span
                className="absolute left-0 -bottom-0.5 h-px w-full bg-valozzi-gold origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={springs.snappy}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <CtaLink
            href="/contato"
            variant="outline"
            className="hidden sm:inline-flex text-valozzi-offwhite"
          >
            Falar com especialista
          </CtaLink>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden relative h-9 w-9 flex items-center justify-center text-valozzi-offwhite"
          >
            <motion.span
              className="absolute h-px w-5 bg-current"
              animate={{ y: open ? 0 : -5, rotate: open ? 45 : 0 }}
              transition={springs.snappy}
            />
            <motion.span
              className="absolute h-px w-5 bg-current"
              animate={{ y: open ? 0 : 5, rotate: open ? -45 : 0 }}
              transition={springs.snappy}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={springs.snappy}
            className="lg:hidden overflow-hidden border-t border-valozzi-gold/10"
            style={{ backgroundColor: "rgba(13,13,11,0.95)", backdropFilter: "blur(16px)" }}
          >
            <ul className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-valozzi-offwhite/90 hover:text-valozzi-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contato"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-valozzi-gold"
                >
                  Falar com especialista
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
