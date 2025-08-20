import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TrendingSection = () => {
  const trendingArticles = [
    {
      id: 1,
      title: "Mastering TypeScript: Advanced Types and Patterns",
      excerpt: "Deep dive into TypeScript's advanced type system including conditional types, mapped types, and template literal types.",
      category: "TypeScript",
      difficulty: "Advanced",
      readTime: "15 min read",
      publishedDate: "2025-08-19",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
      },
      stats: {
        views: "3.2k",
        comments: 24,
        likes: 189,
        trending: true
      }
    },
    {
      id: 2,
      title: "Building Microservices with Node.js and Docker",
      excerpt: "Learn how to architect, build, and deploy scalable microservices using Node.js, Express, and Docker containers.",
      category: "Backend",
      difficulty: "Intermediate",
      readTime: "18 min read",
      publishedDate: "2025-08-17",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
      author: {
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
      },
      stats: {
        views: "2.8k",
        comments: 31,
        likes: 142,
        trending: true
      }
    },
    {
      id: 3,
      title: "React Server Components: The Future of React",
      excerpt: "Explore React Server Components and how they\'re changing the way we think about server-side rendering and client-side interactivity.",
      category: "React",
      difficulty: "Advanced",
      readTime: "12 min read",
      publishedDate: "2025-08-16",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
      author: {
        name: "Emily Chen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
      },
      stats: {
        views: "4.1k",
        comments: 45,
        likes: 267,
        trending: true
      }
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A comprehensive comparison of CSS Grid and Flexbox with practical examples and use cases for modern web layouts.",
      category: "CSS",
      difficulty: "Beginner",
      readTime: "8 min read",
      publishedDate: "2025-08-15",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      author: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
      },
      stats: {
        views: "1.9k",
        comments: 16,
        likes: 98,
        trending: false
      }
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-success/10 text-success border-success/20';
      case 'Intermediate':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Advanced':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={24} className="text-accent" />
              <h2 className="text-3xl font-bold text-text-primary">Trending Now</h2>
            </div>
            <p className="text-text-secondary">
              Most popular articles this week based on views and engagement
            </p>
          </div>
          
          <Button
            variant="outline"
            iconName="ArrowRight"
            iconPosition="right"
            asChild
          >
            <Link to="/search-discovery">View All Articles</Link>
          </Button>
        </div>

        {/* Trending Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingArticles?.map((article, index) => (
            <div
              key={article?.id}
              className="interactive-card bg-card border border-border rounded-lg overflow-hidden group relative"
            >
              {/* Trending Badge */}
              {article?.stats?.trending && (
                <div className="absolute top-3 left-3 z-10">
                  <div className="flex items-center space-x-1 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                    <Icon name="Flame" size={12} />
                    <span>Trending</span>
                  </div>
                </div>
              )}

              {/* Rank Badge */}
              <div className="absolute top-3 right-3 z-10">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Article Image */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={article?.image}
                  alt={article?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Article Content */}
              <div className="p-4 space-y-3">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-muted text-text-secondary px-2 py-1 rounded">
                    {article?.category}
                  </span>
                  <span className={`px-2 py-1 rounded border text-xs font-medium ${getDifficultyColor(article?.difficulty)}`}>
                    {article?.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-text-primary leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {article?.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
                  {article?.excerpt}
                </p>

                {/* Author & Date */}
                <div className="flex items-center space-x-2 pt-2 border-t border-border">
                  <Image
                    src={article?.author?.avatar}
                    alt={article?.author?.name}
                    className="w-5 h-5 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-text-primary truncate">
                      {article?.author?.name}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {article?.publishedDate}
                    </div>
                  </div>
                  <div className="text-xs text-text-secondary">
                    {article?.readTime}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-2 text-xs text-text-secondary">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{article?.stats?.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={12} />
                      <span>{article?.stats?.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={12} />
                    <span>{article?.stats?.likes}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <Link
                to="/article-detail"
                className="absolute inset-0 z-20"
                aria-label={`Read article: ${article?.title}`}
              />
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-card border border-border rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" size={20} className="text-primary" />
              <span className="text-text-primary font-medium">
                Discover more trending content
              </span>
            </div>
            <Button
              variant="default"
              size="sm"
              iconName="Search"
              iconPosition="left"
              asChild
            >
              <Link to="/search-discovery">Explore Articles</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;