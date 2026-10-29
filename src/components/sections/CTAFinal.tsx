import { CtaLink } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/motion/Reveal";

export function CTAFinal() {
  return (
    <section className="vars-dark surface-dark px-4 py-24 lg:py-32">
      <Reveal className="mx-auto max-w-6xl">
        <div className="glass-thick rounded-[2.5rem] px-6 py-20 text-center sm:py-28">
          {/* eslint-disable-next-line @next/next/no-img-element -- marca estática */}
          <img src="/brand/mark.jpg" alt="" className="mx-auto h-16 w-16 rounded-full object-cover" />
          <h2 className="text-display mx-auto mt-8 max-w-3xl text-[clamp(2.25rem,5.5vw,4rem)] text-balance">
            Patrimônio não se constrói no impulso.
            <br />
            <span className="text-gold">Se constrói com estratégia.</span>
          </h2>

          <p className="text-muted mx-auto mt-6 max-w-xl text-[clamp(1.0625rem,1.8vw,1.25rem)] leading-snug">
            Descubra se o consórcio pode fazer parte do seu próximo movimento
            patrimonial.
          </p>

          <div className="mt-10">
            <CtaLink href="#diagnostico">Conhecer minha estratégia</CtaLink>
            <p className="text-subtle mt-4 text-[13px]">Atendimento personalizado pelo WhatsApp.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
