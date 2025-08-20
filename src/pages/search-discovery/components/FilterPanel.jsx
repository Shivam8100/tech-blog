import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ filters, onFiltersChange, isOpen, onToggle }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const contentTypes = [
    { id: 'tutorial', label: 'Tutorials', count: 45 },
    { id: 'article', label: 'Articles', count: 128 },
    { id: 'guide', label: 'Guides', count: 32 },
    { id: 'review', label: 'Reviews', count: 18 },
    { id: 'opinion', label: 'Opinion Pieces', count: 24 }
  ];

  const difficultyLevels = [
    { id: 'beginner', label: 'Beginner', count: 89 },
    { id: 'intermediate', label: 'Intermediate', count: 156 },
    { id: 'advanced', label: 'Advanced', count: 67 },
    { id: 'expert', label: 'Expert', count: 23 }
  ];

  const technologies = [
    { id: 'react', label: 'React', count: 78 },
    { id: 'javascript', label: 'JavaScript', count: 145 },
    { id: 'typescript', label: 'TypeScript', count: 56 },
    { id: 'nodejs', label: 'Node.js', count: 43 },
    { id: 'python', label: 'Python', count: 67 },
    { id: 'docker', label: 'Docker', count: 34 },
    { id: 'aws', label: 'AWS', count: 29 },
    { id: 'mongodb', label: 'MongoDB', count: 21 }
  ];

  const readingTimes = [
    { id: 'short', label: '< 5 minutes', count: 67 },
    { id: 'medium', label: '5-15 minutes', count: 189 },
    { id: 'long', label: '15-30 minutes', count: 78 },
    { id: 'extended', label: '> 30 minutes', count: 23 }
  ];

  const handleFilterChange = (category, value, checked) => {
    const newFilters = { ...localFilters };
    if (!newFilters?.[category]) {
      newFilters[category] = [];
    }

    if (checked) {
      newFilters[category] = [...newFilters?.[category], value];
    } else {
      newFilters[category] = newFilters?.[category]?.filter(item => item !== value);
    }

    setLocalFilters(newFilters);
  };

  const applyFilters = () => {
    onFiltersChange(localFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      contentTypes: [],
      difficulty: [],
      technologies: [],
      readingTime: [],
      dateRange: 'all'
    };
    setLocalFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  const FilterSection = ({ title, items, category, icon }) => (
    <div className="mb-6">
      <div className="flex items-center space-x-2 mb-3">
        <Icon name={icon} size={16} className="text-primary" />
        <h3 className="font-semibold text-text-primary">{title}</h3>
      </div>
      <div className="space-y-2">
        {items?.map((item) => (
          <div key={item?.id} className="flex items-center justify-between">
            <Checkbox
              label={item?.label}
              checked={localFilters?.[category]?.includes(item?.id) || false}
              onChange={(e) => handleFilterChange(category, item?.id, e?.target?.checked)}
              className="flex-1"
            />
            <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">
              {item?.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          fullWidth
        >
          Filters {Object.values(localFilters)?.flat()?.length > 0 && `(${Object.values(localFilters)?.flat()?.length})`}
        </Button>
      </div>
      {/* Filter Panel */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} bg-card border border-border rounded-lg p-6 sticky top-24`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={20} className="text-primary" />
            <h2 className="text-lg font-semibold text-text-primary">Filters</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-text-secondary hover:text-text-primary"
          >
            Clear All
          </Button>
        </div>

        <div className="space-y-6 max-h-96 overflow-y-auto">
          <FilterSection
            title="Content Type"
            items={contentTypes}
            category="contentTypes"
            icon="FileText"
          />

          <FilterSection
            title="Difficulty"
            items={difficultyLevels}
            category="difficulty"
            icon="BarChart3"
          />

          <FilterSection
            title="Technologies"
            items={technologies}
            category="technologies"
            icon="Code"
          />

          <FilterSection
            title="Reading Time"
            items={readingTimes}
            category="readingTime"
            icon="Clock"
          />

          {/* Date Range */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Icon name="Calendar" size={16} className="text-primary" />
              <h3 className="font-semibold text-text-primary">Date Range</h3>
            </div>
            <select
              value={localFilters?.dateRange || 'all'}
              onChange={(e) => setLocalFilters({ ...localFilters, dateRange: e?.target?.value })}
              className="w-full p-2 border border-border rounded-lg bg-input focus:border-primary focus:outline-none"
            >
              <option value="all">All Time</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="quarter">Past 3 Months</option>
              <option value="year">Past Year</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <Button
            variant="default"
            onClick={applyFilters}
            iconName="Check"
            iconPosition="left"
            fullWidth
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;