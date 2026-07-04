import Reveal from "./Reveal";
import { profile } from "@/lib/resume";

export default function Contact() {
  const socials = [
    { label: "Email", value: profile.email, url: `mailto:${profile.email}` },
    { label: "GitHub", value: profile.links.github.label, url: profile.links.github.url },
    { label: "LinkedIn", value: profile.links.linkedin.label, url: profile.links.linkedin.url },
    { label: "Portfolio", value: profile.links.portfolio.label, url: profile.links.portfolio.url },
  ];

  return (
    <section id="contact" className="container-x scroll-mt-24 py-24 md:py-36">
      <Reveal>
        <p className="eyebrow">05 / Contact</p>
        <h2 className="max-w-3xl text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl">
          Let&apos;s build something worth shipping.
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-ink/70">
          Open to roles and collaborations in applied AI and platform engineering. Email is the fastest way to reach me.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn btn-solid">Say hello</a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener" className="btn btn-outline">Download résumé</a>
        </div>
      </Reveal>

      <div className="mt-16">
        {socials.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.04}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener"
              className="hairline group flex items-center justify-between py-5 transition-colors hover:text-accent"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] group-hover:text-accent">
                {s.label}
              </span>
              <span className="text-lg">{s.value}</span>
            </a>
          </Reveal>
        ))}

        <footer className="hairline mt-4 flex flex-col items-start justify-between gap-2 py-8 font-mono text-xs text-[var(--muted)] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Next.js · Tailwind · shadergradient</span>
        </footer>
      </div>
    </section>
  );
}
