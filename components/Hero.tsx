"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profile } from "@/lib/resume";
import { ArrowIcon } from "./icons";

const ShaderBackground = dynamic(() => import("./ShaderBackground"), { ssr: false });

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* warm CSS fallback shown while the WebGL gradient loads */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#ff5005_0%,#dbba95_52%,#d0bce1_100%)]" />
      <ShaderBackground />

      {/* soft scrim so white text stays readable over the light parts of the gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      <div className="container-x relative z-10 py-28 [text-shadow:0_1px_24px_rgba(0,0,0,0.35)]">
        <motion.p custom={0} variants={rise} initial="hidden" animate="show" className="font-mono text-xs uppercase tracking-[0.28em] text-white/85">
          {profile.location} — available for work
        </motion.p>

        <motion.h1
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-4xl text-6xl font-medium leading-[0.95] tracking-[-0.02em] text-white sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
        >
          {profile.role}. {profile.tagline}
        </motion.p>

        <motion.div custom={3} variants={rise} initial="hidden" animate="show" className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-sm text-white/90">
          <a href="#projects" className="link-underline hover:text-white">
            View work <ArrowIcon className="h-3.5 w-3.5" />
          </a>
          <a href="#contact" className="link-underline hover:text-white">Get in touch</a>
          <a href={profile.links.github.url} target="_blank" rel="noopener" className="link-underline hover:text-white">GitHub</a>
          <a href={profile.links.linkedin.url} target="_blank" rel="noopener" className="link-underline hover:text-white">LinkedIn</a>
        </motion.div>
      </div>

      <a href="#about" className="absolute inset-x-0 bottom-7 z-10 mx-auto flex w-max flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
        Scroll
        <span className="animate-floaty">↓</span>
      </a>
    </section>
  );
}
