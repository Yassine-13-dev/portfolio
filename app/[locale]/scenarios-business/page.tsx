import Link from "next/link";
import { getAllScenarios } from "@/lib/scenarios";

export default async function ScenariosBusinessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const scenarios = getAllScenarios();

  return (
    <section>
      <h1 className="text-2xl font-medium text-ink">Scénarios Business</h1>
      <p className="mt-2 text-ink/70">
        Des problèmes concrets d&apos;entreprises, et les solutions techniques
        apportées.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {scenarios.map((scenario) => (
          <Link
            key={scenario.slug}
            href={`/${locale}/scenarios-business/${scenario.slug}`}
            className="rounded-lg border border-ink/10 bg-white p-5 transition-shadow hover:shadow-md"
          >
            <span className="inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
              {scenario.categorie === "freelance" ? "Freelance" : "Personnel"}
            </span>
            <h2 className="mt-3 font-medium text-ink">{scenario.title}</h2>
            <p className="mt-2 text-sm text-ink/70">{scenario.resume}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {scenario.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-surface px-2 py-0.5 text-xs text-ink/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
