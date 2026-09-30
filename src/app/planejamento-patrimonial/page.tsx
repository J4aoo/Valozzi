import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageHero } from "@/components/PageHero";
import { DiagnosticoForm } from "@/components/sections/DiagnosticoForm";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { CtaLink } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "Alavancagem e Planejamento Patrimonial | Valozzi",
  description:
    "Alavancagem patrimonial é a utilização planejada de recursos, crédito e ativos para ampliar a capacidade de construção de patrimônio.",
};

const FLOW = ["Capital", "Estratégia", "Crédito", "Ativo", "Patrimônio"];

export default function PlanejamentoPatrimonialPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Patrimônio"
          title="Capital parado é uma decisão. Capital estrategicamente direcionado também."
        />

        <section className="bg-valozzi-offwhite py-28 lg:py-36">
          <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
            <Reveal>
              <Eyebrow className="justify-center flex">Definição</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 font-serif text-2xl sm:text-3xl leading-snug tracking-[-0.015em] text-balance">
                Alavancagem patrimonial é a utilização planejada de recursos,
                crédito e ativos para ampliar a capacidade de construção de
                patrimônio — sempre considerando riscos, custos, prazo e
                capacidade financeira.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-valozzi-black text-valozzi-offwhite py-28 lg:py-36">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
                Alavancar não é arriscar. É estruturar.
              </h2>
            </Reveal>

            <StaggerGroup
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4"
              stagger={0.1}
            >
              {FLOW.map((step, i) => (
                <StaggerItem key={step}>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-xl border border-valozzi-gold/40 rounded-full h-16 w-16 flex items-center justify-center text-center px-2">
                      {step}
                    </span>
                    {i < FLOW.length - 1 && (
                      <span className="text-valozzi-gold text-xl rotate-90 sm:rotate-0">→</span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal delay={0.1}>
              <p className="mt-16 text-center text-valozzi-offwhite/70 max-w-2xl mx-auto">
                Alavancagem patrimonial não significa simplesmente assumir mais
                crédito. Significa estruturar recursos, capacidade de
                pagamento, ativos e prazo de maneira coerente com seus
                objetivos. É por isso que uma estratégia precisa vir antes da
                contratação.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex justify-center">
                <CtaLink href="#diagnostico">Quero analisar meu cenário</CtaLink>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-valozzi-champagne py-10">
          <p className="mx-auto max-w-2xl px-6 lg:px-12 text-center text-xs text-valozzi-black/50">
            Essa sequência representa um processo, não uma garantia de
            resultado — qualquer retorno depende das condições da operação,
            do ativo adquirido, dos custos, do mercado e da execução da
            estratégia.
          </p>
        </section>

        <DiagnosticoForm />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
