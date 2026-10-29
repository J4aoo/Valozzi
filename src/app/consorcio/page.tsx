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

        <section id="como-funciona" className="vars-light surface-light py-28 lg:py-40">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <Reveal>
              <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
                Como funciona
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <StaggerGroup className="glass-thick list-inset mt-14 overflow-hidden rounded-[1.75rem]" stagger={0.08}>
                {COMO_FUNCIONA.map((item, i) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-5 px-6 py-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-valozzi-black text-[13px] font-semibold tabular-nums text-valozzi-champagne">{`0${i + 1}`}</span>
                      <span className="text-[17px] font-medium tracking-[-0.01em]">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>
        </section>

        <section className="vars-dark surface-dark py-28 lg:py-40">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <Reveal>
              <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
                Para quem faz sentido
              </h2>
            </Reveal>
            <StaggerGroup className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-3">
              {PARA_QUEM.map((item) => (
                <StaggerItem key={item}>
                  <div className="glass flex items-center gap-2.5 rounded-full px-5 py-3 text-[17px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-valozzi-gold" aria-hidden />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="vars-light surface-champagne py-28 lg:py-40">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <Reveal>
              <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
                Por que consórcio?
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-muted mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed">
                Consórcio não é apenas uma forma de comprar. É uma modalidade
                que pode fazer parte de uma estratégia patrimonial, dependendo
                do perfil e objetivo.
              </p>
            </Reveal>
            <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PILARES.map((pilar) => (
                <StaggerItem key={pilar.title} className="h-full">
                  <div className="glass h-full rounded-[1.75rem] p-7">
                    <h3 className="text-headline text-xl">{pilar.title}</h3>
                    <p className="text-muted mt-3 text-[15px] leading-relaxed">
                      {pilar.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <ComparacaoEstrategica />

        <section className="vars-dark surface-dark py-10">
          <p className="mx-auto max-w-2xl px-6 lg:px-12 text-center text-[12px] leading-relaxed text-subtle">
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
