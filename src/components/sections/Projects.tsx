import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CategoryTag } from "@/components/ui/CategoryTag";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 py-16 md:px-16"
    >
      <h2
        id="projects-heading"
        className="border-ivy font-display text-ivy inline-block border-b-2 pb-2 text-2xl font-semibold tracking-wide uppercase"
      >
        Projects
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} href={project.link}>
            <CategoryTag>{project.domain}</CategoryTag>
            <h3 className="font-display text-ink mt-3 text-lg font-semibold">
              {project.title}
            </h3>
            <p className="text-charcoal mt-2 text-sm">{project.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
