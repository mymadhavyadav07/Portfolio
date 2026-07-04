import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { about, profile } from "@/lib/resume";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />

      <section id="about" className="container-x scroll-mt-24 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">01 / About</p>
          <p className="max-w-3xl text-2xl font-medium leading-[1.35] tracking-[-0.01em] md:text-[34px] md:leading-[1.3]">
            {about}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            {profile.location} · {profile.role}
          </p>
        </Reveal>
      </section>

      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
