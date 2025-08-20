import React from 'react';
import Icon from '../../../components/AppIcon';

const TrendingSection = ({ onSearchClick }) => {
  const trendingSearches = [
    { term: "React 18 features", count: 1247, trend: "up", change: "+23%" },
    { term: "TypeScript migration", count: 892, trend: "up", change: "+18%" },
    { term: "Docker best practices", count: 756, trend: "up", change: "+12%" },
    { term: "GraphQL vs REST", count: 634, trend: "down", change: "-5%" },
    { term: "AWS Lambda functions", count: 589, trend: "up", change: "+8%" },
    { term: "Vue 3 composition API", count: 445, trend: "stable", change: "0%" },
    { term: "Node.js performance", count: 398, trend: "up", change: "+15%" },
    { term: "MongoDB aggregation", count: 312, trend: "down", change: "-3%" }
  ];

  const seasonalTrends = [
    {
      period: "This Week",
      topics: [
        { name: "AI/ML Integration", popularity: 95 },
        { name: "Cloud Architecture", popularity: 87 },
        { name: "DevOps Automation", popularity: 82 }
      ]
    },
    {
      period: "This Month",
      topics: [
        { name: "React Ecosystem", popularity: 92 },
        { name: "TypeScript Adoption", popularity: 88 },
        { name: "Microservices", popularity: 79 }
      ]
    },
    {
      period: "This Quarter",
      topics: [
        { name: "Web3 Development", popularity: 85 },
        { name: "Serverless Computing", popularity: 81 },
        { name: "Container Orchestration", popularity: 76 }
      ]
    }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      case 'stable': return 'Minus';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* Trending Searches */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Icon name="TrendingUp" size={20} className="text-primary" />
          <h2 className="text-xl font-semibold text-text-primary">Trending Searches</h2>
          <span className="text-sm text-text-secondary bg-muted px-2 py-1 rounded-full">
            Last 24 hours
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trendingSearches?.map((search, index) => (
            <button
              key={index}
              onClick={() => onSearchClick(search?.term)}
              className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-hover transition-colors duration-200 text-left group"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors duration-200">
                    {search?.term}
                  </span>
                  <Icon 
                    name={getTrendIcon(search?.trend)} 
                    size={14} 
                    className={getTrendColor(search?.trend)} 
                  />
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-text-secondary">
                    {search?.count?.toLocaleString()} searches
                  </span>
                  <span className={`text-xs font-medium ${getTrendColor(search?.trend)}`}>
                    {search?.change}
                  </span>
                </div>
              </div>
              <Icon name="ChevronRight" size={16} className="text-text-secondary group-hover:text-primary transition-colors duration-200" />
            </button>
          ))}
        </div>
      </div>
      {/* Seasonal Trends */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Icon name="Calendar" size={20} className="text-primary" />
          <h2 className="text-xl font-semibold text-text-primary">Seasonal Trends</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {seasonalTrends?.map((period, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-medium text-text-primary border-b border-border pb-2">
                {period?.period}
              </h3>
              <div className="space-y-3">
                {period?.topics?.map((topic, topicIndex) => (
                  <div key={topicIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => onSearchClick(topic?.name)}
                        className="text-sm text-text-primary hover:text-primary transition-colors duration-200"
                      >
                        {topic?.name}
                      </button>
                      <span className="text-xs text-text-secondary">
                        {topic?.popularity}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${topic?.popularity}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Popular Categories */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Icon name="Hash" size={20} className="text-primary" />
          <h2 className="text-xl font-semibold text-text-primary">Popular Categories</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            { name: 'Frontend Development', count: 156, color: 'bg-blue-100 text-blue-800' },
            { name: 'Backend Development', count: 134, color: 'bg-green-100 text-green-800' },
            { name: 'DevOps & Infrastructure', count: 89, color: 'bg-purple-100 text-purple-800' },
            { name: 'Mobile Development', count: 67, color: 'bg-orange-100 text-orange-800' },
            { name: 'Data Science', count: 54, color: 'bg-red-100 text-red-800' },
            { name: 'Machine Learning', count: 43, color: 'bg-indigo-100 text-indigo-800' },
            { name: 'Web Security', count: 38, color: 'bg-yellow-100 text-yellow-800' },
            { name: 'API Development', count: 32, color: 'bg-pink-100 text-pink-800' }
          ]?.map((category, index) => (
            <button
              key={index}
              onClick={() => onSearchClick(category?.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${category?.color}`}
            >
              {category?.name}
              <span className="ml-2 opacity-75">({category?.count})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;