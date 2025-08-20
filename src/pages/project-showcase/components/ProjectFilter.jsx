import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  activeCategory, 
  onCategoryChange, 
  activeStatus, 
  onStatusChange, 
  searchQuery, 
  onSearchChange,
  sortBy,
  onSortChange 
}) => {
  const categories = [
    { id: 'all', name: 'All Projects', icon: 'Grid3X3' },
    { id: 'web', name: 'Web Apps', icon: 'Globe' },
    { id: 'mobile', name: 'Mobile', icon: 'Smartphone' },
    { id: 'api', name: 'APIs', icon: 'Server' },
    { id: 'tools', name: 'Dev Tools', icon: 'Wrench' },
    { id: 'ai', name: 'AI/ML', icon: 'Brain' },
    { id: 'blockchain', name: 'Blockchain', icon: 'Link' }
  ];

  const statuses = [
    { id: 'all', name: 'All Status' },
    { id: 'active', name: 'Active' },
    { id: 'completed', name: 'Completed' },
    { id: 'archived', name: 'Archived' }
  ];

  const sortOptions = [
    { id: 'recent', name: 'Most Recent', icon: 'Clock' },
    { id: 'popular', name: 'Most Popular', icon: 'TrendingUp' },
    { id: 'stars', name: 'Most Stars', icon: 'Star' },
    { id: 'name', name: 'Name A-Z', icon: 'ArrowUpDown' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
        />
        <input
          type="text"
          placeholder="Search projects by name, technology, or description..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-text-primary placeholder-text-secondary"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary"
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>
      {/* Category Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-text-primary mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <Button
              key={category?.id}
              variant={activeCategory === category?.id ? "default" : "outline"}
              size="sm"
              iconName={category?.icon}
              iconPosition="left"
              onClick={() => onCategoryChange(category?.id)}
              className="text-xs"
            >
              {category?.name}
            </Button>
          ))}
        </div>
      </div>
      {/* Status and Sort Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Status Filter */}
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-text-primary">Status:</span>
          <div className="flex space-x-2">
            {statuses?.map((status) => (
              <Button
                key={status?.id}
                variant={activeStatus === status?.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onStatusChange(status?.id)}
                className="text-xs"
              >
                {status?.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-text-primary">Sort by:</span>
          <div className="flex space-x-2">
            {sortOptions?.map((option) => (
              <Button
                key={option?.id}
                variant={sortBy === option?.id ? "default" : "ghost"}
                size="sm"
                iconName={option?.icon}
                iconPosition="left"
                onClick={() => onSortChange(option?.id)}
                className="text-xs"
              >
                {option?.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;