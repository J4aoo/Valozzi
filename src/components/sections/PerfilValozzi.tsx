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
    <section className="vars-light surface-champagne py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <Reveal>
          <h2 className="text-title text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
            A Valozzi não é para todo mundo.
            <br />É para quem pensa assim:
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <StaggerGroup className="glass-thick list-inset mx-auto mt-12 max-w-xl overflow-hidden rounded-[1.75rem] text-left" stagger={0.08}>
            {BELIEFS.map((belief) => (
              <StaggerItem key={belief}>
                <div className="flex items-start gap-4 px-6 py-4.5">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-valozzi-black text-[12px] text-valozzi-champagne"
                  >
                    ✓
                  </span>
                  <span className="font-serif text-lg italic text-valozzi-black/85">&ldquo;{belief}&rdquo;</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-headline mt-12 text-xl">Se você pensa assim, precisamos conversar.</p>
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
