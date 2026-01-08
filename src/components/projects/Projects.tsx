import type { Project } from "../../utils/types";
import "./project.css"
 export const Projects: React.FC = () => {
const projects: Project[] = [
  {
    id: 1,
    title: 'Budget Tracker Application',
    description:
      'A full-featured budget tracking application that allows users to manage incomes, expenses, categories, and budgets. Includes real-time tracking, analytics, and secure user authentication.',
    technologies: ['React', 'TypeScript', 'CSS', 'Node.js'],
    image: '/image-1.png',
    link: 'https://wiltrack.netlify.app/'
  },
  {
    id: 2,
    title: 'Blogger Platform',
    description:
      'A blogging platform where users can create, edit, and delete blog posts, manage content through authentication, and enjoy a clean, responsive user experience.',
    technologies: ['React', 'Firebase', 'Material UI'],
    image: '/image-2.png',
    link: 'https://extraordinary-centaur-dbec60.netlify.app/'
  },
  {
    id: 3,
    title: 'Admin Dashboard Application',
    description:
      'A modern dashboard application designed to visualize data, manage user interactions, and display key metrics using an intuitive, responsive interface.',
    technologies: ['JavaScript', 'API Integration', 'CSS'],
    image: '/image-3.png',
    link: 'https://dashboard-saas-39xhynyis-wilideparisdenodes-projects.vercel.app'
  }
];

  return (
<section className="projects">
  <h2 className="projects-title">My Projects</h2>

  <div className="projects-grid">
    {projects.map(project => (
      <div key={project.id} className="project-card">
        
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>

          <a
            href={project.link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>

      </div>
    ))}
  </div>
</section>

  );
};