import manifest from '@/data/image-manifest.json';

export interface GalleryImage {
    src: string;
    filename: string;
}

// Reads the build-time list of files in /public/gallery (see scripts/generate-image-manifest.mjs).
export async function getAllGalleryImages(): Promise<GalleryImage[]> {
    return (manifest.gallery as string[]).map((file) => ({ src: `/gallery/${file}`, filename: file }));
}
