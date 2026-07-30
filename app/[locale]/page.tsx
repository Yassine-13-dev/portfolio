import { useTranslations } from "next-intl";
import { getAllVlogEntries } from "@/lib/vlog";
import VlogCarousel from "@/components/VlogCarousel";

export default function HomePage() {
  const t = useTranslations("home");
  const vlogEntries = getAllVlogEntries();

  return (
    <section className="py-10">
      <h1 className="text-3xl font-medium text-ink">{t("title")}</h1>
      <p className="mt-4 max-w-xl text-ink/70">{t("subtitle")}</p>

      {vlogEntries.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-ink/50">
            Behind the scenes
          </h2>
          <VlogCarousel entries={vlogEntries} />
        </div>
      )}
    </section>
  );
}