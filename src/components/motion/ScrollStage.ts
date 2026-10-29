"use client";

import { useSyncExternalStore, type RefObject } from "react";
import { useReducedMotion, useScroll, useSpring } from "motion/react";

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
export const faixa = (t: number, a: number, b: number) => clamp01((t - a) / (b - a));

type Offset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

// Progresso 0→1 de uma seção "palco" (alta, com conteúdo fixo na tela),
// com uma mola leve por cima: a cena acompanha o scroll como a barra de um
// vídeo, mas sem trancos. Rolar para cima "rebobina".
export function useStageProgress(ref: RefObject<HTMLElement | null>, offset: Offset = ["start start", "end end"]) {
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return useSpring(scrollYProgress, { stiffness: 160, damping: 32, mass: 0.5, restDelta: 0.0002 });
}

// useReducedMotion() só sabe o valor real depois de montar. Segurar "false"
// no primeiro render faz servidor e cliente concordarem; a troca para a
// versão estática acontece logo depois, como uma atualização normal.
const subscribeNever = () => () => {};
export function useReducedMotionSafe() {
  const prefersReduced = useReducedMotion();
  const mounted = useSyncExternalStore(subscribeNever, () => true, () => false);
  return mounted ? !!prefersReduced : false;
}
