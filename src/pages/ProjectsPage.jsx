import { useState, useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import FilterBar from '../components/FilterBar';
import './ProjectsPage.css';

export default function ProjectsPage() {
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  useSEO({
    title: 'Infinity Wave Design | Architecture, Engineering & Project Management Scotland',
    description: 'Scottish architecture, structural engineering, and project management firm. Delivering sustainable, innovative designs for residential and commercial projects across Edinburgh, Glasgow, and Scotland.',
    keywords: 'architecture Scotland, structural engineering Edinburgh, project management Glasgow, Scottish architects, sustainable design, residential architecture, commercial architecture, interior design',
    canonicalUrl: 'https://infinitywave.design'
  });

  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const filteredProjects = projects.filter(project => {
    const typeMatch = selectedTypeFilter === 'all' || project.type === selectedTypeFilter;
    return typeMatch;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  return (
    <div className="projects-page">
      {featuredProjects.length > 0 && (
        <div className="hero-section">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${project.thumbnail})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="hero-title">{project.title}</h1>
                  <p className="hero-location">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="hero-indicators">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="page-header">
        <h1 className="page-title">Infinity Wave Design</h1>
        <p className="page-subtitle">
          Based in Scotland, we deliver comprehensive architectural solutions across three core disciplines
        </p>
      </div>

      <div className="services-section">
        <div className="service">
          <h3>Architecture</h3>
          <p>
            We create innovative, sustainable designs that respond to context and client vision.
            From concept through completion, our architectural practice focuses on spaces that enhance
            human experience while respecting environmental and cultural heritage.
          </p>
        </div>
        <div className="service">
          <h3>Structural Engineering</h3>
          <p>
            Our engineering team delivers robust, efficient structural solutions for new builds and
            heritage restorations. We combine advanced analysis with practical construction knowledge
            to ensure safety, longevity, and buildability.
          </p>
        </div>
        <div className="service">
          <h3>Project Management</h3>
          <p>
            We provide end-to-end project delivery, coordinating all stakeholders from inception to handover.
            Our approach ensures projects are delivered on time, within budget, and to the highest quality standards.
          </p>
        </div>
        <div className="service">
          <h3>Interior Design</h3>
          <p>
            Our interior design service creates thoughtfully curated spaces that balance aesthetics with functionality.
            We develop material palettes, custom furniture, and lighting strategies that enhance the architectural vision
            while reflecting our clients' personalities and lifestyles.
          </p>
        </div>
      </div>

      <div className="projects-section-header">
        <h2>Projects</h2>
      </div>

      <div className="filter-section">
        <div className="filter-label">Filter by type:</div>
        <FilterBar
          selectedFilter={selectedTypeFilter}
          onFilterChange={setSelectedTypeFilter}
          filterType="type"
        />
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
