import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const styles = cn(
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.14em] transition",
    variant === "primary" && "cut-corner bg-wine text-white hover:bg-brass hover:text-ink",
    variant === "secondary" && "border border-ink/30 bg-transparent text-ink hover:border-wine hover:bg-wine hover:text-white",
    variant === "ghost" && "text-ink hover:text-wine",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
