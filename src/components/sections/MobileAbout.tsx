"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MobileSlider } from "@/components/ui/mobile-slider";

// Phone-only replacement for the desktop scroll-hijack panels (stats, profile, work showcase).
// Desktop keeps the original ScrollHijackSection + ScrollAdventure.


const work = [
    {
        title: "Aged Arc",
        tag: "Shopify Store",
        url: "https://agedarc.com/",
        images: ["/work/agedarc-1.webp", "/work/agedarc-2.webp", "/work/agedarc-3.webp", "/work/agedarc-4.webp"],
        description: "Vintage streetwear store with brand-led navigation, image-rich collection grids and a clean shopping flow.",
        skills: ["Shopify Theme", "Custom Sections", "Mobile-First"],
    },
    {
        title: "FT Grails",
        tag: "Shopify Store",
        url: "https://ftgrails.com/",
        images: ["/work/ftgrails-1.webp", "/work/ftgrails-2.webp", "/work/ftgrails-3.webp", "/work/ftgrails-4.webp"],
        description: "Vintage drop store with a sliding hero, collection shortcuts and new-arrival grids built for daily drops.",
        skills: ["Hero Slider", "New Arrivals", "SEO"],
    },
    {
        title: "Allbirds",
        tag: "Storefront",
        url: "https://www.allbirds.com/",
        images: ["/work/allbirds-1.webp", "/work/allbirds-2.webp", "/work/allbirds-3.webp"],
        description: "Full-width campaigns, bold product storytelling and smooth navigation across the range.",
        skills: ["Campaign Banners", "Responsive UI"],
    },
    {
        title: "Dopamean",
        tag: "Web Development",
        url: "https://dopamean.in/",
        images: ["/work/dopamean-1.webp", "/work/dopamean-2.webp", "/work/dopamean-3.webp", "/work/dopamean-4.webp"],
        description: "Curated archive store with a search-first experience and a Latest Finds feed for one-of-one pieces.",
        skills: ["Search UX", "Editorial Design"],
    },
];

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function MobileAbout() {
    return (
        <div className="md:hidden relative bg-background text-foreground px-5 pt-16 pb-16 space-y-16">
            {/* Selected work */}
            <div className="space-y-6">
                <motion.div {...fade} className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-primary/50" />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-primary/80">Selected work</span>
                    </div>
                    <h3 className="text-[1.75rem] font-black leading-[1.1] tracking-tight">Stores I&apos;ve built and shaped</h3>
                </motion.div>

                <div className="-mx-5">
                    <MobileSlider>
                        {work.map((w, i) => (
                            <article key={w.title} className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                                <div className="relative aspect-[16/11] overflow-hidden bg-muted">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={w.images[0]}
                                        alt={`${w.title} store`}
                                        loading="lazy"
                                        className="h-full w-full object-cover object-top"
                                    />
                                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
                                        {w.tag}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col gap-3 p-5">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-2xl font-black tracking-tight">{w.title}</h4>
                                        <span className="text-[11px] font-mono text-muted-foreground">0{i + 1}/0{work.length}</span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{w.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {w.skills.map((s) => (
                                            <span key={s} className="rounded-full border border-border px-3 py-1 text-[11px] font-medium">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={w.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold"
                                    >
                                        Visit live store <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </MobileSlider>
                </div>

                <Link
                    href="/projects"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-sm font-bold text-background"
                >
                    View all projects <ArrowUpRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
