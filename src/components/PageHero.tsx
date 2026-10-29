"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { springs } from "@/lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  // Materializa: sobe levemente enquanto sai do desfoque.
  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { ...springs.default, duration: 0.8 }, transitionEnd: { filter: "none" } },
  };

  return (
    <section className="vars-dark surface-dark relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48">
      <motion.div
        className="relative mx-auto max-w-4xl px-6 text-center lg:px-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="text-eyebrow mb-5">
          {eyebrow}
        </motion.p>
        <motion.h1 variants={item} className="text-display text-[clamp(2.5rem,6vw,4.25rem)] text-balance">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={item}
            className="text-muted mx-auto mt-6 max-w-2xl text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-snug tracking-[-0.01em]"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <motion.div variants={item}>{children}</motion.div>}
      </motion.div>
    </section>
  );
}
