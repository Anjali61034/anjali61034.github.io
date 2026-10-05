// Lists image files in /public so pages can find them without a server.
// Runs automatically before `npm run dev` and `npm run build`.
import fs from 'node:fs';
import path from 'node:path';

const pub = path.join(process.cwd(), 'public');
const list = (dir) => {
    const full = path.join(pub, dir);
    if (!fs.existsSync(full)) return [];
    return fs.readdirSync(full).filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f)).sort();
};

const manifest = {
    gallery: list('gallery'),
    project: list('project'),
    journey: list('journey'),
};

const out = path.join(process.cwd(), 'src', 'data', 'image-manifest.json');
fs.writeFileSync(out, JSON.stringify(manifest, null, 2) + '\n');
console.log(`image manifest: ${manifest.gallery.length} gallery, ${manifest.project.length} project, ${manifest.journey.length} journey`);
