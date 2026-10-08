import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { imageSize } from "image-size";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const imagesRoot = path.join(repoRoot, "public", "images");
const outputPath = path.join(repoRoot, "src", "generated", "image-manifest.json");

const sortFiles = (files) => {
  return [...files].sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
};

const manifest = {};

let directories;
try {
  directories = await fs.readdir(imagesRoot, { withFileTypes: true });
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
  console.warn("public/images is unavailable; writing an empty image manifest.");
  directories = [];
}

const folders = directories.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

for (const folder of folders) {
  const folderPath = path.join(imagesRoot, folder);
  const files = await fs.readdir(folderPath);
  const imageFiles = files.filter((file) => /\.(png|jpe?g|webp|avif)$/i.test(file));
  const sortedFiles = sortFiles(imageFiles);

  const images = [];
  for (const file of sortedFiles) {
    const fullPath = path.join(folderPath, file);
    const fileBuffer = await fs.readFile(fullPath);
    const dims = imageSize(fileBuffer);
    const width = Number(dims.width ?? 0);
    const height = Number(dims.height ?? 0);

    images.push({
      file,
      src: `/images/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
      width,
      height,
    });
  }

  if (images.length > 0) {
    manifest[folder] = { images };
  }
}

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Generated ${Object.keys(manifest).length} dashboard folders.`);
