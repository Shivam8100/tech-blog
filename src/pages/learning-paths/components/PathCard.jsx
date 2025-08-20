import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PathCard = ({ path, onStartPath, onContinuePath }) => {
  const getProgressPercentage = () => {
    if (!path?.totalArticles || path?.totalArticles === 0) return 0;
    return Math.round((path?.completedArticles / path?.totalArticles) * 100);
  };

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Intermediate':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Advanced':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const isStarted = path?.completedArticles > 0;
  const isCompleted = path?.completedArticles === path?.totalArticles;
  const progressPercentage = getProgressPercentage();

  return (
    <div className="interactive-card group hover:shadow-lg transition-all duration-300">
      {/* Header Image */}
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          src={path?.image}
          alt={path?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Difficulty Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(path?.difficulty)}`}>
          {path?.difficulty}
        </div>
        
        {/* Progress Badge */}
        {isStarted && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
            {isCompleted ? (
              <div className="flex items-center space-x-1">
                <Icon name="CheckCircle" size={16} color="#059669" />
                <span className="text-green-600">Completed</span>
              </div>
            ) : (
              `${progressPercentage}% Complete`
            )}
          </div>
        )}
        
        {/* Category */}
        <div className="absolute bottom-4 left-4 text-white">
          <span className="text-sm font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
            {path?.category}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
            {path?.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
            {path?.description}
          </p>
        </div>

        {/* Progress Bar */}
        {isStarted && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-secondary">Progress</span>
              <span className="text-sm font-medium text-primary">{progressPercentage}%</span>
            </div>
            <div className="progress-bar h-2">
              <div 
                className="progress-fill bg-primary" 
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Icon name="BookOpen" size={16} className="text-text-secondary" />
            </div>
            <div className="text-lg font-bold text-text-primary">{path?.totalArticles}</div>
            <div className="text-xs text-text-secondary">Articles</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Icon name="Clock" size={16} className="text-text-secondary" />
            </div>
            <div className="text-lg font-bold text-text-primary">{path?.estimatedHours}h</div>
            <div className="text-xs text-text-secondary">Duration</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Icon name="Users" size={16} className="text-text-secondary" />
            </div>
            <div className="text-lg font-bold text-text-primary">{path?.enrolledCount}</div>
            <div className="text-xs text-text-secondary">Enrolled</div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-text-primary mb-2">Skills You'll Learn</h4>
          <div className="flex flex-wrap gap-2">
            {path?.skills?.slice(0, 3)?.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
            {path?.skills?.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                +{path?.skills?.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between">
          {isCompleted ? (
            <Button
              variant="success"
              size="sm"
              iconName="Award"
              iconPosition="left"
              fullWidth
              onClick={() => onContinuePath(path?.id)}
            >
              View Certificate
            </Button>
          ) : isStarted ? (
            <Button
              variant="default"
              size="sm"
              iconName="Play"
              iconPosition="left"
              fullWidth
              onClick={() => onContinuePath(path?.id)}
            >
              Continue Learning
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              iconName="BookOpen"
              iconPosition="left"
              fullWidth
              onClick={() => onStartPath(path?.id)}
            >
              Start Learning
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PathCard;