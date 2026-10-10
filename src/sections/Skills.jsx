import { skillGroups, learningAreas } from '../data/portfolio.js';
import SectionTitle from '../components/SectionTitle.jsx';
import Tag from '../components/Tag.jsx';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-pad border-t border-line">
      <div className="container-x">
        <SectionTitle id="skills" title="Skills">
          The stack I use day to day, plus the fundamentals behind my problem solving.
        </SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:border-accent/40"
            >
              <h3 className="text-sm font-medium text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-2xl border border-dashed border-line p-6 sm:col-span-2 lg:col-span-3">
            <h3 className="text-sm font-medium text-ink">Areas of learning</h3>
            <p className="mt-1 text-sm text-muted">
              Studied and exploring. These are not presented as production experience.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {learningAreas.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
