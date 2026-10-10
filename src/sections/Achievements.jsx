import { achievements, certifications } from '../data/portfolio.js';
import SectionTitle from '../components/SectionTitle.jsx';
import { ExternalLink } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="section-pad border-t border-line">
      <div className="container-x">
        <SectionTitle id="achievements" title="Achievements & certifications" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="text-sm font-medium text-ink">Achievements</h3>
            <ul className="mt-6 space-y-6">
              {achievements.map((a) => (
                <li key={a.title} className="border-t border-line pt-5">
                  <p className="font-display text-2xl font-semibold">{a.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-ink">Certifications</h3>
            <ul className="mt-6 space-y-6">
              {certifications.map((c) => (
                <li key={c.name} className="flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-ink sm:text-lg">{c.name}</p>
                    
                    {c.issuer && (
                      <p className="text-sm font-medium text-ink">
                        {c.issuer}
                      </p>
                    )}
                    
                    {c.collaborator && (
                      <p className="text-sm text-muted">
                        <span className="opacity-75">In collaboration with:</span> {c.collaborator}
                      </p>
                    )}

                    {(c.duration || c.issueDate || c.referenceNumber) && (
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted sm:text-sm">
                        {c.duration && (
                          <span><span className="opacity-75">Duration:</span> {c.duration}</span>
                        )}
                        {c.issueDate && (
                          <span><span className="opacity-75">Issued:</span> {c.issueDate}</span>
                        )}
                        {c.referenceNumber && (
                          <span><span className="opacity-75">Ref:</span> {c.referenceNumber}</span>
                        )}
                      </div>
                    )}
                  </div>

                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-all hover:bg-accent/20"
                    >
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
