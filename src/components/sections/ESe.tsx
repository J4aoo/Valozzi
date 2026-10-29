import { CtaLink } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/motion/Reveal";

export function ESe() {
  return (
    <section className="vars-dark surface-dark py-28 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <Reveal>
          <h2 className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-balance">
            E se os próximos 5 anos fossem <span className="text-gold">planejados hoje?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted mx-auto mt-8 max-w-2xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em]">
            Um patrimônio relevante raramente nasce de uma única decisão.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-muted mx-auto mt-4 max-w-2xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em]">
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
