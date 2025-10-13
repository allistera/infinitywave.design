import './FilterBar.css';

export default function FilterBar({ selectedFilter, onFilterChange, filterType = 'category' }) {
  const categoryFilters = [
    { id: 'all', label: 'All Projects' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'structural-engineering', label: 'Structural Engineering' },
    { id: 'project-management', label: 'Project Management' },
    { id: 'interior-design', label: 'Interior Design' }
  ];

  const typeFilters = [
    { id: 'all', label: 'All Types' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interior-design', label: 'Interior Design' }
  ];

  const filters = filterType === 'type' ? typeFilters : categoryFilters;

  return (
    <div className="filter-bar">
      {filters.map(filter => (
        <button
          key={filter.id}
          className={`filter-button ${selectedFilter === filter.id ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
