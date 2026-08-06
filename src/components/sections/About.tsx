export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl px-6 py-16 md:px-16"
    >
      <h2
        id="about-heading"
        className="border-ivy font-display text-ivy inline-block border-b-2 pb-2 text-2xl font-semibold tracking-wide uppercase"
      >
        About
      </h2>
      <div className="mt-10 grid gap-10 md:grid-cols-[280px_1fr] md:gap-14">
        <div className="border-sand bg-surface relative aspect-[3/4] w-full max-w-xs border">
          {/* Replace with next/image (fill, object-cover) once a portrait is added to /public */}
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-charcoal font-mono text-xs tracking-wide uppercase">
              Portrait Photo
            </span>
          </div>
        </div>
        <div className="space-y-6">
          <p>
            I build decentralized planning and estimation systems for
            multi-robot teams, focused on trajectory optimization, cooperative
            SLAM, and reliable autonomy under uncertainty.
          </p>
          <p>
            On the analytics side, I work with front-office teams to turn
            tracking and event data into decision-ready models — from expected
            goals to finishing-skill attribution.
          </p>
        </div>
      </div>
    </section>
  );
}
