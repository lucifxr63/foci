// Script puntual de optimización de imágenes (P3 — Core Web Vitals + OG).
// Uso: node scripts/optimize-images.mjs
// 1) Convierte las imágenes pesadas de /public a WebP (calidad 80).
// 2) Genera /public/og-image.jpg (1200x630) de marca para social sharing.

import sharp from 'sharp';
import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

// Imágenes referenciadas a convertir (sin logos ni favicon).
const TO_WEBP = [
  'clinic-equipment.png', 'clinic-reception.png', 'clinic-room1.png', 'clinic-room2.png',
  'clinic-space-1.png', 'clinic-space-v3-1.png', 'clinic-space-v3-2.png', 'clinic-space-v3-3.png',
  'hero-bg.png', 'hero-slide2.png', 'hero-slide3.png', 'instagram-grid.png',
  'professional.png', 'professional-carla-clean.png', 'professional-lesly-clean.png',
  'service-ear-wash.png', 'service-otoscopy.png', 'professional-catalina.jpeg',
];

async function toWebp() {
  let saved = 0, before = 0, after = 0;
  for (const file of TO_WEBP) {
    const src = join(PUBLIC, file);
    const out = join(PUBLIC, file.replace(/\.(png|jpe?g)$/i, '.webp'));
    try { await access(src); } catch { console.log(`  (omitido, ya convertido) ${file}`); continue; }
    const input = await readFile(src);
    const buf = await sharp(input).webp({ quality: 80 }).toBuffer();
    await writeFile(out, buf);
    before += input.length; after += buf.length; saved++;
    console.log(`  ${file}  ${(input.length/1024).toFixed(0)}KB → ${(buf.length/1024).toFixed(0)}KB`);
  }
  console.log(`\n  ${saved} imágenes · ${(before/1024/1024).toFixed(2)}MB → ${(after/1024/1024).toFixed(2)}MB (-${(100-after/before*100).toFixed(0)}%)`);
}

async function ogImage() {
  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#13294b"/>
        <stop offset="100%" stop-color="#0d6efd"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <circle cx="1080" cy="120" r="260" fill="#ffffff" opacity="0.06"/>
    <circle cx="120" cy="560" r="200" fill="#ffffff" opacity="0.05"/>
    <text x="90" y="235" font-family="Arial, Helvetica, sans-serif" font-size="140" font-weight="bold" fill="#ffffff" letter-spacing="2">FOCI</text>
    <text x="96" y="305" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="600" fill="#dbeafe">Fonoaudiología Clínica Integral</text>
    <rect x="98" y="335" width="120" height="6" rx="3" fill="#0dcaf0"/>
    <text x="96" y="410" font-family="Arial, Helvetica, sans-serif" font-size="29" fill="#bfdbfe">Audiometría · Lavado de oídos · Terapia de lenguaje · Deglución</text>
    <text x="96" y="525" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="bold" fill="#ffffff">Temuco, Chile</text>
    <text x="96" y="570" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#dbeafe">+56 9 6554 5777 · foci.cl</text>
    <!-- CTA -->
    <rect x="800" y="486" width="320" height="78" rx="39" fill="#0dcaf0"/>
    <text x="960" y="536" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="33" font-weight="bold" fill="#13294b">Agenda tu hora  →</text>
  </svg>`;
  const out = join(PUBLIC, 'og-image.jpg');
  const buf = await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toBuffer();
  await writeFile(out, buf);
  console.log(`\n  og-image.jpg  1200x630  ${(buf.length/1024).toFixed(0)}KB`);
}

console.log('→ Convirtiendo a WebP:');
await toWebp();
console.log('→ Generando OG image:');
await ogImage();
console.log('\n✓ Listo.');
