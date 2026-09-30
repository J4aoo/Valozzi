import { CtaLink } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/motion/Reveal";

export function CTAFinal() {
  return (
    <section className="bg-valozzi-black text-valozzi-offwhite py-32 lg:py-40">
      <div className="mx-auto max-w-2xl px-6 lg:px-12 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-[-0.02em] text-balance">
            Patrimônio não se constrói no impulso.
            <br />
            Se constrói com estratégia.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-valozzi-offwhite/70 text-lg">
            Descubra se o consórcio pode fazer parte do seu próximo movimento
            patrimonial.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10">
            <CtaLink href="#diagnostico">Conhecer minha estratégia</CtaLink>
            <p className="mt-4 text-xs text-valozzi-offwhite/50 italic">
              Atendimento personalizado pelo WhatsApp.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
