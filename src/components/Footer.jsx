import { Code2, Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { GithubIcon, LinkedinIcon } from './Icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: 'GitHub', href: profile.github, icon: GithubIcon, external: true },
    { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon, external: true },
    { label: 'LeetCode', href: profile.leetcode, icon: Code2, external: true },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail, external: false },
  ];

  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
        </div>

        <ul className="flex flex-wrap gap-5 text-sm text-muted">
          {links.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 transition hover:text-accent"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="container-x pb-10 text-xs text-muted">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
