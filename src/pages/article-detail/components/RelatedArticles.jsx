import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RelatedArticles = ({ articles }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="BookOpen" size={20} className="text-primary" />
        <h3 className="text-lg font-semibold text-text-primary">Related Articles</h3>
      </div>
      <div className="space-y-4">
        {articles?.map((article, index) => (
          <Link
            key={index}
            to="/article-detail"
            className="block group hover:bg-hover rounded-lg p-3 transition-colors duration-200"
          >
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={article?.thumbnail}
                    alt={article?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {article?.title}
                </h4>
                <div className="flex items-center space-x-3 mt-2 text-xs text-text-secondary">
                  <span>{article?.readTime} min read</span>
                  <span>•</span>
                  <span>{article?.category}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/search-discovery"
        className="inline-flex items-center space-x-2 text-sm text-primary hover:text-primary/80 mt-4 transition-colors duration-200"
      >
        <span>View all articles</span>
        <Icon name="ArrowRight" size={16} />
      </Link>
    </div>
  );
};

export default RelatedArticles;