import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const ROWS = [
  { objetivo: "Comprar imóvel agora", possibilidade: "Financiamento / recursos próprios" },
  { objetivo: "Planejar aquisição", possibilidade: "Consórcio" },
  { objetivo: "Construir patrimônio", possibilidade: "Estratégia de aquisição de ativos" },
  { objetivo: "Comprar veículo", possibilidade: "Consórcio / financiamento" },
  { objetivo: "Planejamento de longo prazo", possibilidade: "Análise individual" },
];

export function ComparacaoEstrategica() {
  return (
    <section className="bg-valozzi-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
            Qual caminho faz sentido para o seu objetivo?
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 border border-valozzi-black/10" stagger={0.06}>
          {ROWS.map((row, i) => (
            <StaggerItem key={row.objetivo}>
              <div
                className={`grid sm:grid-cols-2 gap-2 sm:gap-6 px-6 py-5 ${
                  i !== ROWS.length - 1 ? "border-b border-valozzi-black/10" : ""
                }`}
              >
                <p className="font-medium">{row.objetivo}</p>
                <p className="text-valozzi-black/60">{row.possibilidade}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-valozzi-black/50 text-center max-w-xl mx-auto">
            Não existe modalidade universalmente melhor — depende do perfil,
            prazo, custo e objetivo. Por isso a Valozzi começa pela análise
            individual, não pela venda de um produto específico.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
