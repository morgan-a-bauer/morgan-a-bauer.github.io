import { Badge } from "@/components/ui/Badge";
import { education, experience, skills } from "@/data/cv";

export function CV() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-16">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h1 className="font-display text-4xl font-bold tracking-tight uppercase md:text-5xl">
          Curriculum Vitae
        </h1>
        <a
          href="/cv.pdf"
          download="Morgan-Bauer-CV.pdf"
          className="border-rust bg-rust hover:bg-cream hover:text-rust focus-visible:ring-rust font-display text-cream inline-flex items-center gap-2 border px-5 py-2.5 text-sm font-semibold tracking-wide uppercase focus-visible:ring-2 focus-visible:outline-none"
        >
          Download PDF ↓
        </a>
      </div>

      <section aria-labelledby="cv-experience-heading" className="mt-16">
        <h2
          id="cv-experience-heading"
          className="border-ivy font-display text-ivy inline-block border-b-2 pb-2 text-2xl font-semibold tracking-wide uppercase"
        >
          Experience
        </h2>
        <div className="mt-10 space-y-8">
          {experience.map((entry) => (
            <article key={entry.role} className="border-sand border-t pt-6">
              <p className="text-charcoal font-mono text-xs tracking-wide uppercase">
                {entry.period}
              </p>
              <h3 className="font-display text-ink mt-1 text-lg font-semibold">
                {entry.role}
              </h3>
              <p className="text-ivy font-mono text-xs tracking-wide uppercase">
                {entry.organization}
              </p>
              <p className="text-charcoal mt-2 text-sm">{entry.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="cv-education-heading" className="mt-16">
        <h2
          id="cv-education-heading"
          className="border-ivy font-display text-ivy inline-block border-b-2 pb-2 text-2xl font-semibold tracking-wide uppercase"
        >
          Education
        </h2>
        <div className="mt-10 space-y-8">
          {education.map((entry) => (
            <article key={entry.degree} className="border-sand border-t pt-6">
              <p className="text-charcoal font-mono text-xs tracking-wide uppercase">
                {entry.period}
              </p>
              <h3 className="font-display text-ink mt-1 text-lg font-semibold">
                {entry.degree}
              </h3>
              <p className="text-ivy font-mono text-xs tracking-wide uppercase">
                {entry.institution}
              </p>
              {entry.details && (
                <p className="text-charcoal mt-2 text-sm">{entry.details}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="cv-skills-heading" className="mt-16">
        <h2
          id="cv-skills-heading"
          className="border-ivy font-display text-ivy inline-block border-b-2 pb-2 text-2xl font-semibold tracking-wide uppercase"
        >
          Skills
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-ink text-sm font-semibold tracking-wide uppercase">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Badge>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
