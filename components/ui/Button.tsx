import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200";

  const styles =
    variant === "primary"
      ? "bg-coral text-parchment hover:bg-coral-dark"
      : "border border-bronze text-bronze hover:bg-bronze hover:text-parchment";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
