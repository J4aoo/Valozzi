import { CtaLink } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/motion/Reveal";

export function ESe() {
  return (
    <section className="bg-valozzi-black text-valozzi-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-[-0.02em] text-balance">
            E se os próximos 5 anos fossem planejados hoje?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-valozzi-offwhite/70 text-lg">
            Um patrimônio relevante raramente nasce de uma única decisão.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-valozzi-offwhite/70 text-lg">
            Ele é construído por uma sequência de decisões coerentes ao longo
            do tempo. O primeiro passo é entender quais possibilidades existem
            para o seu cenário.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <CtaLink href="#diagnostico">Começar minha análise</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
