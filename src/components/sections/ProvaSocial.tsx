import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const CASES = [
  {
    objetivo: "Aquisição patrimonial",
    perfil: "Empresário",
    estrategia: "Consórcio",
    depoimento: "[Depoimento real do cliente]",
  },
  {
    objetivo: "Aquisição de imóvel",
    perfil: "[Perfil real]",
    estrategia: "[Informação real]",
    depoimento: "[Depoimento real]",
  },
  {
    objetivo: "[Objetivo]",
    perfil: "[Perfil]",
    estrategia: "[Estratégia]",
    depoimento: null,
  },
];

export function ProvaSocial() {
  return (
    <section id="cases" className="vars-light surface-light scroll-mt-24 py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
            Estratégias reais. Histórias reais.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <StaggerItem key={i} className="h-full">
              <div className="glass flex h-full flex-col rounded-[1.75rem] p-2">
                <dl className="list-inset overflow-hidden rounded-[1.35rem] bg-white/40 text-[15px]">
                  {[
                    ["Objetivo", c.objetivo],
                    ["Perfil", c.perfil],
                    ["Estratégia", c.estrategia],
                  ].map(([rotulo, valor]) => (
                    <div key={rotulo} className="flex justify-between gap-4 px-5 py-3.5">
                      <dt className="text-muted">{rotulo}</dt>
                      <dd className="text-right font-medium">{valor}</dd>
                    </div>
                  ))}
                </dl>
                {c.depoimento && (
                  <p className="px-5 pb-5 pt-5 font-serif text-lg italic text-valozzi-black/75">
                    &ldquo;{c.depoimento}&rdquo;
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="text-subtle mx-auto mt-10 max-w-2xl text-center text-[12px]">
          {/* Regra fixa de compliance: não usar números de rentabilidade ou
             resultado sem documentação e contexto que os sustentem. */}
          Sem números inventados — apenas clientes reais já existentes.
        </p>
      </div>
    </section>
  );
}
