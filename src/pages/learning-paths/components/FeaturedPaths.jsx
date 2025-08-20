import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedPaths = ({ featuredPaths, onStartPath }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">Featured Learning Paths</h2>
          <p className="text-text-secondary">Curated journeys for accelerated learning</p>
        </div>
        <Link 
          to="/search-discovery" 
          className="text-accent hover:text-accent/80 text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
        >
          <span>View All Paths</span>
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredPaths?.map((path) => (
          <div key={path?.id} className="group relative">
            {/* Main Card */}
            <div className="interactive-card overflow-hidden h-full">
              {/* Header with Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={path?.image}
                  alt={path?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Icon name="Star" size={14} />
                  <span>Featured</span>
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {path?.category}
                </div>

                {/* Title and Quick Stats */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{path?.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="BookOpen" size={16} />
                      <span>{path?.totalArticles} articles</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} />
                      <span>{path?.estimatedHours}h</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={16} />
                      <span>{path?.enrolledCount}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {path?.description}
                </p>

                {/* Learning Outcomes */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">What You'll Learn</h4>
                  <div className="space-y-2">
                    {path?.learningOutcomes?.slice(0, 3)?.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {path?.skills?.slice(0, 4)?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {path?.skills?.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                        +{path?.skills?.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Difficulty and Prerequisites */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h5 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1">
                      Difficulty
                    </h5>
                    <div className={`inline-flex items-center px-2 py-1 rounded text-sm font-medium ${
                      path?.difficulty === 'Beginner' ? 'text-green-600 bg-green-50' :
                      path?.difficulty === 'Intermediate'? 'text-yellow-600 bg-yellow-50' : 'text-red-600 bg-red-50'
                    }`}>
                      {path?.difficulty}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-1">
                      Prerequisites
                    </h5>
                    <div className="text-sm text-text-primary">
                      {path?.prerequisites?.length > 0 ? path?.prerequisites?.[0] : 'None'}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="default"
                  size="default"
                  iconName="Play"
                  iconPosition="left"
                  fullWidth
                  onClick={() => onStartPath(path?.id)}
                  className="group-hover:shadow-md transition-shadow duration-200"
                >
                  Start Learning Path
                </Button>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPaths;