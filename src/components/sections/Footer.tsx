import { IconLink } from "@/components/ui/IconLink";
import { GitHubIcon, LinkedInIcon, ScholarIcon } from "@/components/ui/icons";
import { socialLinks } from "@/data/social";

export function Footer() {
  return (
    <footer id="contact" className="bg-ivy mt-auto py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between md:px-16">
        <div className="flex flex-col gap-2">
          <p className="text-cream/70 font-mono text-xs tracking-wide uppercase">
            Contact
          </p>
          <a
            href="mailto:hello@example.com"
            className="font-display text-cream hover:text-rust focus-visible:text-rust focus-visible:ring-rust w-fit text-lg focus-visible:ring-2 focus-visible:outline-none"
          >
            hello@example.com
          </a>
        </div>
        <div className="flex items-center gap-5">
          <IconLink href={socialLinks.linkedin} label="LinkedIn">
            <LinkedInIcon className="h-5 w-5" />
          </IconLink>
          <IconLink href={socialLinks.github} label="GitHub">
            <GitHubIcon className="h-5 w-5" />
          </IconLink>
          <IconLink href={socialLinks.googleScholar} label="Google Scholar">
            <ScholarIcon className="h-5 w-5" />
          </IconLink>
        </div>
      </div>
    </footer>
  );
}
