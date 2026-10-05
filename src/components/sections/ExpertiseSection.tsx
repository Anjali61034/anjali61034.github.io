"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Code2, Sparkles, ShieldCheck, type LucideIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

// Edit these to match your real numbers.
const SINCE_YEAR = "2022";

const stats = [
    { value: "20+", label: "Completed Projects" },
    { value: "3+", label: "Years of Experience" },
    { value: "15+", label: "Satisfied Clients" },
];

const features: { eyebrow: string; title: string; description: string; icon: LucideIcon }[] = [
    {
        eyebrow: "Performance",
        title: "Fast Loading",
        description: "Optimized layouts built for smooth browsing and a better user experience.",
        icon: Rocket,
    },
    {
        eyebrow: "Design",
        title: "Clean Interface",
        description: "Modern UI sections with spacing, hierarchy, and responsive structure.",
        icon: Code2,
    },
    {
        eyebrow: "Growth",
        title: "SEO Friendly",
        description: "Built with structure, speed, and search visibility in mind.",
        icon: Sparkles,
    },
    {
        eyebrow: "Delivery",
        title: "Quality Focus",
        description: "Every project is handled with detail, clarity, and long term value.",
        icon: ShieldCheck,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export default function ExpertiseSection() {
    const { name, avatar } = portfolioData.personal;

    return (
        <section className="relative overflow-hidden bg-background text-foreground py-24 md:py-32">
            {/* Ambient violet glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-[10%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-violet-400/20 blur-[120px] dark:bg-violet-600/20"
            />

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-20">
                {/* ── Left column ───────────────────────────────── */}
                <div>
                    <motion.span
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold"
                    >
                        About Me
                    </motion.span>

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl"
                    >
                        Proudly Crafting <br />
                        Digital Experiences <br />
                        <span className="bg-gradient-to-r from-foreground to-violet-500 bg-clip-text text-transparent dark:to-violet-300">
                            Since
                        </span>{" "}
                        <span className="bg-gradient-to-r from-violet-500 to-purple-700 bg-clip-text text-transparent dark:from-violet-300 dark:to-purple-500">
                            {SINCE_YEAR}
                        </span>
                    </motion.h2>

                    <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
                        {/* Stats stack */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative grid shrink-0 grid-cols-3 gap-2 rounded-3xl border border-border bg-card/60 p-2 backdrop-blur sm:flex sm:w-52 sm:flex-col sm:gap-3 sm:p-3"
                        >
                            <span
                                aria-hidden
                                className="absolute bottom-6 left-0 top-6 hidden w-[3px] rounded-full bg-gradient-to-b from-violet-400 via-violet-600 to-violet-400/30 sm:block"
                            />
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="min-w-0 flex-1 rounded-2xl border border-border bg-muted/50 px-3 py-4 dark:bg-white/[0.03] sm:px-5"
                                >
                                    <div className="text-2xl font-extrabold sm:text-3xl">{stat.value}</div>
                                    <div className="mt-1 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-muted-foreground sm:tracking-[0.2em]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Photo card */}
                        {/* Photo card */}
<motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className="relative w-full max-w-sm rounded-[2rem] border border-border bg-card/60 p-3 shadow-[0_20px_60px_-20px_rgba(124,58,237,0.35)] backdrop-blur dark:shadow-[0_0_80px_-10px_rgba(124,58,237,0.45)]"
>
    <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-violet-600">
        <Image
            src={avatar}
            alt={name}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover object-top" // <-- Update here
        />
    </div>
</motion.div>
                    </div>
                </div>

                {/* ── Right column ──────────────────────────────── */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="space-y-5 text-lg leading-relaxed text-muted-foreground"
                    >
                        <p>
                            I&apos;m {name}, a passionate developer focused on building clean, fast, and
                            conversion focused websites. My goal is to create digital experiences that look
                            professional, feel smooth, and help businesses grow online.
                        </p>
                        <p>
                            I work with modern design, responsive layouts, Shopify, eCommerce, and custom web
                            experiences. Every project is handled with clear communication, attention to
                            detail, and a strong focus on quality.
                        </p>
                    </motion.div>

                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {features.map(({ eyebrow, title, description, icon: Icon }, i) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.08 }}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-violet-400/50 dark:bg-white/[0.03] dark:shadow-none"
                            >
                                <span
                                    aria-hidden
                                    className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-violet-400 to-violet-600"
                                />
                                <Icon
                                    aria-hidden
                                    strokeWidth={1.5}
                                    className="absolute right-5 top-5 h-10 w-10 text-foreground/15 transition-colors group-hover:text-violet-500/60"
                                />
                                <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                                    {eyebrow}
                                </div>
                                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <Link
                            href="/experience"
                            className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-3 font-medium text-background transition-opacity hover:opacity-90"
                        >
                            Learn More <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center rounded-full border border-border px-8 py-3 font-semibold transition-colors hover:bg-muted"
                        >
                            View Projects
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
