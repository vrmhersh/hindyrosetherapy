// Usage: put photos in /images-source named hero, about-hero, office, pct, cbt, eft, dew, stone, linen, fern
// (any of .jpg .jpeg .png .webp), then run: npm run images
import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import { parse } from "node:path";

const sizes = { hero: [2000], "about-hero": [2000], office: [1400], pct: [1400], cbt: [1400], eft: [1400],
  dew: [400, 400], stone: [400, 400], linen: [400, 400], fern: [400, 400] };
mkdirSync("public/img", { recursive: true });
for (const file of readdirSync("images-source")) {
  const { name, ext } = parse(file);
  if (!/\.(jpe?g|png|webp)$/i.test(ext) || !sizes[name]) { if (/\.(jpe?g|png|webp)$/i.test(ext)) console.log("skipped (unknown name):", file); continue; }
  const [w, h] = sizes[name];
  const info = await sharp(`images-source/${file}`).rotate().resize({ width: w, height: h, fit: h ? "cover" : "inside", withoutEnlargement: true })
    .webp({ quality: 78 }).toFile(`public/img/${name}.webp`);
  console.log(`${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
