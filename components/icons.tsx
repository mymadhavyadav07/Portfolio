import type { SVGProps } from "react";

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden {...props}>
      <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.72-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden {...props}>
      <path d="M3.4 5.9H.9V15h2.5V5.9ZM2.1 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm13 8.4c0-2.3-1.2-3.4-2.9-3.4-1.3 0-1.9.7-2.3 1.2V5.9H7.5V15H10v-5c0-.3 0-.5.1-.7.2-.5.6-1 1.4-1 .9 0 1.3.7 1.3 1.8V15h2.5l-.1-5.6Z" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden {...props}>
      <circle cx="8" cy="8" r="6.6" />
      <path d="M1.4 8h13.2M8 1.4c2 2 2 11.2 0 13.2M8 1.4c-2 2-2 11.2 0 13.2" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden {...props}>
      <rect x="0.7" y="0.7" width="14.6" height="10.6" rx="2" />
      <path d="M1.5 1.8 8 6.5l6.5-4.7" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 12 12 4M6 4h6v6" />
    </svg>
  );
}
