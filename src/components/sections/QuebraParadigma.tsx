import { CtaLink } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/motion/Reveal";

export function QuebraParadigma() {
  return (
    <section id="estrategia" className="vars-light surface-light scroll-mt-24 py-28 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <Reveal>
          <h2 className="text-display text-[clamp(2.25rem,5.5vw,4rem)] text-balance">
            Você não precisa de mais um produto financeiro.
            <br />
            <span className="text-gold">Precisa de uma estratégia.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted mx-auto mt-8 max-w-2xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em]">
            Antes de falar sobre carta de crédito, parcela ou contemplação,
            precisamos entender onde você está e onde pretende chegar.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-muted mx-auto mt-4 max-w-2xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em]">
            A Valozzi trabalha com consórcio como parte de uma estratégia de
            aquisição patrimonial, considerando objetivo, capacidade
            financeira, prazo e cenário individual.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <CtaLink href="#diagnostico" variant="outline">
              Quero entender minha estratégia
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
