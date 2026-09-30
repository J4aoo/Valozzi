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
    <section id="cases" className="bg-valozzi-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
            Estratégias reais. Histórias reais.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASES.map((c, i) => (
            <StaggerItem key={i}>
              <div className="h-full border border-valozzi-black/10 p-8 bg-white/40">
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-valozzi-black/50">Objetivo</dt>
                    <dd className="text-right">{c.objetivo}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-valozzi-black/50">Perfil</dt>
                    <dd className="text-right">{c.perfil}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-valozzi-black/50">Estratégia</dt>
                    <dd className="text-right">{c.estrategia}</dd>
                  </div>
                </dl>
                {c.depoimento && (
                  <p className="mt-6 italic text-valozzi-black/70">
                    &ldquo;{c.depoimento}&rdquo;
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-10 text-xs text-valozzi-black/40 max-w-2xl mx-auto text-center">
          {/* Regra fixa de compliance: não usar números de rentabilidade ou
             resultado sem documentação e contexto que os sustentem. */}
          Sem números inventados — apenas clientes reais já existentes.
        </p>
      </div>
    </section>
  );
}
