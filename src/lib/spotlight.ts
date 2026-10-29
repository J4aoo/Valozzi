import type { PointerEvent } from "react";

// Atualiza --mx/--my direto no elemento (sem re-render do React) para o
// brilho de .glass-spotlight acompanhar o ponteiro 1:1.
export function spotlight(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}
