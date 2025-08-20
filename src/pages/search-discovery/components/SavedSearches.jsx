import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SavedSearches = ({ onSearchClick }) => {
  const [savedSearches, setSavedSearches] = useState([
    {
      id: 1,
      query: "React hooks tutorial",
      filters: { difficulty: ['intermediate'], technologies: ['react'] },
      createdAt: "2025-01-15",
      lastUsed: "2025-01-18",
      alertsEnabled: true,
      newResults: 3,
      totalResults: 45
    },
    {
      id: 2,
      query: "TypeScript best practices",
      filters: { contentTypes: ['article', 'guide'], difficulty: ['advanced'] },
      createdAt: "2025-01-10",
      lastUsed: "2025-01-16",
      alertsEnabled: false,
      newResults: 0,
      totalResults: 28
    },
    {
      id: 3,
      query: "Docker containerization",
      filters: { technologies: ['docker'], readingTime: ['medium'] },
      createdAt: "2025-01-08",
      lastUsed: "2025-01-14",
      alertsEnabled: true,
      newResults: 1,
      totalResults: 34
    },
    {
      id: 4,
      query: "GraphQL API design",
      filters: { contentTypes: ['tutorial'], difficulty: ['intermediate', 'advanced'] },
      createdAt: "2025-01-05",
      lastUsed: "2025-01-12",
      alertsEnabled: true,
      newResults: 2,
      totalResults: 19
    }
  ]);

  const [contentAlerts, setContentAlerts] = useState([
    {
      id: 1,
      title: "New React 18 Features",
      description: "3 new articles about React 18 concurrent features and Suspense improvements",
      searchQuery: "React 18 features",
      timestamp: "2 hours ago",
      articles: [
        "Understanding React 18 Concurrent Features",
        "Suspense for Data Fetching in React 18",
        "Migration Guide: React 17 to 18"
      ]
    },
    {
      id: 2,
      title: "TypeScript 5.0 Updates",
      description: "New content about TypeScript 5.0 decorators and performance improvements",
      searchQuery: "TypeScript 5.0",
      timestamp: "1 day ago",
      articles: [
        "TypeScript 5.0: What\'s New and Breaking Changes",
        "Decorators in TypeScript 5.0: A Complete Guide"
      ]
    }
  ]);

  const toggleAlert = (searchId) => {
    setSavedSearches(searches =>
      searches?.map(search =>
        search?.id === searchId
          ? { ...search, alertsEnabled: !search?.alertsEnabled }
          : search
      )
    );
  };

  const deleteSearch = (searchId) => {
    setSavedSearches(searches => searches?.filter(search => search?.id !== searchId));
  };

  const dismissAlert = (alertId) => {
    setContentAlerts(alerts => alerts?.filter(alert => alert?.id !== alertId));
  };

  const formatFilters = (filters) => {
    const filterStrings = [];
    
    if (filters?.difficulty?.length) {
      filterStrings?.push(`Difficulty: ${filters?.difficulty?.join(', ')}`);
    }
    if (filters?.technologies?.length) {
      filterStrings?.push(`Tech: ${filters?.technologies?.join(', ')}`);
    }
    if (filters?.contentTypes?.length) {
      filterStrings?.push(`Type: ${filters?.contentTypes?.join(', ')}`);
    }
    if (filters?.readingTime?.length) {
      filterStrings?.push(`Time: ${filters?.readingTime?.join(', ')}`);
    }
    
    return filterStrings?.join(' • ');
  };

  return (
    <div className="space-y-6">
      {/* Content Alerts */}
      {contentAlerts?.length > 0 && (
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="Bell" size={20} className="text-primary" />
            <h2 className="text-xl font-semibold text-text-primary">Content Alerts</h2>
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              {contentAlerts?.length} new
            </span>
          </div>

          <div className="space-y-4">
            {contentAlerts?.map((alert) => (
              <div key={alert?.id} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-text-primary">{alert?.title}</h3>
                      <span className="text-xs text-text-secondary">{alert?.timestamp}</span>
                    </div>
                    
                    <p className="text-sm text-text-secondary mb-3">
                      {alert?.description}
                    </p>
                    
                    <div className="space-y-1 mb-3">
                      {alert?.articles?.map((article, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <Icon name="FileText" size={14} className="text-primary" />
                          <span className="text-text-primary hover:text-primary cursor-pointer">
                            {article}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onSearchClick(alert?.searchQuery)}
                        iconName="Search"
                        iconPosition="left"
                      >
                        View All Results
                      </Button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => dismissAlert(alert?.id)}
                    className="p-1 rounded-full hover:bg-hover transition-colors duration-200"
                  >
                    <Icon name="X" size={16} className="text-text-secondary" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Saved Searches */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Icon name="BookmarkPlus" size={20} className="text-primary" />
            <h2 className="text-xl font-semibold text-text-primary">Saved Searches</h2>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            iconName="Plus"
            iconPosition="left"
          >
            Save Current Search
          </Button>
        </div>

        {savedSearches?.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-text-primary mb-2">No saved searches yet</h3>
            <p className="text-text-secondary">
              Save your frequent searches to quickly access them later and get notified of new content.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {savedSearches?.map((search) => (
              <div key={search?.id} className="border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <button
                        onClick={() => onSearchClick(search?.query)}
                        className="text-lg font-semibold text-text-primary hover:text-primary transition-colors duration-200"
                      >
                        "{search?.query}"
                      </button>
                      
                      {search?.newResults > 0 && (
                        <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                          {search?.newResults} new
                        </span>
                      )}
                    </div>
                    
                    {formatFilters(search?.filters) && (
                      <p className="text-sm text-text-secondary mb-2">
                        Filters: {formatFilters(search?.filters)}
                      </p>
                    )}
                    
                    <div className="flex items-center space-x-4 text-xs text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={12} />
                        <span>Created {search?.createdAt}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>Last used {search?.lastUsed}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Icon name="FileText" size={12} />
                        <span>{search?.totalResults} results</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleAlert(search?.id)}
                      className={`p-2 rounded-lg transition-colors duration-200 ${
                        search?.alertsEnabled
                          ? 'bg-primary/10 text-primary hover:bg-primary/20' :'bg-muted text-text-secondary hover:bg-hover'
                      }`}
                      title={search?.alertsEnabled ? 'Disable alerts' : 'Enable alerts'}
                    >
                      <Icon name={search?.alertsEnabled ? "Bell" : "BellOff"} size={16} />
                    </button>
                    
                    <button
                      onClick={() => deleteSearch(search?.id)}
                      className="p-2 rounded-lg text-text-secondary hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
                      title="Delete saved search"
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {savedSearches?.length > 0 && (
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
                className="flex-1"
              >
                Export Searches
              </Button>
              <Button
                variant="ghost"
                iconName="Settings"
                iconPosition="left"
                className="flex-1"
              >
                Manage Alerts
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* Research Assistant */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="BookOpen" size={20} className="text-primary" />
          <h2 className="text-xl font-semibold text-text-primary">Research Assistant</h2>
          <div className="flex items-center space-x-1 text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
            <Icon name="Sparkles" size={12} />
            <span>AI Powered</span>
          </div>
        </div>
        
        <p className="text-text-secondary mb-4">
          Get comprehensive coverage of specific topics with automatically curated related articles, tutorials, and resources.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
            <Icon name="Lightbulb" size={16} className="text-primary" />
            <div className="flex-1">
              <h4 className="font-medium text-text-primary">Topic Deep Dive</h4>
              <p className="text-sm text-text-secondary">Find all related content for comprehensive learning</p>
            </div>
            <Button variant="outline" size="sm">Try It</Button>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
            <Icon name="TrendingUp" size={16} className="text-primary" />
            <div className="flex-1">
              <h4 className="font-medium text-text-primary">Learning Path Generator</h4>
              <p className="text-sm text-text-secondary">Create structured learning sequences from search results</p>
            </div>
            <Button variant="outline" size="sm">Generate</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedSearches;