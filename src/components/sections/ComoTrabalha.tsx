import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const STEPS = [
  {
    number: "01",
    title: "Entendemos",
    description: "Seu objetivo, momento financeiro e horizonte de planejamento.",
  },
  {
    number: "02",
    title: "Estruturamos",
    description:
      "Analisamos uma estratégia compatível com sua capacidade financeira e objetivo.",
  },
  {
    number: "03",
    title: "Apresentamos",
    description:
      "Mostramos as possibilidades de consórcio que podem fazer sentido para o cenário analisado.",
  },
  {
    number: "04",
    title: "Acompanhamos",
    description:
      "Você entende as etapas e as condições da operação ao longo da jornada.",
  },
];

export function ComoTrabalha() {
  return (
    <section className="bg-valozzi-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
            Antes da cota, vem a estratégia.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {STEPS.map((step) => (
            <StaggerItem key={step.number}>
              <p className="font-serif text-4xl text-valozzi-gold">{step.number}</p>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm text-valozzi-black/60">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-16 text-xs text-valozzi-black/40 max-w-2xl">
          A contemplação não é apresentada como automática ou garantida: a
          legislação prevê sorteio ou lance, de acordo com as regras do
          grupo.
        </p>
      </div>
    </section>
  );
}
