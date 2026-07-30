"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "YassinePortfolio";
const SPLIT_AT = "Yassine".length; // sépare la couleur entre les deux mots

export default function TypewriterLogo() {
  const [charCount, setCharCount] = useState(FULL_TEXT.length);
  const [phase, setPhase] = useState<"pause" | "erasing" | "typing">("pause");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "pause") {
      // Reste affiché en entier 5 secondes avant de recommencer
      timeout = setTimeout(() => setPhase("erasing"), 5000);
    } else if (phase === "erasing") {
      if (charCount > 0) {
        timeout = setTimeout(() => setCharCount((c) => c - 1), 35);
      } else {
        setPhase("typing");
      }
    } else if (phase === "typing") {
      if (charCount < FULL_TEXT.length) {
        timeout = setTimeout(() => setCharCount((c) => c + 1), 70);
      } else {
        setPhase("pause");
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charCount]);

  const visible = FULL_TEXT.slice(0, charCount);
  const first = visible.slice(0, SPLIT_AT);
  const second = visible.slice(SPLIT_AT);

  return (
    <span className="inline-flex items-center text-xl font-bold tracking-tight">
      <span className="text-navy bg-white">{first}</span>
      <span className="text-accent">{second}</span>
      <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-accent" />
    </span>
  );
}