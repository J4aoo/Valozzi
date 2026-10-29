import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageHero } from "@/components/PageHero";
import { DiagnosticoForm } from "@/components/sections/DiagnosticoForm";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "Sobre a Valozzi | Estratégia Patrimonial",
  description:
    "A Valozzi nasceu com uma visão simples: decisões patrimoniais precisam ser tomadas com estratégia. Especializados em consórcio como ferramenta de planejamento.",
};

const PERSONAS = [
  {
    title: "Empresário",
    description:
      "Tem capital disponível, fluxo de caixa, capacidade de pagamento e visão de longo prazo. Já construiu capital — agora precisa estruturá-lo para continuar construindo patrimônio.",
  },
  {
    title: "Investidor / Construtor de patrimônio",
    description:
      "Não guarda dinheiro por guardar. Quer que seu capital tenha um objetivo maior — construir patrimônio de forma planejada, não apostar em promessas de enriquecimento rápido.",
  },
];

const PARA_VOCE = [
  "Você pensa em médio e longo prazo.",
  "Tem capacidade financeira para assumir um planejamento.",
  "Quer construir patrimônio.",
  "Está disposto a analisar estratégias diferentes das tradicionais.",
  "Entende que patrimônio é construído com planejamento.",
];

const TALVEZ_NAO = [
  "Precisa de retorno imediato.",
  "Procura uma promessa de rentabilidade garantida.",
  "Não possui capacidade financeira para assumir parcelas.",
  "Está procurando uma solução sem planejamento.",
];

// "Acompanhamento" listado no briefing como possível 4º pilar de autoridade,
// mas pendente de confirmação de que faz parte do serviço antes de publicar.
const PILARES = [
  {
    title: "Estratégia",
    description: "Não começamos pelo produto. Começamos pelo seu objetivo.",
  },
  {
    title: "Planejamento",
    description:
      "Estruturamos a aquisição de acordo com sua capacidade financeira.",
  },
  {
    title: "Transparência",
    description:
      "Você entende custos, regras e condições antes de tomar uma decisão.",
  },
];

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Sobre a Valozzi"
          title="Não vendemos apenas uma cota. Construímos estratégias."
        />

        <section className="vars-light surface-light py-28 lg:py-40">
          <div className="text-muted mx-auto max-w-2xl space-y-6 px-6 text-center text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em] lg:px-12">
            <Reveal>
              <p>
                A Valozzi nasceu com uma visão simples: decisões patrimoniais
                precisam ser tomadas com estratégia.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                Somos especializados em consórcio e trabalhamos para conectar
                objetivos financeiros a estratégias de aquisição patrimonial.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Nosso trabalho começa entendendo o cliente — não oferecendo um
                produto.
              </p>
            </Reveal>
          </div>
          {/* TODO: incluir foto dos fundadores/equipe, história, valores,
             experiência, estrutura e empresas parceiras (material pendente). */}
        </section>

        <section className="vars-dark surface-dark py-28 lg:py-40">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <Reveal>
              <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
                Para quem trabalhamos
              </h2>
            </Reveal>
            <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2">
              {PERSONAS.map((persona) => (
                <StaggerItem key={persona.title} className="h-full">
                  <div className="glass h-full rounded-[1.75rem] p-8">
                    <h3 className="text-headline text-2xl text-valozzi-champagne">
                      {persona.title}
                    </h3>
                    <p className="text-muted mt-4 text-[16px] leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="vars-light surface-champagne py-28 lg:py-40">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <Reveal>
              <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
                A Valozzi é para você se...
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              <StaggerGroup className="glass-thick list-inset overflow-hidden rounded-[1.75rem]" stagger={0.08}>
                {PARA_VOCE.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3.5 px-6 py-4">
                      <span aria-hidden className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-valozzi-black text-[12px] text-valozzi-champagne">✓</span>
                      <span className="text-[16px] font-medium">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <StaggerGroup className="glass list-inset overflow-hidden rounded-[1.75rem] text-valozzi-black/55" stagger={0.08}>
                {TALVEZ_NAO.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3.5 px-6 py-4">
                      <span aria-hidden className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full shadow-[inset_0_0_0_1px_var(--line)] text-[13px]">×</span>
                      <span className="text-[16px]">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </section>

        <section className="vars-light surface-light py-28 lg:py-40">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <Reveal>
              <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
                Por que a Valozzi?
              </h2>
            </Reveal>
            <StaggerGroup className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
              {PILARES.map((pilar) => (
                <StaggerItem key={pilar.title} className="h-full">
                  <div className="glass h-full rounded-[1.75rem] p-7 text-center">
                    <h3 className="text-headline text-xl">{pilar.title}</h3>
                    <p className="text-muted mt-2 text-[15px] leading-relaxed">
                      {pilar.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <DiagnosticoForm />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
