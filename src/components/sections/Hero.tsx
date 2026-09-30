"use client";

import { motion, useReducedMotion } from "motion/react";
import { CtaLink } from "@/components/ui/CtaButton";
import { springs } from "@/lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: springs.default },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center bg-valozzi-black text-valozzi-offwhite overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background:repeating-linear-gradient(115deg,var(--color-valozzi-gold)_0px,var(--color-valozzi-gold)_1px,transparent_1px,transparent_120px)]"
        animate={reduceMotion ? undefined : { backgroundPosition: ["0px 0px", "240px 120px"] }}
        transition={reduceMotion ? undefined : { duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          <motion.p
            variants={item}
            className="text-xs font-medium tracking-[0.3em] uppercase text-valozzi-gold mb-8"
          >
            Estratégia • Consórcio • Patrimônio
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-balance"
          >
            Seu patrimônio não precisa crescer por acaso.
          </motion.h1>

          <motion.p variants={item} className="mt-8 text-lg text-valozzi-offwhite/80 max-w-xl">
            Estratégia, planejamento e consórcio para quem pensa além do
            presente.
          </motion.p>

          <motion.p variants={item} className="mt-4 text-base text-valozzi-offwhite/60 max-w-xl">
            Para empresários e pessoas que buscam estruturar a aquisição de
            ativos e construir patrimônio com visão de médio e longo prazo.
          </motion.p>

          <motion.div variants={item} className="mt-10">
            <CtaLink href="#diagnostico">Conhecer minha estratégia</CtaLink>
            <p className="mt-4 text-xs text-valozzi-offwhite/50 italic">
              Atendimento personalizado pelo WhatsApp.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative aspect-[4/5] rounded-sm border border-valozzi-gold/20 bg-gradient-to-br from-valozzi-gold/10 via-transparent to-transparent"
        >
          {/* TODO: substituir por foto profissional (empresário, arquitetura de alto padrão, skyline) */}
        </motion.div>
      </motion.div>
    </section>
  );
}
