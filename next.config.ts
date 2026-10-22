import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    // Strict Mode double-mounts components in dev, which breaks the 3D lanyard's physics joints
    reactStrictMode: false,

    // GitHub Pages: static export served from https://anjali61034.github.io
    output: 'export',
    trailingSlash: true,

    transpilePackages: ['three'],

    images: {
        unoptimized: true,
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'assets.aceternity.com' },
            { protocol: 'https', hostname: 'placehold.co' }
        ],
        formats: ['image/avif', 'image/webp'],
    },
};

export default withNextIntl(nextConfig);
