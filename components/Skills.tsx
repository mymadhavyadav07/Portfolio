import Reveal from "./Reveal";
import { skills } from "@/lib/resume";

export default function Skills() {
  return (
    <section id="skills" className="container-x scroll-mt-24 py-24 md:py-32">
      <Reveal>
        <p className="eyebrow">04 / Skills</p>
        <h2 className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">Toolkit</h2>
      </Reveal>

      <div className="mt-14">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.03}>
            <div className="hairline grid gap-x-8 gap-y-3 py-8 md:grid-cols-[220px_1fr]">
              <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="chip">{it}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
