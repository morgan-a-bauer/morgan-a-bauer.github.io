import type { ReactNode } from "react";

interface IconLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

export function IconLink({ href, label, children }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-cream/70 hover:text-rust focus-visible:text-rust focus-visible:ring-rust focus-visible:ring-2 focus-visible:outline-none"
    >
      {children}
    </a>
  );
}
