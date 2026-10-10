import { motion } from 'framer-motion';
import { Code2, Download, GraduationCap, Building2, Award, Calendar, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import { snapshot } from '../data/portfolio.js';
import { GithubIcon, LinkedinIcon } from '../components/Icons.jsx';

const ease = [0.22, 1, 0.36, 1];

const iconMap = {
  education: GraduationCap,
  college: Building2,
  cgpa: Award,
  year: Calendar,
  focus: Code2,
  location: MapPin,
};

function ProfileCard() {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-line bg-surface shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
      {/* Background glow effects */}
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />

      <div className="relative p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-line pb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink">Quick Snapshot</h3>
            <p className="mt-1 text-sm text-muted">My academic and professional focus</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
            <Code2 size={24} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {snapshot.map(({ key, value }, index) => {
            const Icon = iconMap[key] || Code2;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-line bg-bg/50 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-line to-transparent text-muted shadow-sm ring-1 ring-line">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">{key}</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-ink">{value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-accent/10 px-4 py-4 text-sm font-semibold text-accent ring-1 ring-accent/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
          </span>
          Preparing for software engineering placements
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-name" className="relative pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <h1
            id="hero-name"
            className="font-playfair text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Harshit
            <br />
            Kushwaha
          </h1>

          <p className="mt-6 text-lg font-medium text-ink sm:text-xl">{profile.role}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View projects
            </a>
            <a href={profile.resumeUrl} download className="btn-ghost">
              <Download size={16} aria-hidden="true" />
              Download resume
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-accent"
              >
                <GithubIcon />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-accent"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-accent"
              >
                <Code2 size={16} aria-hidden="true" />
                LeetCode
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}
