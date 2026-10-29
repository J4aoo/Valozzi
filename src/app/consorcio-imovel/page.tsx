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

        <section className="vars-light surface-light py-28 lg:py-40">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <Reveal>
              <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
                O que analisamos antes de falar em carta
              </h2>
            </Reveal>
            <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CONSIDERACOES.map((item) => (
                <StaggerItem key={item.title} className="h-full">
                  <div className="glass h-full rounded-[1.75rem] p-7">
                    <h3 className="text-headline text-xl">{item.title}</h3>
                    <p className="text-muted mt-3 text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="vars-light surface-champagne py-24 lg:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:px-12 text-center">
            <Reveal>
              <p className="glass rounded-[1.75rem] px-8 py-10 font-serif text-[clamp(1.375rem,3vw,1.875rem)] italic leading-relaxed">
                Não começamos perguntando qual imóvel você quer.
                <br />
                Começamos entendendo por que você quer esse imóvel.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="vars-dark surface-dark py-10">
          <p className="mx-auto max-w-2xl px-6 lg:px-12 text-center text-[12px] leading-relaxed text-subtle">
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
