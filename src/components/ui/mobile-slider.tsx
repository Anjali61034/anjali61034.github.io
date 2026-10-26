"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Swipeable, snap-scrolling slideshow for phones. Native touch swipe + arrows + dots.
export function MobileSlider({
    children,
    className,
    slideClassName,
    autoPlayMs,
}: {
    children: React.ReactNode[];
    className?: string;
    slideClassName?: string;
    autoPlayMs?: number;
}) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const count = children.length;

    const goTo = (i: number) => {
        const track = trackRef.current;
        if (!track) return;
        const next = (i + count) % count;
        const slide = track.children[next] as HTMLElement | undefined;
        if (slide) track.scrollTo({ left: slide.offsetLeft - track.offsetLeft - (track.clientWidth - slide.clientWidth) / 2, behavior: "smooth" });
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onScroll = () => {
            const center = track.scrollLeft + track.clientWidth / 2;
            let best = 0;
            let bestDist = Infinity;
            Array.from(track.children).forEach((el, i) => {
                const e = el as HTMLElement;
                const c = e.offsetLeft - track.offsetLeft + e.clientWidth / 2;
                const d = Math.abs(c - center);
                if (d < bestDist) {
                    bestDist = d;
                    best = i;
                }
            });
            setIndex(best);
        };
        track.addEventListener("scroll", onScroll, { passive: true });
        return () => track.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!autoPlayMs) return;
        const id = setInterval(() => goTo(index + 1), autoPlayMs);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, autoPlayMs]);

    return (
        <div className={cn("relative", className)}>
            <div
                ref={trackRef}
                data-lenis-prevent
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[7.5%] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {children.map((child, i) => (
                    <div key={i} className={cn("w-[85%] flex-shrink-0 snap-center", slideClassName)}>
                        {child}
                    </div>
                ))}
            </div>

            <div className="mt-5 flex items-center justify-center">
                <div className="flex items-center gap-1.5">
                    {children.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => goTo(i)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                i === index ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
