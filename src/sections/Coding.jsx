import { Code2 } from 'lucide-react';
import { coding, profile } from '../data/portfolio.js';
import SectionTitle from '../components/SectionTitle.jsx';
import Tag from '../components/Tag.jsx';

export default function Coding() {
  return (
    <section id="coding" aria-labelledby="coding-heading" className="section-pad border-t border-line">
      <div className="container-x">
        <SectionTitle id="coding" title="DSA & coding">
          {coding.summary}
        </SectionTitle>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-sm font-medium text-ink">Topics</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {coding.topics.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-sm font-medium text-ink">Problems practiced</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {coding.problems.map((p) => (
                <li key={p}>
                  <Tag>{p}</Tag>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
              <p className="text-sm text-muted">{coding.stat}</p>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Code2 size={16} aria-hidden="true" />
                LeetCode profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
