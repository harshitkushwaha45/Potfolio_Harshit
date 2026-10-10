import { projects } from '../data/portfolio.js';
import SectionTitle from '../components/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-pad border-t border-line">
      <div className="container-x">
        <SectionTitle id="projects" title="Featured projects">
          Two full-stack projects, built and deployed end to end.
        </SectionTitle>

        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
