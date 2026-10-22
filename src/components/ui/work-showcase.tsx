'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkShowcaseProps {
    images: string[];
    url: string;
    title: string;
    accent: string; // CSS colour for the glow plate behind the window
}

// A browser window floating in 3D that tilts toward the cursor and links to the live site.
export function WorkShowcase({ images, url, title, accent }: WorkShowcaseProps) {
    const [shot, setShot] = useState(0);
    const go = (dir: number) => setShot((i) => (i + dir + images.length) % images.length);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 18 });
    const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 18 });
    const shineX = useTransform(mx, [-0.5, 0.5], ['0%', '100%']);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const reset = () => {
        mx.set(0);
        my.set(0);
    };

    const host = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

    return (
        <div
            onMouseMove={handleMove}
            onMouseLeave={reset}
            className="relative w-full h-full flex items-center justify-center pointer-events-auto [perspective:1400px]"
        >
            <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-[82%] max-w-[680px]"
            >
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                    className="relative group"
                >
                    {/* Glow plate behind the window */}
                    <div
                        className="absolute inset-2 rounded-[2rem] blur-2xl bg-zinc-400 opacity-50 dark:bg-[var(--accent)]"
                        style={{ '--accent': accent, transform: 'translateZ(-80px)' } as React.CSSProperties}
                    />
                    {/* Offset back card for depth */}
                    <div
                        className="absolute inset-0 rounded-2xl border border-foreground/10 bg-foreground/[0.04]"
                        style={{ transform: 'translateZ(-40px) translate(18px, 18px)' }}
                    />

                    {/* Browser window */}
                    <div
                        className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] dark:bg-zinc-900"
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
                            <span className="h-3 w-3 rounded-full bg-red-400" />
                            <span className="h-3 w-3 rounded-full bg-amber-400" />
                            <span className="h-3 w-3 rounded-full bg-emerald-400" />
                            <span className="ml-3 flex-1 truncate rounded-full bg-foreground/5 px-4 py-1 text-xs text-muted-foreground">
                                {host}
                            </span>
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
                            <AnimatePresence initial={false} mode="popLayout">
                                <motion.div
                                    key={shot}
                                    initial={{ opacity: 0, scale: 1.03 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.45, ease: 'easeOut' }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={images[shot]}
                                        alt={`${title} screenshot ${shot + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 680px"
                                        className="object-cover object-top"
                                    />
                                </motion.div>
                            </AnimatePresence>
                            {/* Moving shine */}
                            <motion.div
                                style={{ left: shineX }}
                                className="pointer-events-none absolute -top-1/2 h-[200%] w-1/3 -translate-x-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                            />

                            {images.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => go(-1)}
                                        aria-label="Previous screenshot"
                                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] transition hover:scale-125"
                                    >
                                        <ChevronLeft className="h-9 w-9" strokeWidth={2.5} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => go(1)}
                                        aria-label="Next screenshot"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] transition hover:scale-125"
                                    >
                                        <ChevronRight className="h-9 w-9" strokeWidth={2.5} />
                                    </button>
                                    <div className="absolute bottom-4 left-5 flex gap-1.5">
                                        {images.map((_, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setShot(i)}
                                                aria-label={`Show screenshot ${i + 1}`}
                                                className={`h-1.5 rounded-full transition-all ${i === shot ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-black/80 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
                            >
                                Visit live site <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Floor shadow */}
                <div className="mx-auto mt-14 h-6 w-2/3 rounded-[50%] bg-black/25 blur-xl dark:bg-black/60" />
            </motion.div>
        </div>
    );
}
