import Link from "next/link";

const NAV_LINKS = [
  { label: "ABOUT", href: "/#about" },
  { label: "PROJECTS", href: "/#projects" },
  { label: "RESEARCH", href: "/#research" },
  { label: "BEYOND THE LAB", href: "/beyond-the-lab" },
  { label: "CV", href: "/cv" },
  ...(process.env.NODE_ENV === "development"
    ? [{ label: "GALLERY", href: "/gallery" }]
    : []),
  { label: "CONTACT", href: "/#contact" },
];

export function Header() {
  return (
    <header className="bg-ivy sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-16">
        <Link
          href="/"
          className="text-cream focus-visible:ring-rust font-mono text-sm tracking-wide focus-visible:ring-2 focus-visible:outline-none"
        >
          M. BAUER // DUM SPIRO SPERO
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-cream decoration-rust hover:text-rust focus-visible:text-rust focus-visible:ring-rust text-sm font-medium tracking-wide no-underline decoration-2 underline-offset-4 hover:underline focus-visible:underline focus-visible:ring-2 focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
