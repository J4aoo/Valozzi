import { CtaLink } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/motion/Reveal";

export function QuebraParadigma() {
  return (
    <section id="estrategia" className="bg-valozzi-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-[-0.015em] text-balance">
            Você não precisa de mais um produto financeiro.
            <br />
            Precisa de uma estratégia.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-valozzi-black/70 max-w-2xl mx-auto">
            Antes de falar sobre carta de crédito, parcela ou contemplação,
            precisamos entender onde você está e onde pretende chegar.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 text-lg text-valozzi-black/70 max-w-2xl mx-auto">
            A Valozzi trabalha com consórcio como parte de uma estratégia de
            aquisição patrimonial, considerando objetivo, capacidade
            financeira, prazo e cenário individual.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <CtaLink href="#diagnostico" variant="outline" className="text-valozzi-black border-valozzi-black/40 hover:border-valozzi-gold">
              Quero entender minha estratégia
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
