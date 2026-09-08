import Image from "next/image";
import { CategoryTag } from "@/components/ui/CategoryTag";
import { hobbies } from "@/data/life";

export function BeyondTheLab() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-16">
      <h1 className="font-display text-4xl font-bold tracking-tight uppercase md:text-5xl">
        Beyond the Lab
      </h1>
      <p className="text-charcoal mt-4 max-w-2xl">
        A few of the things I spend time on outside of robotics and analytics.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {hobbies.map((hobby) => (
          <article
            key={hobby.slug}
            className="border-sand bg-surface border p-6"
          >
            {hobby.image && (
              <div className="border-sand relative mb-4 aspect-[3/2] border">
                <Image
                  src={hobby.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
            <CategoryTag>{hobby.category}</CategoryTag>
            <h2 className="font-display text-ink mt-3 text-lg font-semibold">
              {hobby.title}
            </h2>
            <p className="text-charcoal mt-2 text-sm">{hobby.description}</p>
            {hobby.recentBook && (
              <p className="text-charcoal mt-2 text-sm">
                Most recently finished: <em>{hobby.recentBook.title}</em>
                {" — "}
                {hobby.recentBook.author}
              </p>
            )}
            {hobby.stats && hobby.stats.length > 0 && (
              <dl className="border-sand mt-4 grid grid-cols-2 gap-4 border-t pt-4">
                {hobby.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-charcoal font-mono text-xs tracking-wide uppercase">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-rust text-xl font-semibold">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
