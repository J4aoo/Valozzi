import { CtaLink } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const BELIEFS = [
  "Eu quero construir patrimônio.",
  "Estou disposto a pensar no médio e longo prazo.",
  "Quero entender estratégias antes de tomar decisões.",
  "Tenho capacidade financeira para assumir um planejamento.",
  "Não estou procurando uma promessa de dinheiro rápido.",
];

export function PerfilValozzi() {
  return (
    <section className="bg-valozzi-champagne py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-[-0.015em] text-balance">
            A Valozzi não é para todo mundo.
            <br />É para quem pensa assim:
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 space-y-4 text-left mx-auto max-w-xl" stagger={0.1}>
          {BELIEFS.map((belief) => (
            <StaggerItem key={belief}>
              <div className="flex items-start gap-3 text-lg">
                <span className="text-valozzi-gold mt-1">—</span>
                <span className="italic text-valozzi-black/80">&ldquo;{belief}&rdquo;</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-12 text-lg">Se você pensa assim, precisamos conversar.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8">
            <CtaLink href="#diagnostico">Falar com especialista</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
