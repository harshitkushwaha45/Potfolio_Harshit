import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on Escape and lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-line/70 bg-bg/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#home" onClick={closeMenu} className="font-display text-xl font-semibold">
          Harshit Kushwaha
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted transition duration-200 hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="btn-ghost hidden !py-2 sm:inline-flex"
          >
            <Download size={15} aria-hidden="true" />
            Resume
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition duration-200 hover:border-accent lg:hidden"
          >
            {open ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg/95 backdrop-blur-md lg:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base text-ink transition hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <a href={profile.resumeUrl} download className="btn-primary mt-3">
              <Download size={15} aria-hidden="true" />
              Download resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
