import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { join, parse, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, '..', 'public', 'images');
const files = readdirSync(dir).filter(f => /\.(jpe?g|png)$/i.test(f));

for (const f of files) {
  const src = join(dir, f);
  const name = parse(f).name;
  const img = sharp(src);

  const meta = await img.metadata();

  const opts = { quality: 80, effort: 6 };

  if (meta.width > 1600) {
    const resize = { width: 1600 };
    await sharp(src).resize(resize).webp({ ...opts, effort: 6 }).toFile(join(dir, `${name}.webp`));
    await sharp(src).resize(resize).avif({ quality: 65, effort: 8 }).toFile(join(dir, `${name}.avif`));
  } else {
    await img.webp(opts).toFile(join(dir, `${name}.webp`));
    await img.avif({ quality: 65, effort: 8 }).toFile(join(dir, `${name}.avif`));
  }
  console.log(`✓ ${f} → ${name}.webp + ${name}.avif`);
}
