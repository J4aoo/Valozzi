import { Reveal } from "@/components/motion/Reveal";

export function SobreValozzi() {
  return (
    <section id="sobre" className="vars-dark surface-dark scroll-mt-24 py-28 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <Reveal>
          <h2 className="text-display text-[clamp(2.25rem,5.5vw,4rem)] text-balance">
            Não vendemos apenas uma cota.
            <br />
            <span className="text-gold">Construímos estratégias.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted mx-auto mt-8 max-w-2xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em]">
            A Valozzi nasceu com uma visão simples: decisões patrimoniais
            precisam ser tomadas com estratégia.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-muted mx-auto mt-4 max-w-2xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em]">
            Somos especializados em consórcio e trabalhamos para conectar
            objetivos financeiros a estratégias de aquisição patrimonial.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-muted mx-auto mt-4 max-w-2xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em]">
            Nosso trabalho começa entendendo o cliente — não oferecendo um
            produto.
          </p>
        </Reveal>

        {/* TODO: foto dos fundadores/equipe, história, valores, experiência,
           estrutura e empresas parceiras (material pendente do cliente). */}
      </div>
    </section>
  );
}
