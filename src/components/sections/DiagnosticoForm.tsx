"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaLink } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/motion/Reveal";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { springs } from "@/lib/motion";

type Answers = {
  objetivo: string;
  horizonte: string;
  parcela: string;
  patrimonio: string[];
  nome: string;
  whatsapp: string;
};

const EMPTY_ANSWERS: Answers = {
  objetivo: "",
  horizonte: "",
  parcela: "",
  patrimonio: [],
  nome: "",
  whatsapp: "",
};

const OBJETIVO_OPTIONS = [
  "Adquirir imóvel",
  "Aumentar patrimônio",
  "Adquirir ativos",
  "Estruturar uma estratégia de longo prazo",
];

const HORIZONTE_OPTIONS = ["Até 2 anos", "3 a 5 anos", "5 a 10 anos", "Ainda estou avaliando"];

const PARCELA_OPTIONS = [
  "Até R$ 2.000",
  "R$ 2.000 – R$ 5.000",
  "R$ 5.000 – R$ 10.000",
  "Acima de R$ 10.000",
];

const PATRIMONIO_OPTIONS = ["Imóveis", "Empresa", "Investimentos", "Veículos", "Outros"];

const TOTAL_STEPS = 5;

function OptionButton({
  option,
  selected,
  onSelect,
}: {
  option: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      whileTap={{ scale: 0.97 }}
      transition={springs.press}
      className={`flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left text-[16px] transition-colors duration-200 ${
        selected
          ? "bg-valozzi-gold/20 text-valozzi-offwhite shadow-[inset_0_0_0_1.5px_var(--color-valozzi-gold)]"
          : "bg-white/[0.04] text-valozzi-offwhite/80 shadow-[inset_0_0_0_1px_var(--line)] hover:bg-white/[0.07]"
      }`}
    >
      {option}
      <span
        aria-hidden
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] transition-all duration-200 ${
          selected
            ? "scale-100 bg-gradient-to-b from-valozzi-champagne to-valozzi-gold text-valozzi-black"
            : "scale-90 shadow-[inset_0_0_0_1px_var(--line)] text-transparent"
        }`}
      >
        ✓
      </span>
    </motion.button>
  );
}

function OptionList({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {options.map((option) => (
        <OptionButton
          key={option}
          option={option}
          selected={selected === option}
          onSelect={() => onSelect(option)}
        />
      ))}
    </div>
  );
}

const stepVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

export function DiagnosticoForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [submitted, setSubmitted] = useState(false);

  const message = useMemo(() => {
    const lines = [
      "Olá, Valozzi. Acabei de realizar o Diagnóstico Patrimonial e gostaria de conversar sobre uma estratégia de consórcio para o meu objetivo.",
      "",
      `Nome: ${answers.nome}`,
      `Objetivo: ${answers.objetivo}`,
      `Horizonte de planejamento: ${answers.horizonte}`,
      `Parcela confortável: ${answers.parcela}`,
      `Patrimônio atual: ${answers.patrimonio.join(", ") || "não informado"}`,
    ];
    return lines.join("\n");
  }, [answers]);

  function togglePatrimonio(option: string) {
    setAnswers((prev) => ({
      ...prev,
      patrimonio: prev.patrimonio.includes(option)
        ? prev.patrimonio.filter((item) => item !== option)
        : [...prev.patrimonio, option],
    }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const canAdvance = [
    Boolean(answers.objetivo),
    Boolean(answers.horizonte),
    Boolean(answers.parcela),
    answers.patrimonio.length > 0,
  ];

  return (
    <section id="diagnostico" className="vars-dark surface-dark scroll-mt-24 py-28 lg:py-40">
      <div className="glass-thick mx-auto max-w-2xl rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Reveal>
                <Eyebrow>Diagnóstico Patrimonial Valozzi</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-title mt-3 text-[clamp(1.875rem,4vw,2.75rem)] text-balance">
                  Qual estratégia faz sentido para o seu momento?
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted mt-4 text-[17px] leading-relaxed">
                  Responda algumas perguntas. Em poucos minutos, você poderá
                  iniciar uma conversa personalizada com um especialista.
                </p>
              </Reveal>

              <div className="mt-8 flex gap-2">
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                  <span key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
                    <motion.span
                      className="block h-full origin-left rounded-full bg-gradient-to-r from-valozzi-gold to-valozzi-champagne"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: i <= step ? 1 : 0 }}
                      transition={springs.snappy}
                    />
                  </span>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-10 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  {step === 0 && (
                    <motion.div
                      key="step-0"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={springs.snappy}
                    >
                      <p className="text-headline mb-5 text-xl">Qual é seu principal objetivo?</p>
                      <OptionList
                        options={OBJETIVO_OPTIONS}
                        selected={answers.objetivo}
                        onSelect={(objetivo) => {
                          setAnswers((prev) => ({ ...prev, objetivo }));
                          next();
                        }}
                      />
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={springs.snappy}
                    >
                      <p className="text-headline mb-5 text-xl">
                        Qual é seu horizonte de planejamento?
                      </p>
                      <OptionList
                        options={HORIZONTE_OPTIONS}
                        selected={answers.horizonte}
                        onSelect={(horizonte) => {
                          setAnswers((prev) => ({ ...prev, horizonte }));
                          next();
                        }}
                      />
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={springs.snappy}
                    >
                      <p className="text-headline mb-5 text-xl">
                        Qual faixa de parcela mensal você considera confortável?
                      </p>
                      <OptionList
                        options={PARCELA_OPTIONS}
                        selected={answers.parcela}
                        onSelect={(parcela) => {
                          setAnswers((prev) => ({ ...prev, parcela }));
                          next();
                        }}
                      />
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={springs.snappy}
                    >
                      <p className="text-headline mb-5 text-xl">
                        Você já possui patrimônio? (selecione uma ou mais opções)
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {PATRIMONIO_OPTIONS.map((option) => (
                          <OptionButton
                            key={option}
                            option={option}
                            selected={answers.patrimonio.includes(option)}
                            onSelect={() => togglePatrimonio(option)}
                          />
                        ))}
                      </div>
                      <motion.button
                        type="button"
                        onClick={next}
                        disabled={!canAdvance[3]}
                        whileTap={canAdvance[3] ? { scale: 0.97 } : undefined}
                        transition={springs.press}
                        className="btn btn-gold mt-8"
                      >
                        Continuar
                      </motion.button>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step-4"
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={springs.snappy}
                    >
                      <p className="text-headline mb-5 text-xl">Últimos dados</p>
                      <div className="space-y-4">
                        <input
                          required
                          type="text"
                          placeholder="Nome"
                          value={answers.nome}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, nome: e.target.value }))
                          }
                          className="field"
                        />
                        <input
                          required
                          type="tel"
                          placeholder="WhatsApp"
                          value={answers.whatsapp}
                          onChange={(e) =>
                            setAnswers((prev) => ({ ...prev, whatsapp: e.target.value }))
                          }
                          className="field"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileTap={{ scale: 0.97 }}
                        transition={springs.press}
                        className="btn btn-gold mt-8 w-full sm:w-auto"
                      >
                        Receber orientação
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {step > 0 && (
                  <button
                    type="button"
                    onClick={back}
                    className="mt-6 inline-flex items-center gap-1 text-[15px] text-valozzi-gold transition-opacity hover:opacity-80"
                  >
                    <span aria-hidden>‹</span> Voltar
                  </button>
                )}
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springs.default}
              className="text-center"
            >
              <motion.span
                aria-hidden
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ ...springs.momentum, delay: 0.1 }}
                className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-valozzi-champagne to-valozzi-gold text-2xl text-valozzi-black shadow-[0_12px_36px_-10px_rgba(165,155,117,0.8)]"
              >
                ✓
              </motion.span>
              <h2 className="text-title text-[clamp(1.875rem,4vw,2.75rem)] text-balance">
                Seu próximo passo começa agora.
              </h2>
              <p className="text-muted mt-6 text-[17px]">
                Envie suas informações e fale diretamente com um especialista
                Valozzi.
              </p>
              <div className="mt-10">
                <CtaLink href={buildWhatsAppLink(message)}>Abrir WhatsApp</CtaLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
