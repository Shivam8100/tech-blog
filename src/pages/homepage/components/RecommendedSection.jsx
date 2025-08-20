import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendedSection = () => {
  const recommendedArticles = [
    {
      id: 1,
      title: "Understanding JavaScript Closures and Scope",
      excerpt: "Master one of JavaScript\'s most important concepts with practical examples and common use cases in modern development.",
      category: "JavaScript",
      difficulty: "Intermediate",
      readTime: "10 min read",
      publishedDate: "2025-08-14",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop",
      author: {
        name: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
      },
      tags: ["JavaScript", "Fundamentals", "Scope"],
      recommendationReason: "Based on your interest in JavaScript fundamentals",
      stats: {
        views: "1.5k",
        likes: 89
      }
    },
    {
      id: 2,
      title: "Building Responsive Layouts with CSS Grid",
      excerpt: "Learn how to create complex, responsive layouts using CSS Grid with practical examples and best practices.",
      category: "CSS",
      difficulty: "Beginner",
      readTime: "12 min read",
      publishedDate: "2025-08-13",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
      },
      tags: ["CSS", "Layout", "Responsive"],
      recommendationReason: "Popular among developers learning frontend",
      stats: {
        views: "2.1k",
        likes: 134
      }
    },
    {
      id: 3,
      title: "API Design Best Practices for RESTful Services",
      excerpt: "Design robust and scalable APIs following REST principles with authentication, error handling, and documentation strategies.",
      category: "Backend",
      difficulty: "Intermediate",
      readTime: "16 min read",
      publishedDate: "2025-08-11",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
      author: {
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
      },
      tags: ["API", "REST", "Backend"],
      recommendationReason: "Trending in your reading history",
      stats: {
        views: "1.8k",
        likes: 112
      }
    }
  ];

  const readingStats = {
    articlesRead: 23,
    totalReadTime: "8.5 hours",
    favoriteCategory: "React",
    streak: 7
  };

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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Icon name="Target" size={24} className="text-accent" />
              <h2 className="text-3xl font-bold text-text-primary">Recommended for You</h2>
            </div>
            <p className="text-text-secondary">
              Personalized content based on your reading history and preferences
            </p>
          </div>

          {/* Reading Stats Card */}
          <div className="bg-card border border-border rounded-lg p-4 lg:min-w-[300px]">
            <div className="flex items-center space-x-2 mb-3">
              <Icon name="BookOpen" size={16} className="text-primary" />
              <span className="text-sm font-medium text-text-primary">Your Reading Stats</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-text-primary">{readingStats?.articlesRead}</div>
                <div className="text-text-secondary text-xs">Articles Read</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-text-primary">{readingStats?.totalReadTime}</div>
                <div className="text-text-secondary text-xs">Total Time</div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <div className="flex items-center space-x-1">
                <Icon name="Flame" size={14} className="text-accent" />
                <span className="text-xs text-text-secondary">{readingStats?.streak} day streak</span>
              </div>
              <div className="text-xs text-text-secondary">
                Favorite: {readingStats?.favoriteCategory}
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Articles */}
        <div className="grid lg:grid-cols-3 gap-8">
          {recommendedArticles?.map((article, index) => (
            <div
              key={article?.id}
              className="interactive-card bg-card border border-border rounded-lg overflow-hidden group relative"
            >
              {/* Recommendation Badge */}
              <div className="absolute top-3 left-3 z-10">
                <div className="flex items-center space-x-1 bg-accent/90 text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                  <Icon name="Sparkles" size={12} />
                  <span>For You</span>
                </div>
              </div>

              {/* Article Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={article?.image}
                  alt={article?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Article Content */}
              <div className="p-6 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center justify-between">
                  <span className="bg-muted text-text-secondary px-2 py-1 rounded text-xs font-medium">
                    {article?.category}
                  </span>
                  <span className={`px-2 py-1 rounded border text-xs font-medium ${getDifficultyColor(article?.difficulty)}`}>
                    {article?.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary leading-tight group-hover:text-primary transition-colors duration-200">
                  {article?.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-secondary leading-relaxed line-clamp-3">
                  {article?.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {article?.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Recommendation Reason */}
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <Icon name="Lightbulb" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-accent font-medium">
                      {article?.recommendationReason}
                    </span>
                  </div>
                </div>

                {/* Author & Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={article?.author?.avatar}
                      alt={article?.author?.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <div className="text-sm font-medium text-text-primary">
                        {article?.author?.name}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {article?.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{article?.stats?.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={12} />
                      <span>{article?.stats?.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Read Article Button */}
                <Button
                  variant="outline"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  size="sm"
                  asChild
                >
                  <Link to="/article-detail">Read Article</Link>
                </Button>
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

        {/* Personalization CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Settings" size={24} className="text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-text-primary">Customize Your Experience</div>
                <div className="text-sm text-text-secondary">Set preferences to get better recommendations</div>
              </div>
            </div>
            <Button
              variant="default"
              iconName="Sliders"
              iconPosition="left"
            >
              Manage Preferences
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;