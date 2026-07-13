import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <section className="py-16">
      <h1 className="text-3xl font-medium text-ink">{t("title")}</h1>
      <p className="mt-4 max-w-xl text-ink/70">{t("subtitle")}</p>
    </section>
  );
}
