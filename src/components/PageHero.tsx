"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { springs } from "@/lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: springs.default },
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
  return (
    <section className="bg-valozzi-black text-valozzi-offwhite pt-40 pb-24 lg:pt-48 lg:pb-32">
      <motion.div
        className="mx-auto max-w-4xl px-6 lg:px-12 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-xs font-medium tracking-[0.3em] uppercase text-valozzi-gold mb-6"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={item}
          className="font-serif text-4xl sm:text-5xl leading-[1.1] tracking-[-0.02em] text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={item}
            className="mt-6 text-lg text-valozzi-offwhite/70 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <motion.div variants={item}>{children}</motion.div>}
      </motion.div>
    </section>
  );
}
