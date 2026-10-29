export function Eyebrow({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return <p className={`text-eyebrow ${className}`}>{children}</p>;
}
