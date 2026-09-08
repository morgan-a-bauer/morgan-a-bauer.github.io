import type { ReactNode } from "react";

interface CardProps {
  href: string;
  children: ReactNode;
}

export function Card({ href, children }: CardProps) {
  return (
    <article className="group border-sand bg-surface hover:border-rust focus-within:border-rust relative border transition-[border-color,box-shadow] duration-150 ease-in-out">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-visible:ring-rust absolute inset-0 z-10 focus:outline-none focus-visible:ring-2"
        aria-label="View project on GitHub"
      />
      <div className="p-6">{children}</div>
    </article>
  );
}
