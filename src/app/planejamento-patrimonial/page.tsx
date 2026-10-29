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

        <section className="vars-light surface-light py-28 lg:py-40">
          <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
            <Reveal>
              <Eyebrow className="justify-center flex">Definição</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-title mt-6 text-[clamp(1.5rem,3.4vw,2.25rem)] leading-snug text-balance">
                Alavancagem patrimonial é a utilização planejada de recursos,
                crédito e ativos para ampliar a capacidade de construção de
                patrimônio — sempre considerando riscos, custos, prazo e
                capacidade financeira.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="vars-dark surface-dark py-28 lg:py-40">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <Reveal>
              <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
                Alavancar não é arriscar. É estruturar.
              </h2>
            </Reveal>

            <StaggerGroup
              className="mt-16 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-3"
              stagger={0.1}
            >
              {FLOW.map((step, i) => (
                <StaggerItem key={step}>
                  <div className="flex items-center gap-4">
                    <span className="glass flex h-12 items-center justify-center rounded-full px-5 text-[17px] font-semibold tracking-[-0.01em]">
                      {step}
                    </span>
                    {i < FLOW.length - 1 && (
                      <span className="text-valozzi-gold text-xl rotate-90 sm:rotate-0" aria-hidden>›</span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal delay={0.1}>
              <p className="text-muted mx-auto mt-16 max-w-2xl text-center text-[17px] leading-relaxed">
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

        <section className="vars-light surface-champagne py-10">
          <p className="mx-auto max-w-2xl px-6 lg:px-12 text-center text-[12px] leading-relaxed text-subtle">
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
