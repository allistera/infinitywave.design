import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="not-found">
          <h1>Project not found</h1>
          <Link to="/" className="back-link">← Back to projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <Link to="/" className="back-link">← Back to projects</Link>

      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-meta">
          <span>{project.location}</span>
          <span>·</span>
          <span>{project.year}</span>
          <span>·</span>
          <span className="project-category">
            {project.category.split('-').map(word =>
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </span>
        </div>
      </div>

      <div className="project-images">
        {project.images.map((image, index) => (
          <div key={index} className="project-image">
            <img src={image} alt={`${project.title} - Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="project-description">
          <h2>{project.description}</h2>
        </div>
        <div
          className="project-text"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </div>
    </div>
  );
}
