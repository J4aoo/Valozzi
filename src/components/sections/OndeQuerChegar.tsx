"use client";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { spotlight } from "@/lib/spotlight";

const CARDS = [
  {
    number: "01",
    title: "Aumentar meu patrimônio",
    description:
      "Quero utilizar uma estratégia planejada para adquirir novos ativos.",
  },
  {
    number: "02",
    title: "Adquirir um imóvel",
    description:
      "Quero comprar um imóvel para uso próprio ou dentro de uma estratégia patrimonial.",
  },
  {
    number: "03",
    title: "Estruturar capital",
    description:
      "Tenho capital e quero entender como utilizá-lo de maneira estratégica.",
  },
  {
    number: "04",
    title: "Planejar os próximos 5 anos",
    description:
      "Quero construir uma estratégia patrimonial com horizonte de médio prazo.",
  },
];

export function OndeQuerChegar() {
  return (
    <section id="patrimonio" className="vars-dark surface-dark scroll-mt-24 py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-title mx-auto max-w-3xl text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
            Qual é o próximo movimento do seu patrimônio?
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <StaggerItem key={card.number} className="h-full">
              <a
                href="#diagnostico"
                onPointerMove={spotlight}
                className="glass glass-spotlight group flex h-full flex-col justify-between rounded-[1.75rem] p-7 transition-transform duration-300 ease-out hover:-translate-y-1 active:scale-[0.98]"
              >
                <div>
                  <span className="inline-flex h-8 items-center rounded-full bg-valozzi-gold/15 px-3 text-[13px] font-semibold tabular-nums text-valozzi-champagne">
                    {card.number}
                  </span>
                  <h3 className="text-headline mt-6 text-[1.375rem]">{card.title}</h3>
                  <p className="text-muted mt-3 text-[15px] leading-relaxed">{card.description}</p>
                </div>
                <p className="mt-8 inline-flex items-center gap-1 text-[15px] font-medium text-valozzi-gold">
                  Explorar
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                    ›
                  </span>
                </p>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
