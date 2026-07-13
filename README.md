# Portfolio

Stack : Next.js (App Router) + TypeScript + Tailwind CSS + next-intl + MDX + Formspree.

## Installation

Décompresse le dossier, place-toi dedans, puis :

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

Le site sera accessible sur http://localhost:3000 — tu seras redirigé automatiquement vers `/fr` (locale par défaut).

## Structure du projet

```
app/[locale]/           → pages (scenarios-business, a-propos, experiences)
components/              → composants réutilisables (Navbar, etc.)
content/scenarios-business/  → fichiers .mdx, un par scénario business
lib/scenarios.ts         → lecture/parsing des fichiers MDX
messages/{fr,en}.json    → traductions
i18n/request.ts          → config next-intl
tailwind.config.ts       → palette de couleurs du CDC (navy / surface / ink / accent)
```

## Ajouter un nouveau scénario business

Crée un fichier `.mdx` dans `content/scenarios-business/`, avec ce frontmatter :

```md
---
title: "Titre du scénario"
categorie: "freelance" # ou "personnel"
secteur: "RH"
technologies: ["Python", "Next.js"]
lien: "https://..."
resume: "Résumé en une phrase."
---

## Contexte business
...

## Impact chiffré
...

## Solution technique
...

## Preuve
...
```

Il apparaîtra automatiquement sur la page Scénarios Business, sans toucher au code.

## Prochaines étapes

1. `npm install`
2. Configurer Formspree (créer un formulaire sur formspree.io, récupérer l'endpoint)
3. Remplir le contenu des pages "À propos" et "Expériences" (actuellement en placeholder)
4. Ajouter tes vrais scénarios business (missions freelance reformulées)
5. Déployer sur Vercel (connecter le repo GitHub, zéro config nécessaire pour Next.js)
