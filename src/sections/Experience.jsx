import { experience } from '../data/portfolio.js';
import SectionTitle from '../components/SectionTitle.jsx';
import Tag from '../components/Tag.jsx';
import { ExternalLink } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-pad border-t border-line">
      <div className="container-x">
        <SectionTitle id="experience" title="Experience" />

        <div className="space-y-12">
          {experience.map((job) => (
            <div key={`${job.org}-${job.role}`} className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
              <div className="text-sm text-muted">
                <p>{job.period}</p>
                <p className="mt-1">{job.location}</p>
              </div>

              <div>
                <h3 className="font-display text-3xl font-semibold">{job.role}</h3>
                <p className="mt-2 text-base font-medium text-ink">
                  {job.org} · {job.program}
                </p>
                {job.certificateUrl && (
                  <div className="mt-4">
                    <a href={job.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-all hover:bg-accent/20">
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
