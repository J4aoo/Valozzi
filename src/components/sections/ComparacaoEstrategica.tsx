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
    <section className="vars-light surface-light py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <Reveal>
          <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
            Qual caminho faz sentido para o seu objetivo?
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass-thick mt-14 overflow-hidden rounded-[1.75rem]">
            <div className="text-subtle hidden grid-cols-2 gap-6 px-6 pb-2 pt-5 text-[13px] font-semibold sm:grid">
              <span>Objetivo</span>
              <span>Possibilidade</span>
            </div>
            <StaggerGroup className="list-inset" stagger={0.06}>
              {ROWS.map((row) => (
                <StaggerItem key={row.objetivo}>
                  <div className="grid gap-1 px-6 py-4.5 sm:grid-cols-2 sm:gap-6">
                    <p className="font-semibold tracking-[-0.01em]">{row.objetivo}</p>
                    <p className="text-muted">{row.possibilidade}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted mx-auto mt-8 max-w-xl text-center text-[15px]">
            Não existe modalidade universalmente melhor — depende do perfil,
            prazo, custo e objetivo. Por isso a Valozzi começa pela análise
            individual, não pela venda de um produto específico.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
