"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { springs } from "@/lib/motion";

const base =
  "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300";

const variants = {
  solid: "bg-valozzi-gold text-valozzi-black hover:bg-valozzi-champagne",
  outline:
    "border border-valozzi-gold hover:bg-valozzi-gold hover:text-valozzi-black",
};

const MotionLink = motion.create(Link);

export function CtaLink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <MotionLink
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96, y: 0 }}
      transition={springs.press}
    >
      {children}
    </MotionLink>
  );
}

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd"
>;

export function CtaButton({
  children,
  variant = "solid",
  className = "",
  ...props
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
} & NativeButtonProps) {
  return (
    <motion.button
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96, y: 0 }}
      transition={springs.press}
      {...props}
    >
      {children}
    </motion.button>
  );
}
