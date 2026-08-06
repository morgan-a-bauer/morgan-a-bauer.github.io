import { Badge } from "@/components/ui/Badge";
import { research } from "@/data/research";

export function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="mx-auto max-w-6xl px-6 py-16 md:px-16"
    >
      <h2
        id="research-heading"
        className="border-ivy font-display text-ivy inline-block border-b-2 pb-2 text-2xl font-semibold tracking-wide uppercase"
      >
        Research &amp; Writing
      </h2>
      <table className="border-sand mt-10 w-full border-t text-left text-sm">
        <thead>
          <tr className="border-sand text-charcoal border-b font-mono text-xs tracking-wide uppercase">
            <th scope="col" className="py-3 pr-4 font-medium">
              Year
            </th>
            <th scope="col" className="py-3 pr-4 font-medium">
              Title &amp; Domain
            </th>
            <th scope="col" className="py-3 pr-4 font-medium">
              Organization / Platform
            </th>
            <th scope="col" className="py-3 font-medium">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {research.map((entry) => (
            <tr key={entry.title} className="border-sand border-b">
              <td className="text-charcoal py-4 pr-4 align-top font-mono">
                {entry.year}
              </td>
              <td className="py-4 pr-4 align-top">
                <p className="font-display text-ink font-medium">
                  {entry.title}
                </p>
                <p className="text-ivy mt-1 font-mono text-xs uppercase">
                  {entry.domain}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {entry.peerReviewed && (
                    <li>
                      <Badge variant="accent">Peer-Reviewed</Badge>
                    </li>
                  )}
                  {entry.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="text-charcoal py-4 pr-4 align-top">
                {entry.organization}
              </td>
              <td className="py-4 align-top">
                <a
                  href={entry.link}
                  className="text-ivy hover:text-rust focus-visible:text-rust focus-visible:ring-rust font-mono focus-visible:ring-2 focus-visible:outline-none"
                >
                  View →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
