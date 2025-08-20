import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SearchResults = ({ results, loading, searchQuery, sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'date', label: 'Newest First' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'reading-time', label: 'Reading Time' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getContentTypeIcon = (type) => {
    switch (type) {
      case 'tutorial': return 'BookOpen';
      case 'article': return 'FileText';
      case 'guide': return 'Map';
      case 'review': return 'Star';
      case 'opinion': return 'MessageCircle';
      default: return 'FileText';
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(5)]?.map((_, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 animate-pulse">
            <div className="flex space-x-4">
              <div className="w-24 h-24 bg-muted rounded-lg"></div>
              <div className="flex-1 space-y-3">
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
                <div className="flex space-x-2">
                  <div className="h-6 bg-muted rounded w-16"></div>
                  <div className="h-6 bg-muted rounded w-20"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Articles'}
          </h2>
          <p className="text-text-secondary mt-1">
            Found {results?.length} articles
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Icon name="ArrowUpDown" size={16} className="text-text-secondary" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="px-3 py-2 border border-border rounded-lg bg-input focus:border-primary focus:outline-none text-sm"
          >
            {sortOptions?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Results List */}
      {results?.length === 0 ? (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text-primary mb-2">No results found</h3>
          <p className="text-text-secondary">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {results?.map((article) => (
            <article key={article?.id} className="interactive-card group">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Article Image */}
                <div className="w-full sm:w-32 h-32 flex-shrink-0">
                  <Image
                    src={article?.image}
                    alt={article?.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {article?.title}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Bookmark"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>

                  <p className="text-text-secondary line-clamp-2">
                    {article?.excerpt}
                  </p>

                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name={getContentTypeIcon(article?.type)} size={14} className="text-text-secondary" />
                      <span className="text-text-secondary capitalize">{article?.type}</span>
                    </div>

                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article?.difficulty)}`}>
                      {article?.difficulty}
                    </span>

                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} className="text-text-secondary" />
                      <span className="text-text-secondary">{article?.readingTime} min read</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} className="text-text-secondary" />
                      <span className="text-text-secondary">{article?.publishedDate}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} className="text-text-secondary" />
                      <span className="text-text-secondary">{article?.views} views</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article?.tags?.slice(0, 4)?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                    {article?.tags?.length > 4 && (
                      <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full">
                        +{article?.tags?.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Key Takeaways */}
                  {article?.keyTakeaways && (
                    <div className="bg-muted p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-text-primary mb-2 flex items-center">
                        <Icon name="Lightbulb" size={14} className="mr-1" />
                        Key Takeaways
                      </h4>
                      <ul className="text-sm text-text-secondary space-y-1">
                        {article?.keyTakeaways?.slice(0, 2)?.map((takeaway, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
      {/* Load More */}
      {results?.length > 0 && (
        <div className="text-center pt-8">
          <Button
            variant="outline"
            iconName="ChevronDown"
            iconPosition="right"
          >
            Load More Results
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;