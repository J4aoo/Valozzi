"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { springs } from "@/lib/motion";

const FAQ_ITEMS = [
  {
    question: "Consórcio é investimento?",
    answer:
      "Consórcio é uma modalidade de autofinanciamento destinada à aquisição de bens ou serviços, não um investimento financeiro com rentabilidade garantida. A estratégia patrimonial pode utilizar o consórcio como uma das ferramentas, dependendo do objetivo e do perfil do cliente. (fonte: Presidência da República)",
  },
  {
    question: "Existe garantia de contemplação?",
    answer:
      "Não. A contemplação ocorre por sorteio ou lance, conforme as regras do grupo e do contrato. (fonte: Presidência da República)",
  },
  {
    question: "Posso utilizar consórcio para imóvel?",
    answer:
      "Sim. O sistema de consórcios contempla aquisição de bens e serviços dentro das categorias e condições previstas no contrato. A legislação também disciplina a aquisição de imóveis por meio do sistema. (fonte: Presidência da República)",
  },
  {
    question: "Posso antecipar a contemplação?",
    answer:
      "A possibilidade de lance existe, mas sua efetividade depende das regras do grupo e das condições aplicáveis. Não devemos prometer uma data de contemplação. (fonte: Normativos BCB)",
  },
  {
    question: "Existe taxa de administração?",
    answer:
      "Sim. A legislação prevê a remuneração da administradora por meio de taxa de administração, conforme as condições estabelecidas no contrato. (fonte: Presidência da República)",
  },
  {
    question: "A Valozzi garante retorno em 5 anos?",
    answer:
      "Não. O horizonte de cinco anos pode ser utilizado como referência de planejamento, mas qualquer resultado depende das condições da operação, do ativo adquirido, dos custos, do mercado e da execução da estratégia.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-[17px] font-semibold tracking-[-0.01em] transition-colors hover:bg-[var(--g-hover)]"
      >
        {question}
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={springs.snappy}
          className="shrink-0 text-xl leading-none text-valozzi-gold"
          aria-hidden
        >
          ›
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={springs.snappy}
            className="overflow-hidden"
          >
            <p className="text-muted px-6 pb-6 pr-10 text-[15px] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="vars-light surface-champagne py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <Reveal>
          <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
            Perguntas frequentes
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-thick list-inset mt-14 overflow-hidden rounded-[1.75rem]">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
