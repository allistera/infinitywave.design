import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-card-image">
        <img src={project.thumbnail} alt={project.title} />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-meta">
          {project.location} · {project.year}
        </p>
        <p className="project-card-description">{project.description}</p>
      </div>
    </Link>
  );
}
