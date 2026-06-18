export function BeadDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bead-divider text-bronze ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
