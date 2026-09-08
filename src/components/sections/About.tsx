import Image from "next/image";

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
      <div className="mt-10 grid gap-10 md:grid-cols-[2fr_3fr] md:gap-14">
        <div className="border-sand bg-surface relative aspect-[3/4] w-full border">
          <Image
            src="/assets/portrait.jpeg"
            alt="Portrait of Morgan Bauer"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-6">
          <p>
            As an MSE candidate in Robotics at Penn’s GRASP Lab, I’ve always
            gravitated toward high-dimensional challenges. My background spans
            publishing in combinatorics, developing deep learning models,
            exploring post-quantum cryptography, and applying sports analytics
            at the highest level in the NFL.
          </p>
          <p>
            Technical rigor aside, my core drive is human: I believe deeply in
            the joy of shared learning and the responsibility of engineering. As
            a student, mentor, and peer in computer science and mathematics, my
            goal is to leverage advanced technical systems to solve meaningful
            problems and build a better future for the communities we design
            for.
          </p>
        </div>
      </div>
    </section>
  );
}
