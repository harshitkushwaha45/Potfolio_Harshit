import { ArrowUpRight } from 'lucide-react';
import Tag from './Tag.jsx';
import { GithubIcon } from './Icons.jsx';

export default function ProjectCard({ project }) {
  const { id, name, summary, features, tech, github, live, backend, backendLabel, mlServices, mlServicesLabel, isMajorProject, note } = project;

  return (
    <article
      aria-labelledby={`${id}-title`}
      className={`rounded-2xl border bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/15 ${
        isMajorProject ? 'border-accent/30 ring-1 ring-accent/20' : 'border-line'
      }`}
    >
      <div className="flex flex-col gap-6 p-6 sm:p-8">
        <div>
          {isMajorProject && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-accent/25">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Final Year Major Project
            </div>
          )}
          <h3 id={`${id}-title`} className="font-display text-3xl font-semibold">
            {name}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{summary}</p>
        </div>

        <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
          {features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {note && <p className="border-l-2 border-accent pl-3 text-sm text-muted">{note}</p>}

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <GithubIcon />
            GitHub
            <span className="sr-only"> repository for {name}</span>
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Live demo
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> for {name}</span>
          </a>
          {backend && (
            <a
              href={backend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted underline-offset-4 transition hover:text-accent hover:underline"
            >
              {backendLabel}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          )}
          {mlServices && (
            <a
              href={mlServices}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted underline-offset-4 transition hover:text-accent hover:underline"
            >
              {mlServicesLabel || 'ML Services on Render'}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
