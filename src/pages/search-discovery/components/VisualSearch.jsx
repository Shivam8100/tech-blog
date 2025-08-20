import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const VisualSearch = ({ onCategoryClick, onTagClick }) => {
  const [activeView, setActiveView] = useState('map');

  const categoryMap = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      position: { x: 20, y: 30 },
      size: 'large',
      color: 'bg-blue-500',
      articles: 156,
      subcategories: ['React', 'Vue.js', 'Angular', 'CSS', 'HTML']
    },
    {
      id: 'backend',
      name: 'Backend Development',
      position: { x: 60, y: 25 },
      size: 'large',
      color: 'bg-green-500',
      articles: 134,
      subcategories: ['Node.js', 'Python', 'Java', 'APIs', 'Databases']
    },
    {
      id: 'devops',
      name: 'DevOps',
      position: { x: 40, y: 60 },
      size: 'medium',
      color: 'bg-purple-500',
      articles: 89,
      subcategories: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Monitoring']
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      position: { x: 75, y: 55 },
      size: 'medium',
      color: 'bg-orange-500',
      articles: 67,
      subcategories: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      id: 'data',
      name: 'Data Science',
      position: { x: 15, y: 70 },
      size: 'medium',
      color: 'bg-red-500',
      articles: 54,
      subcategories: ['Python', 'Machine Learning', 'Analytics', 'Visualization']
    },
    {
      id: 'security',
      name: 'Security',
      position: { x: 80, y: 15 },
      size: 'small',
      color: 'bg-yellow-500',
      articles: 38,
      subcategories: ['Web Security', 'Authentication', 'Encryption']
    },
    {
      id: 'ai',
      name: 'AI/ML',
      position: { x: 25, y: 15 },
      size: 'small',
      color: 'bg-indigo-500',
      articles: 43,
      subcategories: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision']
    }
  ];

  const tagCloud = [
    { name: 'React', size: 32, popularity: 95, color: 'text-blue-600' },
    { name: 'JavaScript', size: 28, popularity: 92, color: 'text-yellow-600' },
    { name: 'TypeScript', size: 24, popularity: 88, color: 'text-blue-700' },
    { name: 'Node.js', size: 22, popularity: 85, color: 'text-green-600' },
    { name: 'Python', size: 26, popularity: 89, color: 'text-green-700' },
    { name: 'Docker', size: 20, popularity: 82, color: 'text-blue-500' },
    { name: 'AWS', size: 18, popularity: 78, color: 'text-orange-600' },
    { name: 'MongoDB', size: 16, popularity: 75, color: 'text-green-500' },
    { name: 'GraphQL', size: 19, popularity: 79, color: 'text-pink-600' },
    { name: 'Vue.js', size: 21, popularity: 83, color: 'text-green-600' },
    { name: 'Angular', size: 17, popularity: 76, color: 'text-red-600' },
    { name: 'Kubernetes', size: 15, popularity: 72, color: 'text-blue-600' },
    { name: 'Redis', size: 14, popularity: 69, color: 'text-red-500' },
    { name: 'PostgreSQL', size: 16, popularity: 74, color: 'text-blue-700' },
    { name: 'Express.js', size: 18, popularity: 77, color: 'text-gray-600' },
    { name: 'Next.js', size: 20, popularity: 81, color: 'text-black' },
    { name: 'Tailwind CSS', size: 17, popularity: 76, color: 'text-cyan-600' },
    { name: 'Firebase', size: 15, popularity: 71, color: 'text-orange-500' },
    { name: 'Jest', size: 13, popularity: 67, color: 'text-red-700' },
    { name: 'Webpack', size: 14, popularity: 68, color: 'text-blue-400' }
  ];

  const getSizeClass = (size) => {
    switch (size) {
      case 'large': return 'w-24 h-24';
      case 'medium': return 'w-16 h-16';
      case 'small': return 'w-12 h-12';
      default: return 'w-16 h-16';
    }
  };

  const CategoryMap = () => (
    <div className="relative w-full h-96 bg-gradient-to-br from-muted to-card rounded-lg overflow-hidden">
      {categoryMap?.map((category) => (
        <div
          key={category?.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          style={{
            left: `${category?.position?.x}%`,
            top: `${category?.position?.y}%`
          }}
          onClick={() => onCategoryClick(category?.name)}
        >
          <div className={`${getSizeClass(category?.size)} ${category?.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group-hover:shadow-xl`}>
            <span className="text-white font-semibold text-xs text-center px-2">
              {category?.name?.split(' ')?.[0]}
            </span>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <div className="bg-popover border border-border rounded-lg p-3 shadow-lg min-w-48">
              <h4 className="font-semibold text-text-primary mb-1">{category?.name}</h4>
              <p className="text-sm text-text-secondary mb-2">{category?.articles} articles</p>
              <div className="flex flex-wrap gap-1">
                {category?.subcategories?.slice(0, 3)?.map((sub) => (
                  <span key={sub} className="text-xs bg-muted px-2 py-1 rounded-full">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );

  const TagCloud = () => (
    <div className="relative w-full h-96 bg-card rounded-lg p-8 overflow-hidden">
      <div className="flex flex-wrap justify-center items-center h-full gap-4">
        {tagCloud?.map((tag, index) => (
          <button
            key={index}
            onClick={() => onTagClick(tag?.name)}
            className={`font-semibold hover:scale-110 transition-all duration-300 hover:opacity-80 ${tag?.color}`}
            style={{ fontSize: `${tag?.size}px` }}
          >
            {tag?.name}
          </button>
        ))}
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)]?.map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Eye" size={20} className="text-primary" />
          <h2 className="text-xl font-semibold text-text-primary">Visual Search</h2>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveView('map')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              activeView === 'map' ?'bg-primary text-primary-foreground' :'bg-muted text-text-secondary hover:text-text-primary'
            }`}
          >
            Category Map
          </button>
          <button
            onClick={() => setActiveView('cloud')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              activeView === 'cloud' ?'bg-primary text-primary-foreground' :'bg-muted text-text-secondary hover:text-text-primary'
            }`}
          >
            Tag Cloud
          </button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-text-secondary text-sm">
          {activeView === 'map' ?'Explore content categories by clicking on the interactive map. Larger circles represent more articles.' :'Discover popular topics through our tag cloud. Larger text indicates higher popularity.'
          }
        </p>
      </div>

      {activeView === 'map' ? <CategoryMap /> : <TagCloud />}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
        {activeView === 'map' ? (
          <>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <span>100+ articles</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>50-99 articles</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>&lt;50 articles</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Large</span>
              <span>High popularity</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">Medium</span>
              <span>Medium popularity</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Small</span>
              <span>Lower popularity</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VisualSearch;