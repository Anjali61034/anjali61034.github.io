"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    PenTool, MonitorSmartphone, Code2, DatabaseZap, Wrench, ShoppingCart,
    Search, BarChart3, FileText, FilePen, Shapes, Megaphone, type LucideIcon,
} from "lucide-react";

type Service = { name: string; icon: LucideIcon; color: string };

// Row 1
const techStackItems: Service[] = [
    { name: "Web Design", icon: PenTool, color: "text-sky-500" },
    { name: "Responsive Design", icon: MonitorSmartphone, color: "text-teal-500" },
    { name: "Web Development", icon: Code2, color: "text-violet-500" },
    { name: "Bug Fixing", icon: DatabaseZap, color: "text-indigo-500" },
    { name: "Maintenance", icon: Wrench, color: "text-fuchsia-500" },
    { name: "E-commerce", icon: ShoppingCart, color: "text-emerald-500" },
];

// Row 2
const toolItems: Service[] = [
    { name: "SEO Optimization", icon: Search, color: "text-cyan-500" },
    { name: "Speed Optimization", icon: BarChart3, color: "text-green-500" },
    { name: "Content Management", icon: FileText, color: "text-rose-500" },
    { name: "Blog Setup", icon: FilePen, color: "text-orange-500" },
    { name: "Logo Design", icon: Shapes, color: "text-blue-500" },
    { name: "Social Branding", icon: Megaphone, color: "text-pink-500" },
];

const ScrollerItem = ({ name, icon: Icon, color }: Service) => (
    <div className="flex items-center gap-4 px-12 py-4 transition-all duration-300 group">
        <div className="relative w-10 h-10 flex-shrink-0 transition-all duration-500">
            <Icon className={cn("w-full h-full", color)} strokeWidth={1.75} aria-hidden />
        </div>
        <p className="text-xl font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {name}
        </p>
    </div>
);

export const BrandScroller = () => {
    return (
        <div className="relative flex overflow-hidden py-2 w-full px-8 md:px-16 lg:px-24 [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            <motion.div
                animate={{
                    x: ["-50%", "0%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap"
            >
                {/* Render twice for seamless loop */}
                <div className="flex shrink-0">
                    {techStackItems.map((item, idx) => (
                        <ScrollerItem key={`tech-1-${idx}`} {...item} />
                    ))}
                </div>
                <div className="flex shrink-0">
                    {techStackItems.map((item, idx) => (
                        <ScrollerItem key={`tech-2-${idx}`} {...item} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export const BrandScrollerReverse = () => {
    return (
        <div className="relative flex overflow-hidden py-2 w-full px-8 md:px-16 lg:px-24 [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            <motion.div
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap"
            >
                {/* Render twice for seamless loop */}
                <div className="flex shrink-0">
                    {toolItems.map((item, idx) => (
                        <ScrollerItem key={`tool-1-${idx}`} {...item} />
                    ))}
                </div>
                <div className="flex shrink-0">
                    {toolItems.map((item, idx) => (
                        <ScrollerItem key={`tool-2-${idx}`} {...item} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
