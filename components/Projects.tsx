import Reveal from "./Reveal";
import { projects } from "@/lib/resume";
import { ArrowIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="container-x scroll-mt-24 py-24 md:py-32">
      <Reveal>
        <p className="eyebrow">03 / Projects</p>
        <h2 className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">Selected work</h2>
      </Reveal>

      <div className="mt-14">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <article className="hairline group grid gap-x-8 gap-y-4 py-10 md:grid-cols-[180px_1fr]">
              <div className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">
                {p.featured ? "Featured" : `Project ${String(i + 1).padStart(2, "0")}`}
              </div>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-tight">{p.name}</h3>
                  {p.link && (
                    <a
                      href={p.link.url}
                      target="_blank"
                      rel="noopener"
                      aria-label={`${p.name} — ${p.link.label}`}
                      className="mt-1 shrink-0 rounded-full border p-2 text-ink/70 transition-colors hover:border-ink hover:text-ink"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <ArrowIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <p className="mt-3 max-w-2xl leading-relaxed text-ink/75">{p.blurb}</p>

                {p.points && (
                  <ul className="mt-4 space-y-1.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-[var(--muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
