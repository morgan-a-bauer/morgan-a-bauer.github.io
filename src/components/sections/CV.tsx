import { Badge } from "@/components/ui/Badge";
import {
  education,
  honors,
  interests,
  professionalExperience,
  publications,
  research,
  skills,
  teaching,
  type TagGroup,
  type TimelineEntry,
} from "@/data/cv";

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="border-ivy font-display text-ivy inline-block border-b-2 pb-2 text-2xl font-semibold tracking-wide uppercase"
    >
      {children}
    </h2>
  );
}

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="mt-10 space-y-8">
      {entries.map((entry) => (
        <article key={entry.title} className="border-sand border-t pt-6">
          <p className="text-charcoal font-mono text-xs tracking-wide uppercase">
            {entry.period}
          </p>
          <h3 className="font-display text-ink mt-1 text-lg font-semibold">
            {entry.title}
          </h3>
          <p className="text-ivy font-mono text-xs tracking-wide uppercase">
            {entry.organization}
            {entry.location ? ` — ${entry.location}` : ""}
          </p>
          <p className="text-charcoal mt-2 text-sm">{entry.description}</p>
        </article>
      ))}
    </div>
  );
}

function TagGroups({ groups }: { groups: TagGroup[] }) {
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-3">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="font-display text-ink text-sm font-semibold tracking-wide uppercase">
            {group.category}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item}>
                <Badge>{item}</Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function CV() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-16">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight uppercase md:text-5xl">
            Curriculum Vitae
          </h1>
          <p className="text-charcoal mt-2 font-mono text-xs tracking-wide uppercase">
            Monterey, CA <span aria-hidden="true">•</span>{" "}
            <a
              href="mailto:morgan.a.bauer@gmail.com"
              className="hover:text-rust focus-visible:text-rust focus-visible:ring-rust focus-visible:ring-2 focus-visible:outline-none"
            >
              morgan.a.bauer@gmail.com
            </a>
          </p>
        </div>
        <a
          href="/documents/cv.pdf"
          download="Morgan-Bauer-CV.pdf"
          className="border-rust bg-rust hover:bg-cream hover:text-rust focus-visible:ring-rust font-display text-cream inline-flex items-center gap-2 border px-5 py-2.5 text-sm font-semibold tracking-wide uppercase focus-visible:ring-2 focus-visible:outline-none"
        >
          Download PDF ↓
        </a>
      </div>

      <section aria-labelledby="cv-education-heading" className="mt-16">
        <SectionHeading id="cv-education-heading">Education</SectionHeading>
        <div className="mt-10 space-y-10">
          {education.map((entry) => (
            <article key={entry.degree} className="border-sand border-t pt-6">
              <p className="text-charcoal font-mono text-xs tracking-wide uppercase">
                {entry.period}
              </p>
              <h3 className="font-display text-ink mt-1 text-lg font-semibold">
                {entry.degree}
              </h3>
              <p className="text-ivy font-mono text-xs tracking-wide uppercase">
                {entry.institution} — {entry.location}
              </p>
              {entry.coursework && entry.coursework.length > 0 && (
                <div className="mt-4">
                  <p className="text-charcoal font-mono text-xs tracking-wide uppercase">
                    Relevant Coursework
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {entry.coursework.map((course) => (
                      <li key={course}>
                        <Badge>{course}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="cv-research-heading" className="mt-16">
        <SectionHeading id="cv-research-heading">
          Research Experience
        </SectionHeading>
        <Timeline entries={research} />
      </section>

      <section aria-labelledby="cv-publications-heading" className="mt-16">
        <SectionHeading id="cv-publications-heading">
          Publications &amp; Presentations
        </SectionHeading>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {publications.map((entry, index) => (
            <article key={index} className="border-sand bg-surface border p-5">
              <p className="text-rust font-mono text-xs font-semibold tracking-wide uppercase">
                {entry.type}
              </p>
              <p className="text-charcoal mt-2 text-sm">{entry.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="cv-teaching-heading" className="mt-16">
        <SectionHeading id="cv-teaching-heading">
          Teaching &amp; Institutional Experience
        </SectionHeading>
        <Timeline entries={teaching} />
      </section>

      <section aria-labelledby="cv-professional-heading" className="mt-16">
        <SectionHeading id="cv-professional-heading">
          Other Professional Experience
        </SectionHeading>
        <Timeline entries={professionalExperience} />
      </section>

      <section aria-labelledby="cv-honors-heading" className="mt-16">
        <SectionHeading id="cv-honors-heading">
          Honors &amp; Awards
        </SectionHeading>
        <ul className="border-sand mt-10 divide-y divide-(--color-sand) border-t">
          {honors.map((honor) => (
            <li
              key={honor.label}
              className="flex flex-wrap items-baseline justify-between gap-2 py-3"
            >
              <span className="text-ink text-sm font-medium">
                {honor.label}
              </span>
              <span className="text-charcoal font-mono text-xs tracking-wide uppercase">
                {honor.period}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="cv-skills-heading" className="mt-16">
        <SectionHeading id="cv-skills-heading">Skills</SectionHeading>
        <TagGroups groups={skills} />
      </section>

      <section aria-labelledby="cv-interests-heading" className="mt-16">
        <SectionHeading id="cv-interests-heading">
          Interests &amp; Certifications
        </SectionHeading>
        <TagGroups groups={interests} />
      </section>
    </div>
  );
}
