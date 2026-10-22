"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export const HardSkills = () => {
  return (
    <section id="profile" className="w-full bg-background pt-32 md:pt-40 lg:pt-52 pb-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">

        {/* Profile Image Column */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center md:justify-end"
        >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                    src={portfolioData.personal.avatar}
                    alt={portfolioData.personal.name}
                    className="object-cover object-top w-full h-full"
                />
            </div>
        </motion.div>

        {/* Text Content Column */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full text-center md:text-left space-y-6"
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-foreground">
                Hi, I'm <span className="text-primary">{portfolioData.personal.name}</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground font-medium">
                {portfolioData.personal.title}
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg mx-auto md:mx-0">
                {portfolioData.personal.bio}
            </p>
        </motion.div>

      </div>
    </section>
  );
};

export default HardSkills;
