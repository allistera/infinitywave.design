import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function NotFoundPage() {
  useSEO({ title: 'Page Not Found | Infinity Wave Design', noindex: true });

  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Page Not Found</h1>
      <p style={{ margin: '1rem 0 2rem', color: 'var(--color-text-secondary)' }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" style={{ color: 'var(--color-text-primary)' }}>← Back to projects</Link>
    </div>
  );
}
