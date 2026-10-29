import { CtaLink } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export function AlavancagemPatrimonial() {
  return (
    <section className="vars-dark surface-dark py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <Reveal>
          <Eyebrow>Patrimônio</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-display mt-3 text-[clamp(2.25rem,5.5vw,4rem)] text-balance">
            Alavancar não é arriscar.
            <br />
            <span className="text-gold">É estruturar.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted mx-auto mt-8 max-w-2xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em]">
            Alavancagem patrimonial não significa simplesmente assumir mais
            crédito. Significa estruturar recursos, capacidade de
            pagamento, ativos e prazo de maneira coerente com seus
            objetivos.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-muted mx-auto mt-4 max-w-2xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em]">
            É por isso que uma estratégia precisa vir antes da contratação.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <CtaLink href="#diagnostico">Quero analisar meu cenário</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
