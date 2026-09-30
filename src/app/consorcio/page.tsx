import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageHero } from "@/components/PageHero";
import { DiagnosticoForm } from "@/components/sections/DiagnosticoForm";
import { ComparacaoEstrategica } from "@/components/sections/ComparacaoEstrategica";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { CtaLink } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "Consórcio como Estratégia Patrimonial | Valozzi",
  description:
    "Consórcio não precisa ser apenas uma compra. Pode fazer parte de uma estratégia patrimonial. Entenda como funciona e para quem faz sentido.",
};

const COMO_FUNCIONA = [
  "Você define seu objetivo",
  "Escolhe uma carta adequada",
  "Planeja suas parcelas",
  "Participa do grupo",
  "Quando contemplado, utiliza o crédito conforme as regras da modalidade",
];

const PARA_QUEM = [
  "Aquisição de imóvel",
  "Aquisição de veículo",
  "Construção",
  "Investimento imobiliário",
  "Planejamento patrimonial",
];

const PILARES = [
  {
    title: "Planejamento",
    description: "Organização da aquisição ao longo do tempo.",
  },
  {
    title: "Poder de compra",
    description:
      "A carta de crédito pode permitir planejar uma aquisição de maior valor.",
  },
  {
    title: "Disciplina patrimonial",
    description:
      "Transformar uma parcela planejada em compromisso de construção patrimonial.",
  },
  {
    title: "Estratégia",
    description:
      "O consórcio pode ser analisado junto ao restante do patrimônio e do fluxo financeiro.",
  },
];

export default function ConsorcioPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Consórcio"
          title="Consórcio não precisa ser apenas uma compra. Pode fazer parte de uma estratégia patrimonial."
        >
          <div className="mt-10">
            <CtaLink href="#diagnostico">Quero entender minha estratégia</CtaLink>
          </div>
        </PageHero>

        <section id="como-funciona" className="bg-valozzi-offwhite py-28 lg:py-36">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
                Como funciona
              </h2>
            </Reveal>
            <StaggerGroup className="mt-14 space-y-6" stagger={0.08}>
              {COMO_FUNCIONA.map((item, i) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-xl text-valozzi-gold">{`0${i + 1}`}</span>
                    <span className="text-lg pt-0.5">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="bg-valozzi-black text-valozzi-offwhite py-28 lg:py-36">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
                Para quem faz sentido
              </h2>
            </Reveal>
            <StaggerGroup className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-xl mx-auto">
              {PARA_QUEM.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-3 text-lg">
                    <span className="text-valozzi-gold">—</span>
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="bg-valozzi-champagne py-28 lg:py-36">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
                Por que consórcio?
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 text-center text-valozzi-black/70 max-w-2xl mx-auto">
                Consórcio não é apenas uma forma de comprar. É uma modalidade
                que pode fazer parte de uma estratégia patrimonial, dependendo
                do perfil e objetivo.
              </p>
            </Reveal>
            <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PILARES.map((pilar) => (
                <StaggerItem key={pilar.title}>
                  <h3 className="font-serif text-xl">{pilar.title}</h3>
                  <p className="mt-3 text-sm text-valozzi-black/60">
                    {pilar.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <ComparacaoEstrategica />

        <section className="bg-valozzi-black py-10">
          <p className="mx-auto max-w-2xl px-6 lg:px-12 text-center text-xs text-valozzi-offwhite/40">
            O consórcio é uma modalidade de autofinanciamento regulamentada
            pela Lei nº 11.795/2008. Não prometemos rentabilidade,
            contemplação ou resultados garantidos em nenhum ponto deste
            site.
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
