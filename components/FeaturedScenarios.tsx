import Link from "next/link";
import type { ScenarioMeta } from "@/lib/scenarios";

export default function FeaturedScenarios({
  scenarios,
  locale,
}: {
  scenarios: ScenarioMeta[];
  locale: string;
}) {
  return (
    <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      {scenarios.map((scenario) => (
        <Link
          key={scenario.slug}
          href={`/${locale}/scenarios-business/${scenario.slug}`}
          className="relative h-40 w-28 shrink-0 overflow-hidden rounded-xl bg-navy sm:h-48 sm:w-32"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <span className="absolute left-2 top-2 rounded bg-accent px-1.5 py-0.5 text-[10px] font-medium text-white">
            {scenario.categorie === "freelance" ? "Freelance" : "Perso"}
          </span>

          <span className="absolute bottom-2 left-2 right-2 text-xs font-medium leading-tight text-white">
            {scenario.title}
          </span>
        </Link>
      ))}
    </div>
  );
}