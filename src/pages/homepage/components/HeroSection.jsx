import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const featuredArticle = {
    id: 1,
    title: "Building Scalable React Applications with Advanced Patterns",
    excerpt: "Explore advanced React patterns including compound components, render props, and custom hooks to build maintainable and scalable applications. Learn how to structure your codebase for long-term success.",
    readTime: "12 min read",
    publishedDate: "2025-08-18",
    category: "React",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    stats: {
      views: "2.4k",
      comments: 18,
      likes: 156
    }
  };

  const codeSnippet = `// Advanced React Pattern Example
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);
  
  return [value, toggle];
};

// Usage in component
const Modal = ({ children }) => {
  const [isOpen, toggleOpen] = useToggle();
  
  return (
    <>
      <Button onClick={toggleOpen}>
        Open Modal
      </Button>
      {isOpen && (
        <div className="modal">
          {children}
        </div>
      )}
    </>
  );
};`;

  return (
    <section className="relative bg-gradient-to-br from-background via-card to-muted min-h-[600px] flex items-center overflow-hidden">
      {/* Background Code Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 transform rotate-12">
          <pre className="text-xs font-mono text-primary whitespace-pre-wrap">
            {codeSnippet}
          </pre>
        </div>
        <div className="absolute bottom-10 right-10 transform -rotate-6">
          <div className="flex flex-col space-y-2">
            <div className="w-32 h-2 bg-accent/20 rounded"></div>
            <div className="w-24 h-2 bg-primary/20 rounded"></div>
            <div className="w-40 h-2 bg-success/20 rounded"></div>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Welcome Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Sparkles" size={16} />
              <span>Welcome to TechBlog Hub</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                Interactive
                <span className="gradient-text block">Learning</span>
                for Developers
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                Discover in-depth technical articles, interactive code examples, and curated learning paths that bridge complex concepts with practical insights.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">150+</div>
                <div className="text-sm text-text-secondary">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">25k+</div>
                <div className="text-sm text-text-secondary">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">12</div>
                <div className="text-sm text-text-secondary">Learning Paths</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="BookOpen"
                iconPosition="left"
                asChild
              >
                <Link to="/article-detail">Read Latest Article</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Map"
                iconPosition="left"
                asChild
              >
                <Link to="/learning-paths">Explore Learning Paths</Link>
              </Button>
            </div>
          </div>

          {/* Featured Article Card */}
          <div className="relative">
            <div className="interactive-card bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={featuredArticle?.image}
                  alt={featuredArticle?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {featuredArticle?.difficulty}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                    {featuredArticle?.category}
                  </span>
                  <span>{featuredArticle?.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-text-primary leading-tight line-clamp-2">
                  {featuredArticle?.title}
                </h3>

                <p className="text-text-secondary leading-relaxed line-clamp-3">
                  {featuredArticle?.excerpt}
                </p>

                {/* Author & Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={featuredArticle?.author?.avatar}
                      alt={featuredArticle?.author?.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm font-medium text-text-primary">
                        {featuredArticle?.author?.name}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {featuredArticle?.publishedDate}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{featuredArticle?.stats?.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={14} />
                      <span>{featuredArticle?.stats?.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} />
                      <span>{featuredArticle?.stats?.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Read Article Button */}
                <Button
                  variant="default"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  asChild
                >
                  <Link to="/article-detail">Read Full Article</Link>
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;