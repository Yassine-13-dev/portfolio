import fs from "fs";
import path from "path";
import matter from "gray-matter";

const VLOG_DIR = path.join(process.cwd(), "content/vlog");

export type VlogEntry = {
  slug: string;
  title: string;
  date: string;
  mediaType: "photo" | "video";
  mediaSrc: string;   // chemin vers l'image ou la vidéo dans /public
  thumbnail?: string; // pour les vidéos, image de couverture
};

export function getAllVlogEntries(): VlogEntry[] {
  if (!fs.existsSync(VLOG_DIR)) return [];

  const files = fs.readdirSync(VLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(VLOG_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        mediaType: data.mediaType,
        mediaSrc: data.mediaSrc,
        thumbnail: data.thumbnail,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}