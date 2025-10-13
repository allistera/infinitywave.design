import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Infinity Wave Design</h4>
          <p>Architecture, Structural Engineering & Project Management</p>
          <p>Based in Scotland</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <a href="mailto:hey@infinitywave.design">hey@infinitywave.design</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Infinity Wave Design. All rights reserved.</p>
      </div>
    </footer>
  );
}
