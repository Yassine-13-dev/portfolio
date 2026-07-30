"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Lightbulb,
  User,
  Briefcase,
  MessageCircle,
  Download,
  Search,
} from "lucide-react";
import TypewriterLogo from "@/components/TypewriterLogo";

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  // Icônes de la 2e rangée, dans l'ordre exact annoté sur ta capture :
  // Scénario business (home) → mes xp freelance (friends) → Contact (messenger) → Mon CV (watch)
  const links = [
    { href: `/${locale}/scenarios-business`, label: t("scenariosBusiness"), icon: Lightbulb },
    { href: `/${locale}/experiences`, label: t("experiences"), icon: Briefcase },
    { href: `/${locale}/contact`, label: "Contact", icon: MessageCircle },
  ];

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(
      `/${locale}/scenarios-business?q=${encodeURIComponent(query.trim())}`
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      {/* Rangée 1 : logo à gauche, recherche + profil à droite — comme le bandeau du haut Facebook */}
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="shrink-0">
          <TypewriterLogo />
        </Link>

        <form
          onSubmit={handleSearch}
          className="hidden max-w-xs flex-1 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70 focus-within:bg-white/20 sm:flex"
        >
          <Search size={16} className="shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher..."
            className="w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none"
          />
        </form>

        <Link
          href={`/${locale}/a-propos`}
          title={t("aPropos")}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
            pathname?.startsWith(`/${locale}/a-propos`)
              ? "bg-accent text-white"
              : "bg-white/10 text-white/80 hover:bg-white/20"
          }`}
        >
          <User size={20} />
        </Link>
      </div>

      {/* Trait de séparation, comme sur la capture */}
      <div className="border-t border-white/10" />

      {/* Rangée 2 : icônes réparties sur toute la largeur — le vrai "strip" façon Facebook */}
      <div className="mx-auto flex max-w-5xl items-center justify-around px-2 py-1 sm:px-6">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname?.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              title={link.label}
              className={`flex h-12 flex-1 items-center justify-center border-b-2 transition-colors ${
                isActive
                  ? "border-accent text-accent"
                  : "border-transparent text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={24} />
            </Link>
          );
        })}
        <a
          href="/cv/CV-Yassine.pdf"
          download
          title="Télécharger mon CV"
          className="flex h-12 flex-1 items-center justify-center border-b-2 border-transparent text-white/60 transition-colors hover:bg-white/5 hover:text-white"
        >
          <Download size={24} />
        </a>
      </div>
    </header>
  );
}