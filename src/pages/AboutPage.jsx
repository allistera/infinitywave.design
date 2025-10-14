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
      </div>

      <div className="about-content">
        <div className="about-section">
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

        <div className="about-section">
          <h2>Residential Work</h2>
          <p>
            Our residential practice ranges from bespoke new-build homes to sensitive renovations of historic
            properties. We work closely with clients to create homes that respond to their lifestyles while
            respecting their surroundings. Whether designing a contemporary family home with views across
            Loch Lomond or transforming a Georgian townhouse in Edinburgh's New Town, we prioritise natural
            light, material quality, and spaces that adapt to changing needs over time.
          </p>
          <p>
            We're particularly experienced in navigating Scotland's planning and conservation regulations,
            helping clients realise ambitious projects within sensitive contexts. Our technical expertise
            in building performance ensures our homes are not only beautiful but comfortable, efficient,
            and built to last.
          </p>
        </div>

        <div className="about-section">
          <h2>Commercial Development</h2>
          <p>
            In the commercial sector, we've delivered projects ranging from boutique hotels and office spaces
            to mixed-use urban developments. We understand that commercial buildings must perform financially
            while creating environments that attract and retain occupants. Our designs balance operational
            efficiency with architectural quality, creating spaces that enhance brand identity and user wellbeing.
          </p>
          <p>
            We specialise in adaptive reuse, breathing new life into underutilised industrial and heritage
            buildings. Our structural engineering capabilities allow us to push boundaries, creating dramatic
            interventions within existing fabric while ensuring safety and longevity. These projects exemplify
            our belief that sustainable development means working with what exists rather than starting from scratch.
          </p>
        </div>

        <div className="about-section">
          <h2>Sustainability</h2>
          <p>
            Environmental responsibility is woven into every decision we make. We design buildings that minimise
            energy consumption through passive strategies, specify materials with low embodied carbon, and create
            resilient structures that will serve multiple generations. Our projects consistently achieve high
            sustainability ratings, but beyond certifications, we're committed to creating buildings that tread
            lightly on the planet while enriching the lives of those who use them.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Today, our studio comprises 18 architects, engineers, and project managers working from our Edinburgh
            office. We're a tight-knit group united by intellectual curiosity and a commitment to craft. Our team
            brings diverse experience from practices across Europe, yet we remain rooted in Scotland, drawing
            inspiration from its landscapes, light, and architectural heritage.
          </p>
          <p>
            We believe in long-term relationships with our clients, consultants, and contractors. Many of our
            projects come through referrals from past clients, a testament to the collaborative, transparent
            approach we bring to every commission. We're not interested in imposing a signature style; instead,
            we listen carefully, think deeply, and design thoughtfully.
          </p>
        </div>
      </div>
    </div>
  );
}
