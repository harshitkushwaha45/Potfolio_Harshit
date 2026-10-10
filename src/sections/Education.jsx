import { education } from '../data/portfolio.js';
import SectionTitle from '../components/SectionTitle.jsx';
import Tag from '../components/Tag.jsx';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="section-pad border-t border-line">
      <div className="container-x">
        <SectionTitle id="education" title="Education" />

        <div className="space-y-12">
          {education.map((item) => (
            <div key={item.school} className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
              <div className="text-sm text-muted">
                <p>{item.period}</p>
              </div>

              <div>
                <h3 className="font-display text-3xl font-semibold">{item.degree}</h3>
                <p className="mt-2 text-base font-medium text-ink">{item.school}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>

                <p className="mt-6 text-sm font-medium text-ink">Relevant coursework</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <Tag key={course}>{course}</Tag>
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
