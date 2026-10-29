"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

// Cápsulas no estilo Apple. "solid" é o dourado da marca; "outline" virou
// vidro — o mesmo papel secundário, agora como material translúcido.
// O feedback de toque (scale no :active) fica no CSS de .btn, instantâneo.
const variants = {
  solid: "btn btn-gold",
  outline: "btn glass",
};

const sizes = {
  md: "",
  sm: "btn-sm",
};

function Chevron() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path d="M4.5 2.5 8 6l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CtaLink({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

// Link de texto com chevron, o "Saiba mais ›" das páginas da Apple.
export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1 text-[17px] text-valozzi-gold transition-opacity hover:opacity-80 ${className}`}
    >
      {children}
      <span className="transition-transform group-hover:translate-x-0.5">
        <Chevron />
      </span>
    </Link>
  );
}

export function CtaButton({
  children,
  variant = "solid",
  size = "md",
  className = "",
  ...props
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
