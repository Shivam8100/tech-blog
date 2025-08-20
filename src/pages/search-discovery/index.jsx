import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import SearchResults from './components/SearchResults';
import TrendingSection from './components/TrendingSection';
import VisualSearch from './components/VisualSearch';
import RecommendationEngine from './components/RecommendationEngine';
import SavedSearches from './components/SavedSearches';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const SearchDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeView, setActiveView] = useState('search');
  const [sortBy, setSortBy] = useState('relevance');
  const [filters, setFilters] = useState({
    contentTypes: [],
    difficulty: [],
    technologies: [],
    readingTime: [],
    dateRange: 'all'
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock search results data
  const mockResults = [
    {
      id: 1,
      title: "Complete Guide to React Hooks: useState, useEffect, and Custom Hooks",
      excerpt: "Master React Hooks with practical examples and best practices. Learn how to build reusable custom hooks and avoid common pitfalls in modern React development.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      type: "tutorial",
      difficulty: "intermediate",
      readingTime: 15,
      publishedDate: "Jan 18, 2025",
      views: 12450,
      tags: ["React", "Hooks", "JavaScript", "Frontend"],
      keyTakeaways: [
        "Understanding the rules of hooks and when to use them",
        "Building custom hooks for reusable stateful logic",
        "Performance optimization with useMemo and useCallback"
      ]
    },
    {
      id: 2,
      title: "TypeScript Best Practices for Large Scale Applications",
      excerpt: "Learn how to structure and maintain TypeScript codebases that scale with your team and project. Covers advanced types, configuration, and tooling.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      type: "guide",
      difficulty: "advanced",
      readingTime: 22,
      publishedDate: "Jan 16, 2025",
      views: 8930,
      tags: ["TypeScript", "Architecture", "Best Practices", "Scalability"],
      keyTakeaways: [
        "Setting up strict TypeScript configurations for large projects",
        "Advanced type patterns for better code organization"
      ]
    },
    {
      id: 3,
      title: "Building Microservices with Node.js and Docker",
      excerpt: "A comprehensive guide to designing, building, and deploying microservices architecture using Node.js, Express, and Docker containers.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      type: "tutorial",
      difficulty: "advanced",
      readingTime: 28,
      publishedDate: "Jan 14, 2025",
      views: 15670,
      tags: ["Node.js", "Docker", "Microservices", "Backend", "DevOps"],
      keyTakeaways: [
        "Designing microservices architecture patterns",
        "Container orchestration with Docker Compose"
      ]
    },
    {
      id: 4,
      title: "GraphQL vs REST: When to Choose Each Approach",
      excerpt: "Understand the key differences between GraphQL and REST APIs. Learn when to use each approach based on your project requirements and team expertise.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      type: "article",
      difficulty: "intermediate",
      readingTime: 12,
      publishedDate: "Jan 12, 2025",
      views: 9840,
      tags: ["GraphQL", "REST", "API Design", "Backend"],
      keyTakeaways: [
        "Performance implications of each approach",
        "Team and project considerations for API choice"
      ]
    },
    {
      id: 5,
      title: "Python Machine Learning: Getting Started with Scikit-learn",
      excerpt: "Introduction to machine learning with Python using scikit-learn. Covers data preprocessing, model training, and evaluation techniques.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      type: "tutorial",
      difficulty: "beginner",
      readingTime: 18,
      publishedDate: "Jan 10, 2025",
      views: 11230,
      tags: ["Python", "Machine Learning", "Scikit-learn", "Data Science"],
      keyTakeaways: [
        "Setting up your machine learning development environment",
        "Understanding different types of machine learning algorithms"
      ]
    },
    {
      id: 6,
      title: "AWS Lambda Functions: Serverless Architecture Patterns",
      excerpt: "Explore serverless architecture patterns using AWS Lambda. Learn how to build scalable, cost-effective applications without managing servers.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      type: "guide",
      difficulty: "intermediate",
      readingTime: 20,
      publishedDate: "Jan 8, 2025",
      views: 7650,
      tags: ["AWS", "Lambda", "Serverless", "Cloud", "Architecture"],
      keyTakeaways: [
        "Common serverless architecture patterns",
        "Cost optimization strategies for Lambda functions"
      ]
    }
  ];

  useEffect(() => {
    // Simulate initial load with all articles
    setSearchResults(mockResults);
  }, []);

  const handleSearch = (query) => {
    setLoading(true);
    setSearchQuery(query);
    
    // Simulate API call
    setTimeout(() => {
      if (query?.trim() === '') {
        setSearchResults(mockResults);
      } else {
        let filtered = mockResults?.filter(article =>
          article?.title?.toLowerCase()?.includes(query?.toLowerCase()) ||
          article?.excerpt?.toLowerCase()?.includes(query?.toLowerCase()) ||
          article?.tags?.some(tag => tag?.toLowerCase()?.includes(query?.toLowerCase()))
        );
        setSearchResults(filtered);
      }
      setLoading(false);
    }, 800);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    // Apply filters to search results
    let filtered = mockResults;
    
    if (searchQuery?.trim() !== '') {
      filtered = filtered?.filter(article =>
        article?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        article?.excerpt?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        article?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()))
      );
    }
    
    // Apply content type filters
    if (newFilters?.contentTypes?.length > 0) {
      filtered = filtered?.filter(article => newFilters?.contentTypes?.includes(article?.type));
    }
    
    // Apply difficulty filters
    if (newFilters?.difficulty?.length > 0) {
      filtered = filtered?.filter(article => newFilters?.difficulty?.includes(article?.difficulty));
    }
    
    // Apply technology filters
    if (newFilters?.technologies?.length > 0) {
      filtered = filtered?.filter(article =>
        article?.tags?.some(tag => 
          newFilters?.technologies?.some(tech => 
            tag?.toLowerCase()?.includes(tech?.toLowerCase())
          )
        )
      );
    }
    
    setSearchResults(filtered);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    const sorted = [...searchResults]?.sort((a, b) => {
      switch (newSortBy) {
        case 'date':
          return new Date(b.publishedDate) - new Date(a.publishedDate);
        case 'popularity':
          return b?.views - a?.views;
        case 'reading-time':
          return a?.readingTime - b?.readingTime;
        default: // relevance
          return 0;
      }
    });
    setSearchResults(sorted);
  };

  const handleTrendingSearchClick = (term) => {
    setSearchQuery(term);
    handleSearch(term);
    setActiveView('search');
  };

  const handleCategoryClick = (category) => {
    setSearchQuery(category);
    handleSearch(category);
    setActiveView('search');
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    handleSearch(tag);
    setActiveView('search');
  };

  const handleArticleClick = (article) => {
    // Navigate to article detail page
    console.log('Navigate to article:', article?.id);
  };

  const views = [
    { id: 'search', label: 'Search Results', icon: 'Search' },
    { id: 'trending', label: 'Trending', icon: 'TrendingUp' },
    { id: 'visual', label: 'Visual Search', icon: 'Eye' },
    { id: 'recommendations', label: 'For You', icon: 'Brain' },
    { id: 'saved', label: 'Saved Searches', icon: 'BookmarkPlus' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section with Search */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Discover Knowledge
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Explore our comprehensive knowledge base with powerful search, intelligent recommendations, and visual discovery tools.
              </p>
            </div>
            
            <SearchBar
              onSearch={handleSearch}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-card border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex items-center space-x-1 py-4 overflow-x-auto">
              {views?.map((view) => (
                <button
                  key={view?.id}
                  onClick={() => setActiveView(view?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeView === view?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-text-secondary hover:text-text-primary hover:bg-hover'
                  }`}
                >
                  <Icon name={view?.icon} size={16} />
                  <span>{view?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            {activeView === 'search' && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <FilterPanel
                    filters={filters}
                    onFiltersChange={handleFiltersChange}
                    isOpen={isFilterOpen}
                    onToggle={() => setIsFilterOpen(!isFilterOpen)}
                  />
                </div>
                <div className="lg:col-span-3">
                  <SearchResults
                    results={searchResults}
                    loading={loading}
                    searchQuery={searchQuery}
                    sortBy={sortBy}
                    onSortChange={handleSortChange}
                  />
                </div>
              </div>
            )}

            {activeView === 'trending' && (
              <TrendingSection onSearchClick={handleTrendingSearchClick} />
            )}

            {activeView === 'visual' && (
              <VisualSearch
                onCategoryClick={handleCategoryClick}
                onTagClick={handleTagClick}
              />
            )}

            {activeView === 'recommendations' && (
              <RecommendationEngine onArticleClick={handleArticleClick} />
            )}

            {activeView === 'saved' && (
              <SavedSearches onSearchClick={handleTrendingSearchClick} />
            )}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-muted py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Enhance Your Search Experience
              </h2>
              <p className="text-text-secondary">
                Discover more ways to find and organize the content you need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Bookmark" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Save for Later</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Bookmark articles and create reading lists for future reference
                </p>
                <Button variant="outline" size="sm">
                  Manage Bookmarks
                </Button>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Bell" size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Content Alerts</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Get notified when new content matches your interests
                </p>
                <Button variant="outline" size="sm">
                  Setup Alerts
                </Button>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Share2" size={24} className="text-success" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Share & Export</h3>
                <p className="text-sm text-text-secondary mb-4">
                  Share search results and export reading lists
                </p>
                <Button variant="outline" size="sm">
                  Export Options
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold">TechBlog Hub</span>
              </div>
              <p className="text-secondary-foreground/80 mb-4">
                Your comprehensive platform for discovering, learning, and staying updated with the latest in technology and development.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" iconName="Github" className="text-secondary-foreground/80 hover:text-secondary-foreground" />
                <Button variant="ghost" size="sm" iconName="Twitter" className="text-secondary-foreground/80 hover:text-secondary-foreground" />
                <Button variant="ghost" size="sm" iconName="Linkedin" className="text-secondary-foreground/80 hover:text-secondary-foreground" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-secondary-foreground transition-colors duration-200">All Articles</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors duration-200">Learning Paths</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors duration-200">Project Showcase</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors duration-200">About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-secondary-foreground transition-colors duration-200">Search Tips</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors duration-200">API Documentation</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors duration-200">Newsletter</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date()?.getFullYear()} TechBlog Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchDiscovery;