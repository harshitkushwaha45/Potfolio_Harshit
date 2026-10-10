import { about } from '../data/portfolio.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-pad border-t border-line">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <SectionTitle id="about" title="About" />

        <div className="-mt-12 space-y-6 lg:mt-0">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
              {p}
            </p>
          ))}

          <dl className="grid gap-x-8 gap-y-6 pt-6 sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div key={fact.label} className="border-t border-line pt-4">
                <dt className="text-sm font-medium text-ink">{fact.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
