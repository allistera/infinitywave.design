import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/projects';
import { useSEO } from '../hooks/useSEO';
import './ProjectDetailPage.css';

function ProjectSchema({ project }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.metaDescription,
    locationCreated: {
      '@type': 'Place',
      name: project.location,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
        addressRegion: 'Scotland',
        addressLocality: project.location.split(',')[0]
      }
    },
    dateCreated: String(project.year),
    creator: {
      '@type': 'Organization',
      name: 'Infinity Wave Design',
      url: 'https://infinitywave.design'
    },
    keywords: [project.category, project.type, 'Scotland', 'architecture'].join(', '),
    url: `https://infinitywave.design/projects/${project.slug}`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function NotFound() {
  useSEO({ title: 'Page Not Found | Infinity Wave Design', noindex: true });
  return (
    <div className="project-detail-page">
      <div className="not-found">
        <h1>Project not found</h1>
        <Link to="/" className="back-link">← Back to projects</Link>
      </div>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useSEO(project ? {
    title: `${project.title} | Infinity Wave Design`,
    description: project.metaDescription,
    keywords: `${project.title}, ${project.category}, ${project.location}, Infinity Wave Design, Scotland`,
    canonicalUrl: `https://infinitywave.design/projects/${project.slug}`
  } : { noindex: true });

  useEffect(() => {
    if (!project) return;
    const existing = document.getElementById('project-schema');
    if (existing) existing.remove();
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  const categoryLabel = project.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="project-detail-page">
      <ProjectSchema project={project} />

      <Link to="/" className="back-link">← Back to projects</Link>

      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-meta">
          <span>{project.location}</span>
          <span>·</span>
          <span>{project.year}</span>
          <span>·</span>
          <span className="project-category">{categoryLabel}</span>
        </div>
      </div>

      <div className="project-images">
        {project.images.map((image, index) => (
          <div key={index} className="project-image">
            <img
              src={image}
              alt={project.imageAlt?.[index] ?? `${project.title} — image ${index + 1}`}
            />
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

      <div className="project-related">
        <p>
          Interested in our{' '}
          <Link to={`/?category=${project.category}`}>{categoryLabel}</Link> work?{' '}
          <Link to="/contact">Get in touch</Link> to discuss your project.
        </p>
      </div>
    </div>
  );
}
