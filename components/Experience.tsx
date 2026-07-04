import Reveal from "./Reveal";
import { experiences, education } from "@/lib/resume";

export default function Experience() {
  return (
    <section id="experience" className="container-x scroll-mt-24 py-24 md:py-32">
      <Reveal>
        <p className="eyebrow">02 / Work</p>
        <h2 className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">Experience</h2>
      </Reveal>

      <div className="mt-14">
        {experiences.map((e, i) => (
          <Reveal key={e.org} delay={i * 0.05}>
            <article className="hairline grid gap-x-8 gap-y-4 py-10 md:grid-cols-[180px_1fr]">
              <div className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">{e.period}</div>
              <div>
                <h3 className="text-xl font-medium">
                  {e.role} <span className="text-[var(--muted)]">— {e.org}</span>
                </h3>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-ink/75">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        {education.map((ed, i) => (
          <Reveal key={ed.title} delay={(experiences.length + i) * 0.05}>
            <article className="hairline grid gap-x-8 gap-y-2 py-10 md:grid-cols-[180px_1fr]">
              <div className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">{ed.period}</div>
              <h3 className="text-xl font-medium">
                {ed.title} <span className="text-[var(--muted)]">— {ed.org}</span>
              </h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
