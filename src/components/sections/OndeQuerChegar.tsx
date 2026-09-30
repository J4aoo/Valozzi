"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { springs } from "@/lib/motion";

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
    <section id="patrimonio" className="bg-valozzi-black text-valozzi-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl text-center tracking-[-0.015em] text-balance">
            Qual é o próximo movimento do seu patrimônio?
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <StaggerItem key={card.number}>
              <motion.a
                href="#diagnostico"
                whileHover={{ y: -6, borderColor: "var(--color-valozzi-gold)" }}
                whileTap={{ scale: 0.98 }}
                transition={springs.momentum}
                className="group h-full border border-valozzi-gold/20 p-8 flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm text-valozzi-gold">{card.number}</p>
                  <h3 className="mt-4 font-serif text-xl">{card.title}</h3>
                  <p className="mt-3 text-sm text-valozzi-offwhite/60">
                    {card.description}
                  </p>
                </div>
                <p className="mt-8 text-xs tracking-[0.2em] uppercase text-valozzi-gold group-hover:underline">
                  Explorar
                </p>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
