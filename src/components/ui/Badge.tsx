import { cn } from "@/lib/utils";

interface BadgeProps {
  children: string;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-none border px-2 py-1 font-mono text-xs tracking-wide",
        variant === "accent"
          ? "border-rust text-rust bg-cream"
          : "border-ivy text-ivy bg-cream",
      )}
    >
      {children}
    </span>
  );
}
