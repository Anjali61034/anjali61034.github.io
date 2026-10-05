'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
    BadgeCheck, MapPin, ChevronDown, ChevronLeft, ChevronRight, ArrowUpRight, Globe, Github,
    Home, FileText, Linkedin, Mail, Sun, Moon, ImageIcon,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const { personal } = portfolioData;
const linkedin = personal.socialLinks.find((s) => s.platform === 'LinkedIn')?.url ?? '#';
const github = personal.socialLinks.find((s) => s.platform === 'GitHub')?.url ?? '#';

const experience = [
    { org: 'FT Grails', role: 'Shopify Store Developer', period: 'Aug 2026 - Present', url: 'https://ftgrails.com/' },
    { org: 'Agedarc', role: 'Shopify Store Developer, Full-time', period: 'Aug 2025 - Aug 2026', url: 'https://agedarc.com/' },
    { org: 'Dopamean', role: 'Web Developer Intern', period: 'May 2025 - Jul 2025', url: 'https://dopamean.in/' },
    { org: 'Allbirds', role: 'Shopify Store Developer', period: 'Jan 2025 - Apr 2025', url: 'https://www.allbirds.com/' },
    { org: 'CURE International India Trust', role: 'Full Stack App Developer Intern', period: 'Jan 2025 - Sep 2025' },
    { org: 'Maitreyi College, University of Delhi', role: 'Team Technical Head & Mobile App Developer', period: 'Feb 2025 - Sep 2025' },
];

const education = [
    { org: 'Maitreyi College, University of Delhi', degree: 'B.Sc (Prog.) Physical Science with Computer Science', note: 'CGPA: 7.833/10 · First Division', period: '2023 - 2026' },
    { org: 'Saffron Public School, Faridabad', degree: 'Class XII (CBSE)', note: '85% · PCM, English & Web Application', period: '2023' },
    { org: 'Saffron Public School, Faridabad', degree: 'Class X (CBSE)', note: '89%', period: '2021' },
];

const hardSkills = [
    { name: 'Shopify Development', ring: 'ring-emerald-300' },
    { name: 'Theme Customization', ring: 'ring-emerald-300' },
    { name: 'Full Stack Development', ring: 'ring-blue-300' },
    { name: 'Mobile App Development', ring: 'ring-blue-300' },
    { name: 'UI/UX Design', ring: 'ring-amber-300' },
    { name: 'E-commerce & SEO', ring: 'ring-amber-300' },
];

const softSkills = ['Leadership', 'Problem Solving', 'Communication', 'Teamwork', 'Project Management', 'Technical Writing'];

const projects = [
    { title: 'Agedarc', date: 'Aug 2025', desc: 'Built and launched the Shopify store for a vintage streetwear brand with 115K+ Instagram followers.', image: '/work/agedarc-1.webp', site: 'https://agedarc.com/', tags: ['Shopify', 'Liquid', 'UI/UX'] },
    { title: 'FT Grails', date: 'Aug 2026', desc: 'Building and maintaining a vintage drop store with collection shortcuts and new-arrival grids.', image: '/work/ftgrails-1.webp', site: 'https://ftgrails.com/', tags: ['Shopify', 'Liquid', 'CSS'] },
    { title: 'Allbirds', date: 'Jan 2025', desc: 'Theme customization and storefront components for smoother product presentation and navigation.', image: '/work/allbirds-1.webp', site: 'https://www.allbirds.com/', tags: ['Shopify', 'JavaScript'] },
    { title: 'Dopamean', date: 'May 2025', desc: 'Responsive, cross-browser layouts and UI improvements for a curated archive store.', image: '/work/dopamean-1.webp', site: 'https://dopamean.in/', tags: ['HTML', 'CSS', 'JavaScript'] },
    ...portfolioData.projects.map((p) => ({
        title: p.title, date: p.customTimeline ?? '', desc: p.description, image: p.image, source: p.repoUrl, tags: p.techStack.slice(0, 3),
    })),
] as { title: string; date: string; desc: string; image?: string; site?: string; source?: string; tags: string[] }[];

const highlights = [
    { title: 'Google Cloud Gen AI Study Jams', org: 'Google Cloud & GDG On Campus, Dyal Singh College', note: 'Cloud Fundamentals, Vertex AI, Gemini, Cloud Functions' },
    { title: 'Equinox 2025 – Research Paper', org: 'Maitreyi College, University of Delhi', note: 'Presented "IoT-based AQI Monitoring System for a Sustainable Campus"' },
];

const initials = (s: string) => s.split(/[\s,–-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

function Section({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="mt-16"
        >
            <div className="flex items-end justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                {action}
            </div>
            {children}
        </motion.section>
    );
}

function Chip({ icon, children, className = '' }: { icon?: string; children: React.ReactNode; className?: string }) {
    return (
        <span className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium ${className}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {icon && <img src={icon} alt="" className="h-4 w-4 object-contain" />}
            {children}
        </span>
    );
}

function MoreButton({ href, label, external }: { href: string; label: string; external?: boolean }) {
    return (
        <div className="mt-8 flex justify-center">
            <Link
                href={href}
                target={external ? '_blank' : undefined}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
                {label} <ChevronRight className="h-4 w-4" />
            </Link>
        </div>
    );
}

function Timeline({ items }: { items: { title: string; subtitle: string; note?: string; period: string; url?: string }[] }) {
    return (
        <div className="relative">
            <div className="absolute left-7 top-4 bottom-4 w-px bg-border" />
            <div className="space-y-6">
                {items.map((it) => (
                    <div key={it.title + it.subtitle} className="relative flex items-center gap-4">
                        <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-muted text-sm font-bold text-muted-foreground ring-1 ring-border">
                            {initials(it.title)}
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="font-semibold">
                                {it.url ? (
                                    <a href={it.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                                        {it.title} <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                                    </a>
                                ) : it.title}
                            </div>
                            <div className="text-muted-foreground">{it.subtitle}</div>
                            {it.note && <div className="text-xs text-muted-foreground/80 mt-0.5">{it.note}</div>}
                        </div>
                        <div className="hidden sm:block shrink-0 text-sm text-muted-foreground">{it.period}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Clock() {
    const [time, setTime] = useState('');
    useEffect(() => {
        const tick = () => setTime(new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }).format(new Date()));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);
    return <span className="font-mono tabular-nums">{time}</span>;
}

function GalleryStrip() {
    const [start, setStart] = useState(0);
    const slots = 6;
    return (
        <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[0, 1].map((o) => (
                    <div key={o} className={`aspect-[4/3] rounded-3xl bg-muted flex flex-col items-center justify-center gap-2 text-muted-foreground ${o === 1 ? 'hidden sm:flex' : ''}`}>
                        <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
                        <span className="text-[10px] font-semibold uppercase tracking-widest">Photo {((start + o) % slots) + 1}</span>
                    </div>
                ))}
            </div>
            <button type="button" aria-label="Previous" onClick={() => setStart((s) => (s - 1 + slots) % slots)} className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg">
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Next" onClick={() => setStart((s) => (s + 1) % slots)} className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg">
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    );
}

function Dock() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const item = 'flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background hover:scale-110 transition-transform';
    return (
        <nav className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border bg-background/80 p-2 shadow-xl backdrop-blur-md">
            <Link href="/" aria-label="Home" className={item}><Home className="h-5 w-5" /></Link>
            <Link href="/resume" aria-label="Resume" className={item}><FileText className="h-5 w-5" /></Link>
            <span className="mx-1 h-6 w-px bg-border" />
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={item}><Linkedin className="h-5 w-5" /></a>
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={item}><Github className="h-5 w-5" /></a>
            <a href={`mailto:${personal.email}`} aria-label="Email" className={item}><Mail className="h-5 w-5" /></a>
            <button type="button" aria-label="Toggle theme" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className={item}>
                {mounted && resolvedTheme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
        </nav>
    );
}

export default function WorkspacePage() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <main className="relative min-h-screen bg-background text-foreground pb-40">
            {/* Dotted header texture */}
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-40 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
                style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '6px 6px', color: 'hsl(var(--border))' }}
            />

            <div className="relative mx-auto max-w-3xl px-6 pt-24">
                {/* Header */}
                <header className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                        <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none flex items-center gap-3 flex-wrap">
                            {personal.name}
                            <BadgeCheck className="h-10 w-10 fill-sky-500 text-white" />
                        </h1>
                        <p className="mt-5 text-xl md:text-2xl text-muted-foreground leading-snug">
                            {personal.title} | Building stores, websites & apps people love to use
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-muted-foreground">
                            <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />Available for opportunities</span>
                            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{personal.location}</span>
                            <span className="hidden sm:block h-6 w-px bg-border" />
                            <Clock />
                        </div>
                    </div>
                    <div className="relative shrink-0 self-center sm:self-start">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={personal.avatar} alt={personal.name} className="h-40 w-40 rounded-full object-cover object-top shadow-xl ring-4 ring-background" />
                        <button
                            type="button"
                            aria-label="Quick links"
                            onClick={() => setShowLinks((v) => !v)}
                            className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-md"
                        >
                            <ChevronDown className={`h-5 w-5 transition-transform ${showLinks ? 'rotate-180' : ''}`} />
                        </button>
                        {showLinks && (
                            <div className="absolute right-0 top-full mt-3 z-20 w-48 rounded-2xl border border-border bg-background p-2 shadow-xl">
                                {[['Resume', '/resume'], ['Projects', '/projects'], ['Contact', '/contact']].map(([l, h]) => (
                                    <Link key={h} href={h} className="block rounded-xl px-3 py-2 text-sm hover:bg-muted">{l}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                </header>

                <Section title="About">
                    <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                        I&apos;m a Shopify and Full Stack Developer from Delhi, pursuing a B.Sc in Physical Science with Computer Science at Maitreyi College,
                        University of Delhi. I&apos;ve built and launched Shopify stores for fashion brands like Agedarc and FT Grails, customized storefronts
                        for Allbirds, and developed responsive websites for Dopamean. Beyond e-commerce, I build Android and Flutter apps, from Canary, an
                        indoor navigation app with voice guidance, to UniWay, a campus app live on the Google Play Store. Because I know both code and
                        Shopify, I can create stores and sites that look great, load fast, and turn visitors into customers.
                    </p>
                </Section>

                <Section title="Work Experience">
                    <Timeline items={experience.map((e) => ({ title: e.org, subtitle: e.role, period: e.period, url: e.url }))} />
                    <MoreButton href="/experience" label="View all experience" />
                </Section>

                <Section title="Education">
                    <Timeline items={education.map((e) => ({ title: e.org, subtitle: e.degree, note: e.note, period: e.period }))} />
                </Section>

                <Section title="Skills">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                        {portfolioData.techStack.slice(0, 14).map((t) => <Chip key={t.name} icon={t.icon}>{t.name}</Chip>)}
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mt-8 mb-4">Tools</h3>
                    <div className="flex flex-wrap gap-3">
                        {(portfolioData.tools ?? []).map((t) => <Chip key={t.name} icon={t.icon}>{t.name}</Chip>)}
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mt-8 mb-4">Hard Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {hardSkills.map((s) => <Chip key={s.name} className={`ring-1 ${s.ring}`}>{s.name}</Chip>)}
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mt-8 mb-4">Soft Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {softSkills.map((s) => <Chip key={s}>{s}</Chip>)}
                    </div>
                    <MoreButton href="/skills" label="View all skills" />
                </Section>

                {/* Projects */}
                <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} className="mt-20 text-center">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                        <span className="relative rounded-xl bg-foreground px-5 py-2 text-sm font-semibold text-background">My Projects</span>
                    </div>
                    <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tighter">Check out my latest work</h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                        From Shopify stores for fashion brands to mobile apps and IoT systems, here are a few of my favourites.
                    </p>
                </motion.section>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {projects.map((p) => (
                        <motion.article
                            key={p.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            className="overflow-hidden rounded-2xl border border-border bg-card flex flex-col"
                        >
                            <div className="relative aspect-video bg-muted">
                                {p.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top" />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-muted-foreground"><ImageIcon className="h-8 w-8" /></div>
                                )}
                                <div className="absolute right-3 top-3 flex gap-2">
                                    {p.site && (
                                        <a href={p.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-black/85 px-3 py-1.5 text-sm font-semibold text-white">
                                            <Globe className="h-4 w-4" /> Website
                                        </a>
                                    )}
                                    {p.source && p.source !== '#' && (
                                        <a href={p.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-black/85 px-3 py-1.5 text-sm font-semibold text-white">
                                            <Github className="h-4 w-4" /> Source
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="p-5 text-left flex-1 flex flex-col">
                                <h3 className="text-lg font-semibold">{p.title}</h3>
                                {p.date && <p className="text-xs text-muted-foreground mt-0.5">{p.date}</p>}
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {p.tags.map((t) => <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs">{t}</span>)}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
                <MoreButton href="/projects" label="View all projects" />

                <Section title="Achievements">
                    <Timeline items={highlights.map((h) => ({ title: h.title, subtitle: h.org, note: h.note, period: '' }))} />
                    <MoreButton href="/achievements" label="View all achievements" />
                </Section>

                <Section title="Gallery" action={<Link href="/gallery" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground">View full gallery <ChevronRight className="h-4 w-4" /></Link>}>
                    <GalleryStrip />
                </Section>

                {/* Contact */}
                <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mt-24 rounded-3xl border border-border px-6 pb-10 pt-14 text-center">
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-xl bg-foreground px-5 py-2 text-sm font-semibold text-background">Contact</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Get in Touch</h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                        Want to collaborate or have a question? Reach me on{' '}
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">LinkedIn</a>{' '}
                        or send an <a href={`mailto:${personal.email}`} className="text-sky-500 hover:underline">email</a>. I&apos;m always open to new
                        projects and conversations.
                    </p>
                </motion.section>
            </div>

            <Dock />
        </main>
    );
}