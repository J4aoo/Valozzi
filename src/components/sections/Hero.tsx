"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CtaLink } from "@/components/ui/CtaButton";
import { springs } from "@/lib/motion";
import { useReducedMotionSafe } from "@/components/motion/ScrollStage";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

// Topo minimalista: só a mensagem. Ao rolar, o conteúdo recua e se dissolve
// — a página "passa" para a próxima cena em vez de simplesmente subir.
export function Hero() {
  const reduceMotion = useReducedMotionSafe();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { ...springs.default, duration: 0.9 },
      transitionEnd: { filter: "none" },
    },
  };

  return (
    <section ref={ref} className="vars-dark surface-dark relative flex min-h-svh items-center overflow-hidden">
      <motion.div
        style={reduceMotion ? undefined : { scale, opacity, y }}
        className="relative mx-auto w-full max-w-4xl px-6 pb-24 pt-36 text-center lg:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="glass inline-flex h-8 items-center rounded-full px-4 text-[13px] font-medium text-valozzi-champagne"
        >
          Estratégia • Consórcio • Patrimônio
        </motion.p>

        <motion.h1 variants={item} className="text-display mx-auto mt-8 max-w-4xl text-[clamp(2.75rem,7vw,5.5rem)] text-balance">
          Seu patrimônio não precisa crescer <span className="text-gold">por acaso.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-2xl text-[clamp(1.125rem,2vw,1.4375rem)] leading-snug tracking-[-0.01em] text-valozzi-offwhite/85"
        >
          Estratégia, planejamento e consórcio para quem pensa além do
          presente.
        </motion.p>

        <motion.p variants={item} className="text-muted mx-auto mt-4 max-w-xl text-[17px] leading-relaxed">
          Para empresários e pessoas que buscam estruturar a aquisição de
          ativos e construir patrimônio com visão de médio e longo prazo.
        </motion.p>

        <motion.div variants={item} className="mt-11">
          <CtaLink href="#diagnostico">Conhecer minha estratégia</CtaLink>
          <p className="text-subtle mt-4 text-[13px]">Atendimento personalizado pelo WhatsApp.</p>
        </motion.div>
      </motion.div>

      {/* Indicação de rolagem: só um traço, sem texto. */}
      <motion.span
        aria-hidden
        style={reduceMotion ? undefined : { opacity }}
        className="absolute bottom-8 left-1/2 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-valozzi-gold/70 to-transparent"
      />
    </section>
  );
}
