"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { springs } from "@/lib/motion";

// Entra uma vez, subindo levemente enquanto sai do desfoque — o conteúdo
// "materializa" em vez de só aparecer. Com movimento reduzido, só opacidade.
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span";
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ ...springs.default, duration: 0.8, delay }}
    >
      {children}
    </Component>
  );
}
