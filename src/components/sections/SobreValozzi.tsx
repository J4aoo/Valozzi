import { Reveal } from "@/components/motion/Reveal";

export function SobreValozzi() {
  return (
    <section id="sobre" className="bg-valozzi-black text-valozzi-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-[-0.015em] text-balance">
            Não vendemos apenas uma cota.
            <br />
            Construímos estratégias.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-valozzi-offwhite/70 text-lg">
            A Valozzi nasceu com uma visão simples: decisões patrimoniais
            precisam ser tomadas com estratégia.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-valozzi-offwhite/70 text-lg">
            Somos especializados em consórcio e trabalhamos para conectar
            objetivos financeiros a estratégias de aquisição patrimonial.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-valozzi-offwhite/70 text-lg">
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
