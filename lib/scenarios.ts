import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/scenarios-business");

export type ScenarioMeta = {
  slug: string;
  title: string;
  categorie: "freelance" | "personnel";
  secteur: string;
  technologies: string[];
  lien: string;
  resume: string;
  content: string;
};

export function getAllScenarios(): ScenarioMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title,
      categorie: data.categorie,
      secteur: data.secteur,
      technologies: data.technologies ?? [],
      lien: data.lien ?? "",
      resume: data.resume ?? "",
      content,
    };
  });
}

export function getScenarioBySlug(slug: string): ScenarioMeta | null {
  const scenarios = getAllScenarios();
  return scenarios.find((s) => s.slug === slug) ?? null;
}
