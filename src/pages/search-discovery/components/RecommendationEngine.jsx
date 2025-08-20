import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendationEngine = ({ onArticleClick }) => {
  const [activeTab, setActiveTab] = useState('personalized');

  const personalizedRecommendations = [
    {
      id: 1,
      title: "Advanced React Patterns: Compound Components and Render Props",
      excerpt: "Deep dive into advanced React patterns that will make your components more flexible and reusable.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      readingTime: 12,
      difficulty: "advanced",
      tags: ["React", "JavaScript", "Patterns"],
      matchReason: "Based on your interest in React and component architecture",
      confidence: 95
    },
    {
      id: 2,
      title: "TypeScript Best Practices for Large Scale Applications",
      excerpt: "Learn how to structure and maintain TypeScript codebases that scale with your team and project.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      readingTime: 15,
      difficulty: "intermediate",
      tags: ["TypeScript", "Architecture", "Best Practices"],
      matchReason: "Recommended based on your TypeScript reading history",
      confidence: 88
    },
    {
      id: 3,
      title: "Building Microservices with Node.js and Docker",
      excerpt: "A comprehensive guide to designing, building, and deploying microservices architecture.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
      readingTime: 18,
      difficulty: "advanced",
      tags: ["Node.js", "Docker", "Microservices"],
      matchReason: "Similar to articles you\'ve bookmarked",
      confidence: 82
    }
  ];

  const similarReaders = [
    {
      id: 1,
      title: "GraphQL vs REST: A Comprehensive Comparison",
      excerpt: "Understand the key differences and when to choose each approach for your API design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      readingTime: 10,
      difficulty: "intermediate",
      tags: ["GraphQL", "REST", "API Design"],
      readBy: "Developers with similar interests",
      popularity: 94
    },
    {
      id: 2,
      title: "Optimizing React Performance: A Complete Guide",
      excerpt: "Learn advanced techniques to make your React applications faster and more efficient.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      readingTime: 14,
      difficulty: "intermediate",
      tags: ["React", "Performance", "Optimization"],
      readBy: "React developers like you",
      popularity: 91
    }
  ];

  const trendingContent = [
    {
      id: 1,
      title: "The Future of Web Development: What\'s Coming in 2024",
      excerpt: "Explore the emerging trends and technologies that will shape web development.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=200&fit=crop",
      readingTime: 8,
      difficulty: "beginner",
      tags: ["Web Development", "Trends", "Future"],
      trendScore: 98,
      views: 15420
    },
    {
      id: 2,
      title: "AI-Powered Development Tools: Boosting Productivity",
      excerpt: "Discover how AI tools are revolutionizing the way developers write and maintain code.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
      readingTime: 11,
      difficulty: "intermediate",
      tags: ["AI", "Development Tools", "Productivity"],
      trendScore: 95,
      views: 12890
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const RecommendationCard = ({ article, showReason = false, showPopularity = false, showTrending = false }) => (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-medium transition-all duration-200 group cursor-pointer"
         onClick={() => onArticleClick(article)}>
      <div className="flex space-x-4">
        <div className="w-20 h-20 flex-shrink-0">
          <Image
            src={article?.image}
            alt={article?.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {article?.title}
          </h3>
          
          <p className="text-sm text-text-secondary line-clamp-2">
            {article?.excerpt}
          </p>
          
          <div className="flex items-center space-x-3 text-xs">
            <span className={`px-2 py-1 rounded-full font-medium ${getDifficultyColor(article?.difficulty)}`}>
              {article?.difficulty}
            </span>
            
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} className="text-text-secondary" />
              <span className="text-text-secondary">{article?.readingTime} min</span>
            </div>
            
            {showTrending && (
              <div className="flex items-center space-x-1">
                <Icon name="TrendingUp" size={12} className="text-green-600" />
                <span className="text-green-600">{article?.views?.toLocaleString()} views</span>
              </div>
            )}
            
            {showPopularity && (
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={12} className="text-text-secondary" />
                <span className="text-text-secondary">{article?.popularity}% match</span>
              </div>
            )}
          </div>
          
          {showReason && article?.matchReason && (
            <div className="flex items-center space-x-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
              <Icon name="Lightbulb" size={12} />
              <span>{article?.matchReason}</span>
            </div>
          )}
          
          {showPopularity && article?.readBy && (
            <div className="flex items-center space-x-1 text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
              <Icon name="Users" size={12} />
              <span>{article?.readBy}</span>
            </div>
          )}
          
          <div className="flex flex-wrap gap-1">
            {article?.tags?.slice(0, 3)?.map((tag) => (
              <span key={tag} className="text-xs bg-muted text-text-secondary px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {showReason && article?.confidence && (
          <div className="flex flex-col items-center justify-center">
            <div className="text-xs text-text-secondary mb-1">Match</div>
            <div className="text-lg font-bold text-primary">{article?.confidence}%</div>
          </div>
        )}
      </div>
    </div>
  );

  const tabs = [
    { id: 'personalized', label: 'For You', icon: 'User', count: personalizedRecommendations?.length },
    { id: 'similar', label: 'Similar Readers', icon: 'Users', count: similarReaders?.length },
    { id: 'trending', label: 'Trending', icon: 'TrendingUp', count: trendingContent?.length }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Brain" size={20} className="text-primary" />
        <h2 className="text-xl font-semibold text-text-primary">AI Recommendations</h2>
        <div className="flex items-center space-x-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
          <Icon name="Sparkles" size={12} />
          <span>Powered by AI</span>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab?.id
                ? 'bg-background text-text-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
            <span className="text-xs bg-background/50 px-1.5 py-0.5 rounded-full">
              {tab?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="space-y-4">
        {activeTab === 'personalized' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-text-secondary">
                Recommendations based on your reading history and preferences
              </p>
              <Button variant="ghost" size="sm" iconName="Settings">
                Customize
              </Button>
            </div>
            {personalizedRecommendations?.map((article) => (
              <RecommendationCard
                key={article?.id}
                article={article}
                showReason={true}
              />
            ))}
          </>
        )}

        {activeTab === 'similar' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-text-secondary">
                Popular among developers with similar interests
              </p>
              <Button variant="ghost" size="sm" iconName="Users">
                View Community
              </Button>
            </div>
            {similarReaders?.map((article) => (
              <RecommendationCard
                key={article?.id}
                article={article}
                showPopularity={true}
              />
            ))}
          </>
        )}

        {activeTab === 'trending' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-text-secondary">
                Most popular content in the tech community right now
              </p>
              <Button variant="ghost" size="sm" iconName="TrendingUp">
                View All Trending
              </Button>
            </div>
            {trendingContent?.map((article) => (
              <RecommendationCard
                key={article?.id}
                article={article}
                showTrending={true}
              />
            ))}
          </>
        )}
      </div>
      {/* Action Buttons */}
      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          iconName="RefreshCw"
          iconPosition="left"
          className="flex-1"
        >
          Refresh Recommendations
        </Button>
        <Button
          variant="ghost"
          iconName="BookmarkPlus"
          iconPosition="left"
          className="flex-1"
        >
          Save All for Later
        </Button>
      </div>
    </div>
  );
};

export default RecommendationEngine;