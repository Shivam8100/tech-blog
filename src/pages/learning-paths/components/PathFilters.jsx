import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PathFilters = ({ 
  selectedCategory, 
  onCategoryChange, 
  selectedDifficulty, 
  onDifficultyChange,
  selectedStatus,
  onStatusChange,
  searchQuery,
  onSearchChange,
  onClearFilters 
}) => {
  const categories = [
    { value: 'all', label: 'All Categories', icon: 'Grid3X3' },
    { value: 'frontend', label: 'Frontend Development', icon: 'Monitor' },
    { value: 'backend', label: 'Backend Development', icon: 'Server' },
    { value: 'fullstack', label: 'Full Stack', icon: 'Layers' },
    { value: 'mobile', label: 'Mobile Development', icon: 'Smartphone' },
    { value: 'devops', label: 'DevOps & Cloud', icon: 'Cloud' },
    { value: 'data', label: 'Data Science', icon: 'BarChart3' },
    { value: 'ai', label: 'AI & Machine Learning', icon: 'Brain' }
  ];

  const difficulties = [
    { value: 'all', label: 'All Levels' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' }
  ];

  const statuses = [
    { value: 'all', label: 'All Paths' },
    { value: 'not-started', label: 'Not Started' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' }
  ];

  const hasActiveFilters = selectedCategory !== 'all' || selectedDifficulty !== 'all' || selectedStatus !== 'all' || searchQuery?.length > 0;

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          <input
            type="text"
            placeholder="Search learning paths..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-input text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Icon name="X" size={16} />
            </button>
          )}
        </div>
      </div>
      {/* Filter Categories */}
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories?.map((category) => (
              <button
                key={category?.value}
                onClick={() => onCategoryChange(category?.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category?.value
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted text-text-secondary hover:bg-hover hover:text-text-primary'
                }`}
              >
                <Icon name={category?.icon} size={16} />
                <span>{category?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty and Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Difficulty */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3">Difficulty Level</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties?.map((difficulty) => (
                <button
                  key={difficulty?.value}
                  onClick={() => onDifficultyChange(difficulty?.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedDifficulty === difficulty?.value
                      ? 'bg-accent text-accent-foreground shadow-sm'
                      : 'bg-muted text-text-secondary hover:bg-hover hover:text-text-primary'
                  }`}
                >
                  {difficulty?.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3">Progress Status</h3>
            <div className="flex flex-wrap gap-2">
              {statuses?.map((status) => (
                <button
                  key={status?.value}
                  onClick={() => onStatusChange(status?.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedStatus === status?.value
                      ? 'bg-secondary text-secondary-foreground shadow-sm'
                      : 'bg-muted text-text-secondary hover:bg-hover hover:text-text-primary'
                  }`}
                >
                  {status?.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm text-text-secondary">
              Active filters applied
            </span>
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={onClearFilters}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PathFilters;