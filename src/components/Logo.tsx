export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static brand mark, no need for next/image optimization */}
      <img
        src="/brand/mark.jpg"
        alt=""
        className="h-9 w-9 rounded-full object-cover"
      />
      <span className="font-serif text-xl tracking-[0.15em] text-valozzi-offwhite">
        VALOZZI
      </span>
    </span>
  );
}
