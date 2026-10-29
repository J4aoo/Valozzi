import { Reveal } from "@/components/motion/Reveal";

export function Posicionamento() {
  return (
    <section id="consorcio" className="vars-light surface-champagne scroll-mt-24 py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <Reveal>
          <h2 className="text-title text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
            Consórcio para quem pensa em patrimônio.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-[clamp(1.0625rem,1.8vw,1.25rem)] leading-snug text-valozzi-black/80">
            O consórcio é uma modalidade de autofinanciamento regulamentada
            pela Lei nº 11.795/2008.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 text-[clamp(1.0625rem,1.8vw,1.25rem)] leading-snug text-valozzi-black/80">
            Para determinados perfis e objetivos, ele pode fazer parte de um
            planejamento de aquisição de bens e construção patrimonial.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass mx-auto mt-12 max-w-md rounded-[1.75rem] px-8 py-7">
            <p className="font-serif text-2xl italic leading-snug">
              Não começamos pela carta.
              <br />
              Começamos pelo objetivo.
            </p>
          </div>
        </Reveal>

        <p className="mt-8 text-[12px] text-valozzi-black/50">
          Fonte: Lei nº 11.795/2008 (Presidência da República).
        </p>
      </div>
    </section>
  );
}
