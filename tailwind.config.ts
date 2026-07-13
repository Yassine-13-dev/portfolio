import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette validée dans le cahier des charges (Option A)
        navy: "#0B1D33",       // fond principal (header, hero, sections sombres)
        surface: "#F5F7FA",    // surface claire / fond des cartes
        ink: "#1F2937",        // texte principal
        accent: {
          DEFAULT: "#2F80ED", // accent bleu électrique
          hover: "#1C64D6",   // variante hover/active
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
