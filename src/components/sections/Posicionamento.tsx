import { Reveal } from "@/components/motion/Reveal";

export function Posicionamento() {
  return (
    <section id="consorcio" className="bg-valozzi-champagne py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-[-0.015em] text-balance">
            Consórcio para quem pensa em patrimônio.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-valozzi-black/80">
            O consórcio é uma modalidade de autofinanciamento regulamentada
            pela Lei nº 11.795/2008.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 text-lg text-valozzi-black/80">
            Para determinados perfis e objetivos, ele pode fazer parte de um
            planejamento de aquisição de bens e construção patrimonial.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 font-serif text-xl italic">
            Não começamos pela carta.
            <br />
            Começamos pelo objetivo.
          </p>
        </Reveal>

        <p className="mt-8 text-xs text-valozzi-black/50">
          Fonte: Lei nº 11.795/2008 (Presidência da República).
        </p>
      </div>
    </section>
  );
}
