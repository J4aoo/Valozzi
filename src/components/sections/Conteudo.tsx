"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { spotlight } from "@/lib/spotlight";

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
    <section id="conteudos" className="vars-light surface-light scroll-mt-24 py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-title mx-auto max-w-3xl text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
            Antes de tomar uma decisão, entenda a estratégia.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <StaggerItem key={article.title} className="h-full">
              <Link
                href="/blog"
                onPointerMove={spotlight}
                className="glass glass-spotlight group flex h-full flex-col justify-between gap-6 rounded-[1.75rem] p-7 transition-transform duration-300 ease-out hover:-translate-y-1 active:scale-[0.98]"
              >
                <div>
                  <h3 className="text-headline text-xl">{article.title}</h3>
                  <p className="text-muted mt-2 text-[15px] leading-relaxed">{article.description}</p>
                </div>
                <span className="flex h-8 w-8 items-center justify-center self-end rounded-full bg-valozzi-black/[0.06] text-valozzi-black/60 transition-colors group-hover:bg-valozzi-gold group-hover:text-valozzi-black">
                  ›
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
