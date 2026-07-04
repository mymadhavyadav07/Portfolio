"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b bg-paper/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
      style={scrolled ? { borderColor: "var(--line)" } : undefined}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight">
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-accent">.</span>
        </a>

        <ul
          className={`hidden items-center gap-8 font-mono text-[13px] transition-colors duration-300 md:flex ${
            scrolled ? "text-[var(--muted)]" : "text-white/85"
          }`}
        >
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className={`transition-colors ${scrolled ? "hover:text-ink" : "hover:text-white"}`}>
                <span className={`transition-colors duration-300 ${scrolled ? "text-accent" : "text-black"}`}>0{i + 1}</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={profile.resumeUrl} target="_blank" rel="noopener" className="btn btn-outline !px-4 !py-1.5 text-[13px]">
          Résumé
        </a>
      </nav>
    </header>
  );
}
