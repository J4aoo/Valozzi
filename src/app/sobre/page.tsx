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

        <section className="bg-valozzi-offwhite py-28 lg:py-36">
          <div className="mx-auto max-w-2xl px-6 lg:px-12 text-center space-y-6 text-lg text-valozzi-black/70">
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

        <section className="bg-valozzi-black text-valozzi-offwhite py-28 lg:py-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
                Para quem trabalhamos
              </h2>
            </Reveal>
            <StaggerGroup className="mt-16 grid sm:grid-cols-2 gap-10">
              {PERSONAS.map((persona) => (
                <StaggerItem key={persona.title}>
                  <div className="h-full border border-valozzi-gold/20 p-8">
                    <h3 className="font-serif text-xl text-valozzi-gold">
                      {persona.title}
                    </h3>
                    <p className="mt-4 text-sm text-valozzi-offwhite/70 leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="bg-valozzi-champagne py-28 lg:py-36">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
                A Valozzi é para você se...
              </h2>
            </Reveal>
            <div className="mt-14 grid sm:grid-cols-2 gap-10">
              <StaggerGroup className="space-y-4" stagger={0.08}>
                {PARA_VOCE.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <span className="text-valozzi-black/70">✓</span>
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <StaggerGroup className="space-y-4 text-valozzi-black/50" stagger={0.08}>
                {TALVEZ_NAO.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <span>×</span>
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </section>

        <section className="bg-valozzi-offwhite py-28 lg:py-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
                Por que a Valozzi?
              </h2>
            </Reveal>
            <StaggerGroup className="mt-16 grid sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
              {PILARES.map((pilar) => (
                <StaggerItem key={pilar.title}>
                  <div className="text-center">
                    <h3 className="font-serif text-lg">{pilar.title}</h3>
                    <p className="mt-2 text-sm text-valozzi-black/60">
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
