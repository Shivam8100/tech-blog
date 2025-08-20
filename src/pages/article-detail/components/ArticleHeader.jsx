import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ArticleHeader = ({ article, onBookmark, isBookmarked }) => {
  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-6">
          <span>Home</span>
          <Icon name="ChevronRight" size={16} />
          <span>{article?.category}</span>
          <Icon name="ChevronRight" size={16} />
          <span className="text-text-primary">{article?.title}</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(article?.difficulty)}`}>
            {article?.difficulty}
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
            {article?.category}
          </span>
          {article?.tags?.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-muted text-text-secondary rounded-full text-sm border border-border">
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
          {article?.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          {article?.subtitle}
        </p>

        {/* Article Info */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} className="text-text-secondary" />
              <span className="text-sm text-text-secondary">{article?.publishDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-text-secondary" />
              <span className="text-sm text-text-secondary">{article?.readTime} min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Eye" size={16} className="text-text-secondary" />
              <span className="text-sm text-text-secondary">{article?.views?.toLocaleString()} views</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName={isBookmarked ? "BookmarkCheck" : "Bookmark"}
              iconPosition="left"
              onClick={onBookmark}
            >
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Share2"
              iconPosition="left"
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;