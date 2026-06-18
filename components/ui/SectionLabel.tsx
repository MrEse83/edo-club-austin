export function SectionLabel({
  children,
  tone = "bronze",
}: {
  children: string;
  tone?: "bronze" | "parchment";
}) {
  const color = tone === "bronze" ? "text-bronze" : "text-parchment";
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.2em] ${color} mb-3`}
    >
      {children}
    </p>
  );
}
