import { Play } from "lucide-react";
import type { VlogEntry } from "@/lib/vlog";

export default function VlogCarousel({ entries }: { entries: VlogEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      {entries.map((entry) => (
        <div
          key={entry.slug}
          className="relative h-40 w-28 shrink-0 overflow-hidden rounded-xl bg-navy sm:h-48 sm:w-32"
        >
          {entry.mediaType === "photo" ? (
            <img
              src={entry.mediaSrc}
              alt={entry.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <>
              <img
                src={entry.thumbnail}
                alt={entry.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Play size={28} className="text-white" fill="white" />
              </div>
            </>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <span className="absolute bottom-2 left-2 right-2 text-xs font-medium leading-tight text-white">
            {entry.title}
          </span>
        </div>
      ))}
    </div>
  );
}