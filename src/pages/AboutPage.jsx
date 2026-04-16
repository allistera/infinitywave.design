import { useSEO } from '../hooks/useSEO';
import './AboutPage.css';

export default function AboutPage() {
  useSEO({
    title: 'About Us | Infinity Wave Design',
    description: 'Learn about Infinity Wave Design, a Scottish architecture, structural engineering, and project management firm based in Edinburgh. Founded in 2015, we deliver sustainable, innovative designs.',
    keywords: 'about Infinity Wave Design, Scottish architecture firm, Edinburgh architects, sustainable design Scotland',
    canonicalUrl: 'https://infinitywave.design/about'
  });

  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="page-title">About Us</h1>
        <p className="about-lead">
          A multidisciplinary studio based in Edinburgh, delivering architecture, engineering,
          and project management across Scotland since 2015.
        </p>
      </div>

      <div className="about-stats">
        <div className="stat">
          <span className="stat-number">2015</span>
          <span className="stat-label">Founded</span>
        </div>
        <div className="stat">
          <span className="stat-number">18+</span>
          <span className="stat-label">Team Members</span>
        </div>
        <div className="stat">
          <span className="stat-number">4</span>
          <span className="stat-label">Disciplines</span>
        </div>
        <div className="stat">
          <span className="stat-number">100+</span>
          <span className="stat-label">Projects Delivered</span>
        </div>
      </div>

      <div className="about-content">
        <div className="about-section about-section--highlight">
          <h2>Our Story</h2>
          <p>
            Founded in 2015 in Edinburgh, Infinity Wave Design emerged from a shared vision between three
            colleagues who met while working on the restoration of a Victorian railway station in Glasgow.
            What began as late-night conversations about creating a practice that balanced technical excellence
            with creative ambition has grown into a multidisciplinary studio serving clients across Scotland.
          </p>
          <p>
            Our name reflects our philosophy: infinity represents our commitment to timeless design that
            transcends trends, while wave captures the fluid, adaptive nature of our approach to each unique
            project. We believe that great architecture emerges from the intersection of vision, pragmatism,
            and deep understanding of place.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Approach</h2>
          <p>
            We work across residential and commercial sectors, treating each project as an opportunity to
            enhance how people live and work. From private homes in the Highlands to mixed-use developments
            in city centres, our projects share a common thread: careful attention to context, sustainability,
            and the human experience of space.
          </p>
          <p>
            Our integrated approach brings architecture, structural engineering, and project management under
            one roof. This allows us to maintain design integrity from concept through completion, ensuring
            that our clients' visions are realised without compromise. We believe the best buildings emerge
            when aesthetic ambition and technical expertise inform each other from day one.
          </p>
        </div>

        <div className="about-disciplines">
          <div className="discipline-card">
            <h3>Residential</h3>
            <p>
              Bespoke new-build homes to sensitive renovations of historic properties. We prioritise
              natural light, material quality, and spaces that adapt to changing needs over time.
            </p>
          </div>
          <div className="discipline-card">
            <h3>Commercial</h3>
            <p>
              Boutique hotels, office spaces, and mixed-use urban developments that balance
              operational efficiency with architectural quality and user wellbeing.
            </p>
          </div>
          <div className="discipline-card">
            <h3>Heritage</h3>
            <p>
              Adaptive reuse and conservation projects that breathe new life into industrial
              and heritage buildings while preserving their historic character.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
