"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ReactNode } from "react";
import { springs } from "@/lib/motion";

export function StaggerGroup({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : stagger },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    show: { opacity: 1, y: 0, transition: springs.default },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
