"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    outcome: string;
    // Drop an image in /public/how-i-work/ and set its path here, e.g. "/how-i-work/step-01.webp".
    image?: string;
    // Phone-only illustration matching the step title
    mobileImage?: string;
};

const steps: Step[] = [
    {
        eyebrow: "Understand Your Goals",
        title: "Discovery",
        description:
            "We start with a conversation about your business, your audience, and what success looks like so every decision has a clear purpose.",
        points: ["Project requirements", "Target audience", "Competitor research", "Goals & success metrics", "Timeline & budget"],
        outcome: "Clear project roadmap",
        image: "/how-i-work/step-01.webp",
        mobileImage: "/how-i-work/step-01-photo.webp",
    },
    {
        eyebrow: "Structure & Strategy",
        title: "Planning",
        description:
            "I map out the pages, user flows, and technical approach so the build is organised, predictable, and easy to scale later.",
        points: ["Sitemap & user flows", "Content structure", "Tech stack selection", "Shopify theme & app planning", "Milestones"],
        outcome: "Approved project plan",
        image: "/how-i-work/step-02.webp",
        mobileImage: "/how-i-work/step-02-photo.webp",
    },
    {
        eyebrow: "Wireframes & UI",
        title: "Design",
        description:
            "Layouts are designed with clear hierarchy, consistent branding, and responsive behaviour across every screen size.",
        points: ["Wireframes", "UI design", "Responsive layouts", "Brand consistency", "Feedback round"],
        outcome: "Polished, approved design",
        image: "/how-i-work/step-03.webp",
        mobileImage: "/how-i-work/step-03-photo.webp",
    },
    {
        eyebrow: "Build & Integrate",
        title: "Development",
        description:
            "The design is turned into clean, fast, and maintainable code, with the integrations and features your business needs.",
        points: ["Clean, reusable code", "Shopify theme customisation", "Responsive development", "Integrations & APIs", "Performance optimisation"],
        outcome: "Fully functional website",
        image: "/how-i-work/step-04.webp",
        mobileImage: "/how-i-work/step-04-photo.webp",
    },
    {
        eyebrow: "Quality Assurance",
        title: "Testing",
        description:
            "Everything is checked across devices and browsers so the website feels smooth, loads fast, and works exactly as expected.",
        points: ["Cross-browser testing", "Mobile responsiveness", "Speed & SEO checks", "Bug fixing", "Client review"],
        outcome: "Tested, launch-ready build",
        image: "/how-i-work/step-05.webp",
        mobileImage: "/how-i-work/step-05-m.webp",
    },
    {
        eyebrow: "Go Live & Support",
        title: "Launch",
        description:
            "Once everything is approved, I deploy the website smoothly and make sure the final setup is stable, secure, and ready to grow.",
        points: ["Final review", "Deployment setup", "Live environment check", "Post-launch monitoring", "Basic client guidance"],
        outcome: "Confident project launch",
        image: "/how-i-work/step-06.webp",
        mobileImage: "/how-i-work/step-06-m.webp",
    },
];

const AUTOPLAY_MS = 6000;
const pad = (n: number) => String(n + 1).padStart(2, "0");

export function HowIWork() {
    const [active, setActive] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;
        const id = setInterval(() => setActive((i) => (i + 1) % steps.length), AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [autoplay]);

    const select = (i: number) => {
        setAutoplay(false);
        setActive(i);
    };

    const step = steps[active];

    return (
        <div className="relative w-full max-w-6xl mx-auto py-10 md:py-20 text-foreground">
            {/* Header */}
            <div className="text-center">
                <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-semibold">
                    My Process
                </span>
                <h2 className="mt-4 text-3xl md:text-6xl font-bold tracking-tight">
                    How I{" "}
                    <span className="bg-gradient-to-r from-violet-500 to-purple-700 bg-clip-text text-transparent dark:from-violet-300 dark:to-purple-500">
                        Work
                    </span>
                </h2>
                <p className="mx-auto mt-3 md:mt-4 max-w-2xl text-sm md:text-lg text-muted-foreground px-2 md:px-0">
                    A clear and professional workflow that keeps every website project structured, responsive,
                    tested, and ready for launch.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative mx-auto mt-8 md:mt-10 max-w-4xl px-2">
                <div className="absolute left-[calc(2rem+0.5rem)] right-[calc(2rem+0.5rem)] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-border max-sm:left-[calc(1.25rem+0.5rem)] max-sm:right-[calc(1.25rem+0.5rem)]">
                    <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"
                        animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                </div>
                <div className="relative flex items-center justify-between">
                    {steps.map((s, i) => {
                        const reached = i <= active;
                        return (
                            <button
                                key={s.title}
                                type="button"
                                onClick={() => select(i)}
                                aria-label={`Step ${pad(i)}: ${s.title}`}
                                aria-current={i === active ? "step" : undefined}
                                className={cn(
                                    "relative flex h-10 w-10 sm:h-16 sm:w-16 items-center justify-center rounded-full text-xs sm:text-lg font-bold transition-all duration-500",
                                    reached
                                        ? "bg-violet-600 text-white"
                                        : "bg-card text-muted-foreground border border-border hover:text-foreground",
                                    i === active &&
                                        "scale-110 bg-violet-500 ring-4 ring-violet-500/25 shadow-[0_0_40px_rgba(139,92,246,0.55)]"
                                )}
                            >
                                {pad(i)}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Detail cards */}
            <div className="mt-8 md:mt-10 grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-[1fr_1.35fr]">
                {/* Left: details */}
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-5 md:p-8 shadow-sm backdrop-blur dark:bg-white/[0.03] dark:shadow-none">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-violet-500/10 text-base md:text-lg font-bold text-violet-700 dark:text-violet-300">
                                    {pad(active)}
                                </div>
                                <div>
                                    <div className="text-xs md:text-sm font-medium text-violet-600 dark:text-violet-300">
                                        {step.eyebrow}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                                </div>
                            </div>

                            <p className="mt-4 md:mt-6 text-sm md:text-base leading-relaxed text-muted-foreground">{step.description}</p>

                            <div className="my-5 md:my-7 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 md:grid-cols-1 md:gap-0 md:space-y-3">
                                {step.points.map((point) => (
                                    <li key={point} className="flex items-start md:items-center gap-2 md:gap-3">
                                        <span className="flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-300">
                                            <ChevronRight className="h-3.5 w-3.5" />
                                        </span>
                                        <span className="text-[13px] leading-snug md:text-base text-foreground/85">{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-5 md:mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-4 py-3 md:px-5 md:py-4">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                                    Outcome
                                </div>
                                <div className="mt-1 text-base md:text-lg font-semibold">{step.outcome}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right: image + overlay */}
                <div className="relative min-h-[240px] md:min-h-[420px] overflow-hidden rounded-3xl border border-border bg-card/80 dark:bg-white/[0.03]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0"
                        >
                            {step.image ? (
                                <>
                                    <Image src={step.image} alt={step.title} fill className={cn("object-cover", step.mobileImage && "hidden md:block")} sizes="(max-width: 1024px) 100vw, 640px" />
                                    {step.mobileImage && (
                                        <Image src={step.mobileImage} alt={step.title} fill className="object-cover object-center md:hidden" sizes="100vw" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </>
                            ) : (
                                <div className="absolute inset-4 flex flex-col items-center justify-center gap-2 pb-48 rounded-2xl border-2 border-dashed border-border text-muted-foreground">
                                    <ImageIcon className="h-8 w-8 opacity-60" strokeWidth={1.5} />
                                    <span className="text-sm font-medium">Image placeholder</span>
                                    <code className="text-xs opacity-70">/how-i-work/step-{pad(active)}.webp</code>
                                </div>
                            )}

                            <span
                                className={cn(
                                    "absolute left-4 top-4 md:left-7 md:top-7 rounded-full border px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium backdrop-blur",
                                    step.image
                                        ? "border-white/15 bg-violet-950/60 text-white"
                                        : "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-200"
                                )}
                            >
                                {step.eyebrow}
                            </span>

                            <div className={cn("absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7", step.image ? "text-white" : "text-foreground")}>
                                <div className={cn("text-5xl md:text-7xl font-black", step.image ? "text-white/40" : "text-foreground/20")}>
                                    {pad(active)}
                                </div>
                                <div className="mt-1 md:mt-2 text-2xl md:text-4xl font-bold">{step.title}</div>
                                <p className={cn("hidden md:block mt-3 max-w-lg text-sm md:text-base", step.image ? "text-white/80" : "text-muted-foreground")}>
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
