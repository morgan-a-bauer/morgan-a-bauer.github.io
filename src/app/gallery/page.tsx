import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PhotoGallery } from "@/components/sections/PhotoGallery";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
]);

function getPhotos() {
  const dir = path.join(process.cwd(), "public", "photography");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => `/photography/${file}`);
}

export default function GalleryPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  const photos = getPhotos();

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-16">
          <h1 className="font-display text-4xl font-bold tracking-tight uppercase md:text-5xl">
            Photography
          </h1>
          <p className="text-charcoal mt-2 font-mono text-xs tracking-wide uppercase">
            Dev-only preview — not included in the deployed site
          </p>

          {photos.length === 0 ? (
            <p className="text-charcoal mt-10 text-sm">
              No photos yet. Add image files to{" "}
              <code className="font-mono">public/photography/</code> and
              refresh.
            </p>
          ) : (
            <>
              <p className="text-charcoal mt-6 font-mono text-xs tracking-wide uppercase">
                Click a photo to enlarge — use the arrow keys to browse
              </p>
              <PhotoGallery photos={photos} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
