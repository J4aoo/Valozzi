"use client";

import { useRef } from "react";
import { motion, useTransform, type MotionValue } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { faixa, useReducedMotionSafe, useStageProgress } from "@/components/motion/ScrollStage";

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

const N = STEPS.length;

const AVISO =
  "A contemplação não é apresentada como automática ou garantida: a legislação prevê sorteio ou lance, de acordo com as regras do grupo.";

/* ------------------------------------------------------------------
   Ilustrações em traço fino, desenhadas pelo scroll. Abstratas de
   propósito: mostram o processo (objetivo, estrutura, proposta, jornada),
   nunca valores, gráficos de alta ou qualquer promessa de resultado.
   ------------------------------------------------------------------ */
type Traco = { desenho: MotionValue<number> };

const tracoProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Entendemos — o objetivo no centro, visto de fora para dentro.
function Objetivo({ desenho }: Traco) {
  const d2 = useTransform(desenho, (v) => faixa(v, 0.2, 0.7));
  const d3 = useTransform(desenho, (v) => faixa(v, 0.45, 0.9));
  const ponto = useTransform(desenho, (v) => faixa(v, 0.8, 1));
  return (
    <>
      <motion.circle cx="100" cy="100" r="78" {...tracoProps} style={{ pathLength: desenho }} />
      <motion.circle cx="100" cy="100" r="52" {...tracoProps} style={{ pathLength: d2 }} />
      <motion.circle cx="100" cy="100" r="26" {...tracoProps} style={{ pathLength: d3 }} />
      <motion.path d="M100 10v22M100 168v22M10 100h22M168 100h22" {...tracoProps} style={{ pathLength: d2 }} />
      <motion.circle cx="100" cy="100" r="5" fill="currentColor" style={{ scale: ponto, opacity: ponto }} />
    </>
  );
}

// Estruturamos — camadas assentando de baixo para cima, sobre uma base.
function Estrutura({ desenho }: Traco) {
  const base = useTransform(desenho, (v) => faixa(v, 0, 0.25));
  const c1 = useTransform(desenho, (v) => faixa(v, 0.15, 0.5));
  const c2 = useTransform(desenho, (v) => faixa(v, 0.4, 0.75));
  const c3 = useTransform(desenho, (v) => faixa(v, 0.65, 1));
  return (
    <>
      <motion.path d="M22 168h156" {...tracoProps} style={{ pathLength: base }} />
      <motion.rect x="38" y="130" width="124" height="30" rx="6" {...tracoProps} style={{ pathLength: c1 }} />
      <motion.rect x="56" y="92" width="88" height="30" rx="6" {...tracoProps} style={{ pathLength: c2 }} />
      <motion.rect x="74" y="54" width="52" height="30" rx="6" {...tracoProps} style={{ pathLength: c3 }} />
    </>
  );
}

// Apresentamos — uma proposta clara, item por item.
function Proposta({ desenho }: Traco) {
  const folha = useTransform(desenho, (v) => faixa(v, 0, 0.45));
  const l1 = useTransform(desenho, (v) => faixa(v, 0.35, 0.55));
  const l2 = useTransform(desenho, (v) => faixa(v, 0.48, 0.68));
  const l3 = useTransform(desenho, (v) => faixa(v, 0.6, 0.8));
  const marca = useTransform(desenho, (v) => faixa(v, 0.78, 1));
  return (
    <>
      <motion.rect x="48" y="26" width="104" height="148" rx="12" {...tracoProps} style={{ pathLength: folha }} />
      <motion.path d="M68 62h64" {...tracoProps} style={{ pathLength: l1 }} />
      <motion.path d="M68 86h52" {...tracoProps} style={{ pathLength: l2 }} />
      <motion.path d="M68 110h60" {...tracoProps} style={{ pathLength: l3 }} />
      <motion.circle cx="100" cy="146" r="12" {...tracoProps} style={{ pathLength: marca }} />
      <motion.path d="M94 146l4.5 4.5 8-9" {...tracoProps} style={{ pathLength: marca }} />
    </>
  );
}

// Acompanhamos — uma linha do tempo reta, com marcos no mesmo nível.
// Reta de propósito: uma linha subindo leria como gráfico de rentabilidade,
// e o que se acompanha aqui são etapas e condições, não resultado.
function Jornada({ desenho }: Traco) {
  const marcos = [
    { cx: 28, cy: 100, a: 0.04 },
    { cx: 76, cy: 100, a: 0.34 },
    { cx: 124, cy: 100, a: 0.64 },
    { cx: 172, cy: 100, a: 0.94 },
  ];
  return (
    <>
      <motion.path d="M28 100H172" {...tracoProps} style={{ pathLength: desenho }} />
      {marcos.map((m) => (
        <Marco key={m.cx} {...m} desenho={desenho} />
      ))}
    </>
  );
}

function Marco({ cx, cy, a, desenho }: { cx: number; cy: number; a: number; desenho: MotionValue<number> }) {
  const s = useTransform(desenho, (v) => faixa(v, a - 0.05, a + 0.05));
  return <motion.circle cx={cx} cy={cy} r="7" {...tracoProps} fill="var(--color-valozzi-offwhite)" style={{ scale: s, opacity: s }} />;
}

const ILUSTRACOES = [Objetivo, Estrutura, Proposta, Jornada];

/* ------------------------------------------------------------- Palco */

function Capitulo({ i, progresso }: { i: number; progresso: MotionValue<number> }) {
  const passo = STEPS[i];
  const Ilustracao = ILUSTRACOES[i];
  // Tempo local do capítulo (0→1). O primeiro já começa visível e o último
  // fica na tela até o fim, para o palco nunca abrir ou fechar vazio.
  const t = (p: number) => p * N - i;
  const visivel = (p: number) => {
    const entra = i === 0 ? 1 : faixa(t(p), 0.05, 0.22);
    const sai = i === N - 1 ? 0 : faixa(t(p), 0.8, 0.97);
    return Math.min(entra, 1 - sai);
  };

  const opacity = useTransform(progresso, visivel);
  const y = useTransform(progresso, (p) => {
    const entra = i === 0 ? 1 : faixa(t(p), 0.05, 0.22);
    const sai = i === N - 1 ? 0 : faixa(t(p), 0.8, 0.97);
    return (1 - entra) * 32 - sai * 32;
  });
  const filter = useTransform(opacity, (o) => (o > 0.99 ? "none" : `blur(${(1 - o) * 8}px)`));
  const desenho = useTransform(progresso, (p) => faixa(t(p), i === 0 ? 0 : 0.12, 0.62));

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className="pointer-events-none absolute inset-0 grid items-center gap-8 px-6 md:grid-cols-2 md:gap-16 lg:px-8"
    >
      <div className="flex justify-center md:justify-end">
        <div className="glass flex aspect-square w-[min(68vw,340px)] items-center justify-center rounded-[2.5rem] text-valozzi-gold">
          <svg viewBox="0 0 200 200" className="h-[72%] w-[72%]" aria-hidden>
            <Ilustracao desenho={desenho} />
          </svg>
        </div>
      </div>
      <div className="text-center md:text-left">
        <p className="text-display text-gold text-[clamp(3rem,7vw,5rem)] tabular-nums">{passo.number}</p>
        <h3 className="text-title mt-2 text-[clamp(2rem,4.5vw,3.25rem)]">{passo.title}</h3>
        <p className="text-muted mx-auto mt-4 max-w-sm text-[clamp(1.0625rem,1.8vw,1.25rem)] leading-snug tracking-[-0.01em] md:mx-0">
          {passo.description}
        </p>
      </div>
    </motion.div>
  );
}

function Indicador({ i, progresso }: { i: number; progresso: MotionValue<number> }) {
  const preenchimento = useTransform(progresso, (p) => faixa(p * N - i, 0, 1));
  return (
    <span className="relative h-1.5 w-10 overflow-hidden rounded-full bg-valozzi-black/10">
      <motion.span
        style={{ scaleX: preenchimento }}
        className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-valozzi-gold to-valozzi-champagne"
      />
    </span>
  );
}

export function ComoTrabalha() {
  const reduceMotion = useReducedMotionSafe();
  const palco = useRef<HTMLDivElement>(null);
  const progresso = useStageProgress(palco);

  if (reduceMotion) {
    return (
      <section className="vars-light surface-light py-28 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-title text-center text-[clamp(2rem,4.5vw,3.25rem)] text-balance">
              Antes da cota, vem a estratégia.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <StaggerItem key={step.number} className="h-full">
                <div className="glass h-full rounded-[1.75rem] p-7">
                  <p className="text-display text-gold text-5xl tabular-nums">{step.number}</p>
                  <h3 className="text-headline mt-6 text-xl">{step.title}</h3>
                  <p className="text-muted mt-2 text-[15px] leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="text-subtle mx-auto mt-12 max-w-2xl text-center text-[12px] leading-relaxed">{AVISO}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="vars-light surface-light">
      <div ref={palco} className="relative h-[440vh]">
        <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
          <h2 className="text-title px-6 pt-28 text-center text-[clamp(1.75rem,3.6vw,2.75rem)] text-balance">
            Antes da cota, vem a estratégia.
          </h2>

          <div className="relative mx-auto w-full max-w-5xl flex-1">
            {STEPS.map((s, i) => (
              <Capitulo key={s.number} i={i} progresso={progresso} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 px-6 pb-8">
            <div className="flex gap-2" aria-hidden>
              {STEPS.map((s, i) => (
                <Indicador key={s.number} i={i} progresso={progresso} />
              ))}
            </div>
            <p className="text-subtle max-w-xl text-center text-[12px] leading-relaxed">{AVISO}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
