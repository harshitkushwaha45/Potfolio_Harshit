import { Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { GithubIcon, LinkedinIcon } from '../components/Icons.jsx';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-pad border-t border-line">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-end">
        <div>
          <h2 id="contact-heading" className="font-display text-4xl font-semibold sm:text-5xl">
            Contact
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Have an opportunity or want to discuss a project? Let&apos;s connect.
          </p>
          <p className="mt-6 text-sm text-muted">Based in {profile.location}.</p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Opportunity via your portfolio')}`}
            className="btn-primary"
          >
            <Mail size={16} aria-hidden="true" />
            Email me
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <LinkedinIcon />
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
