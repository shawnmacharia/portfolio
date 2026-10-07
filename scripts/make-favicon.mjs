import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = path.join(root, "src", "app", "icon.svg");
const outputPath = path.join(root, "src", "app", "favicon.ico");

const owlSvg = await readFile(svgPath);

const pngs = await Promise.all(
  [16, 32, 48].map((size) =>
    sharp(owlSvg)
      .resize(size, size)
      .png()
      .toBuffer(),
  ),
);

await writeFile(outputPath, await pngToIco(pngs));
