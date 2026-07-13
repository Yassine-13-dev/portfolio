import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");

  const links = [
    { href: `/${locale}/scenarios-business`, label: t("scenariosBusiness") },
    { href: `/${locale}/a-propos`, label: t("aPropos") },
    { href: `/${locale}/experiences`, label: t("experiences") },
  ];

  return (
    <header className="bg-navy text-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="font-medium tracking-tight">
          Ton nom
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
