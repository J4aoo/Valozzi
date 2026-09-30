"use client";

import { motion } from "motion/react";
import { CtaLink } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { springs } from "@/lib/motion";

const FLOW = ["Capital", "Planejamento", "Consórcio", "Aquisição", "Ativo", "Patrimônio"];

export function AlavancagemPatrimonial() {
  return (
    <section className="bg-valozzi-black text-valozzi-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <Eyebrow>Patrimônio</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl leading-tight tracking-[-0.015em] text-balance">
              Alavancar não é arriscar.
              <br />É estruturar.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-valozzi-offwhite/70">
              Alavancagem patrimonial não significa simplesmente assumir mais
              crédito. Significa estruturar recursos, capacidade de
              pagamento, ativos e prazo de maneira coerente com seus
              objetivos.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-valozzi-offwhite/70">
              É por isso que uma estratégia precisa vir antes da contratação.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <CtaLink href="#diagnostico">Quero analisar meu cenário</CtaLink>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="space-y-0" stagger={0.12}>
          {FLOW.map((step, i) => (
            <StaggerItem key={step}>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-valozzi-gold">{`0${i + 1}`}</span>
                  {i < FLOW.length - 1 && (
                    <motion.span
                      className="w-px h-10 bg-valozzi-gold/30 origin-top"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ ...springs.default, delay: 0.15 * i + 0.2 }}
                    />
                  )}
                </div>
                <span className="font-serif text-lg pb-6 pt-1">{step}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
