import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import useTheme from './hooks/useTheme.js';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import Coding from './sections/Coding.jsx';
import Achievements from './sections/Achievements.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Coding />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}
