"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { springs } from "@/lib/motion";

const ARTICLES = [
  {
    title: "Consórcio é investimento?",
    description:
      "Entenda a diferença entre adquirir crédito e investir diretamente em um ativo.",
  },
  {
    title: "Consórcio ou financiamento?",
    description:
      "Conheça as características, custos, prazos e condições que devem ser analisados.",
  },
  {
    title: "Como funciona a contemplação?",
    description: "Entenda sorteio, lance e as regras previstas no contrato.",
  },
  {
    title: "O que é alavancagem patrimonial?",
    description:
      "Como capital, crédito, ativos e planejamento podem entrar na mesma estratégia.",
  },
  {
    title: "O reajuste da parcela é um problema?",
    description:
      "Entenda por que o reajuste precisa fazer parte da análise antes da contratação.",
  },
  {
    title: "Como pensar patrimônio em 5 anos?",
    description: "Planejamento, disciplina e decisões coerentes ao longo do tempo.",
  },
];

export function Conteudo() {
  return (
    <section id="conteudos" className="bg-valozzi-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
            Antes de tomar uma decisão, entenda a estratégia.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {ARTICLES.map((article) => (
            <StaggerItem key={article.title}>
              <motion.a
                href="/blog"
                className="group block"
                whileHover="hover"
                initial="rest"
              >
                <h3 className="font-serif text-lg group-hover:text-valozzi-gold transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-valozzi-black/60">
                  {article.description}
                </p>
                <motion.span
                  className="block h-px bg-valozzi-gold mt-3 origin-left"
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={springs.snappy}
                />
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
