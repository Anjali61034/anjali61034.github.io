import manifest from '@/data/image-manifest.json';

// Finds /project/{base}{1..10}.{webp|png|jpg|jpeg}, where base is the title or slug with
// non-alphanumerics removed (see scripts/generate-image-manifest.mjs).
export async function getProjectImages(slug: string, title?: string): Promise<string[]> {
    const files = new Set<string>(manifest.project as string[]);
    const bases = [...new Set([
        title ? title.toLowerCase().replace(/[^a-z0-9]/g, '') : '',
        slug.replace(/-/g, ''),
    ].filter(Boolean))];

    for (const base of bases) {
        const images: string[] = [];
        for (let i = 1; i <= 10; i++) {
            const hit = ['webp', 'png', 'jpg', 'jpeg'].map((ext) => `${base}${i}.${ext}`).find((f) => files.has(f));
            if (hit) images.push(`/project/${hit}`);
        }
        if (images.length > 0) return images;
    }
    return [];
}
