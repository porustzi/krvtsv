import sharp from 'sharp';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, 'public', 'og-image.jpg');

const W = 1200;
const H = 630;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect x="0" y="0" width="${W}" height="${H}" fill="#fff1f2"/>
  <circle cx="${W - 120}" cy="-120" r="320" fill="#fce7f3"/>
  <text x="80" y="250" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="900" letter-spacing="6" fill="#f43f5e">ВЕБ-СТУДІЯ / UKRAINE</text>
  <text x="76" y="360" font-family="Inter, Arial, sans-serif" font-size="110" font-weight="900" fill="#111827">САЙТИ, ЯКІ</text>
  <text x="76" y="470" font-family="Inter, Arial, sans-serif" font-size="110" font-weight="900" fill="#f43f5e">ПРОДАЮТЬ</text>
  <text x="80" y="545" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="2" fill="#6b7280">KRVTSV CORP — запуск від 3 днів</text>
</svg>`;

const photo = resolve(__dirname, 'public', 'og-photo.jpg');

let photoBuf;
try {
  photoBuf = await sharp(photo).resize(520, 520, { fit: 'cover' }).toBuffer();
} catch (e) {
  photoBuf = null;
}

const imageLayer = photoBuf
  ? `<image href="data:image/jpeg;base64,${photoBuf.toString('base64')}" x="640" y="55" width="520" height="520" preserveAspectRatio="xMidYMid slice" rx="24"/>`
  : '';

const finalSvg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="r"><rect width="520" height="520" rx="24"/></clipPath>
  </defs>
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect width="${W}" height="${H}" fill="#fff1f2"/>
  <circle cx="${W - 120}" cy="-120" r="320" fill="#fce7f3"/>
  ${imageLayer}
  <text x="80" y="250" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="900" letter-spacing="6" fill="#f43f5e">ВЕБ-СТУДІЯ / UKRAINE</text>
  <text x="76" y="360" font-family="Inter, Arial, sans-serif" font-size="110" font-weight="900" fill="#111827">САЙТИ, ЯКІ</text>
  <text x="76" y="470" font-family="Inter, Arial, sans-serif" font-size="110" font-weight="900" fill="#f43f5e">ПРОДАЮТЬ</text>
  <text x="80" y="545" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="2" fill="#6b7280">KRVTSV CORP — запуск від 3 днів</text>
</svg>`;

await sharp(Buffer.from(finalSvg)).jpeg({ quality: 90 }).toFile(out);
console.log(`[og] generated ${out}`);
