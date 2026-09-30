import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageHero } from "@/components/PageHero";
import { DiagnosticoForm } from "@/components/sections/DiagnosticoForm";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { CtaLink } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "Consórcio de Imóvel como Estratégia Patrimonial | Valozzi",
  description:
    "Consórcio de imóvel dentro de uma estratégia de aquisição patrimonial — planejamento antes da carta, para quem pensa em construir patrimônio.",
};

const CONSIDERACOES = [
  {
    title: "Objetivo do imóvel",
    description:
      "Uso próprio, investimento ou expansão patrimonial — cada objetivo muda a estratégia.",
  },
  {
    title: "Capacidade de pagamento",
    description:
      "A parcela precisa ser compatível com seu fluxo financeiro ao longo de todo o prazo.",
  },
  {
    title: "Horizonte de planejamento",
    description:
      "Consórcio é uma modalidade de médio/longo prazo — não uma solução para aquisição imediata.",
  },
  {
    title: "Regras de contemplação",
    description:
      "Sorteio ou lance, conforme o grupo e o contrato — nunca uma data garantida.",
  },
];

export default function ConsorcioImovelPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Consórcio de Imóvel"
          title="Adquirir um imóvel também pode ser uma decisão estratégica."
          subtitle="A legislação disciplina a aquisição de imóveis por meio do sistema de consórcios — para quem tem horizonte de médio e longo prazo, ele pode fazer parte de um planejamento patrimonial mais amplo."
        >
          <div className="mt-10">
            <CtaLink href="#diagnostico">Quero analisar meu cenário</CtaLink>
          </div>
        </PageHero>

        <section className="bg-valozzi-offwhite py-28 lg:py-36">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
                O que analisamos antes de falar em carta
              </h2>
            </Reveal>
            <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {CONSIDERACOES.map((item) => (
                <StaggerItem key={item.title}>
                  <h3 className="font-serif text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm text-valozzi-black/60">
                    {item.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="bg-valozzi-champagne py-24 lg:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:px-12 text-center">
            <Reveal>
              <p className="font-serif text-2xl italic leading-relaxed">
                Não começamos perguntando qual imóvel você quer.
                <br />
                Começamos entendendo por que você quer esse imóvel.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-valozzi-black py-10">
          <p className="mx-auto max-w-2xl px-6 lg:px-12 text-center text-xs text-valozzi-offwhite/40">
            O consórcio é uma modalidade de autofinanciamento (Lei nº
            11.795/2008). A contemplação depende de sorteio ou lance,
            conforme as regras do grupo — não há data ou rentabilidade
            garantida.
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
