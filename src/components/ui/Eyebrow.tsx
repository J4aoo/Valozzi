export function Eyebrow({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-medium tracking-[0.3em] uppercase text-valozzi-gold ${className}`}
    >
      {children}
    </p>
  );
}
