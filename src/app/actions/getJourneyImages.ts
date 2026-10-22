import manifest from '@/data/image-manifest.json';

// Returns /journey/{slug}1.webp ... {slug}4.webp that exist (see scripts/generate-image-manifest.mjs).
export async function getJourneyImages(slug: string): Promise<string[]> {
    if (!slug || !/^[a-zA-Z0-9-_]+$/.test(slug)) return [];
    const files = new Set<string>(manifest.journey as string[]);
    const images: string[] = [];
    for (let i = 1; i <= 4; i++) {
        const filename = `${slug}${i}.webp`;
        if (files.has(filename)) images.push(`/journey/${filename}`);
    }
    return images;
}
