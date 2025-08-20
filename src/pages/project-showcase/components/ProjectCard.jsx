import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onViewDemo, onViewCode }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-success/10 text-success border-success/20';
      case 'Completed':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Archived':
        return 'bg-muted text-text-secondary border-border';
      default:
        return 'bg-warning/10 text-warning border-warning/20';
    }
  };

  return (
    <div className="interactive-card group hover:shadow-lg transition-all duration-300">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
            {project?.status}
          </span>
        </div>
        {project?.featured && (
          <div className="absolute top-3 right-3">
            <div className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <Icon name="Star" size={12} />
              <span>Featured</span>
            </div>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="space-y-4">
        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
            {project?.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
            {project?.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project?.technologies?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 bg-muted text-text-secondary rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="inline-flex items-center px-2 py-1 bg-muted text-text-secondary rounded-md text-xs font-medium">
              +{project?.technologies?.length - 4} more
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={14} />
              <span>{project?.stats?.stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="GitFork" size={14} />
              <span>{project?.stats?.forks}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Download" size={14} />
              <span>{project?.stats?.downloads}</span>
            </div>
          </div>
          <div className="text-xs">
            Updated {project?.lastUpdated}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 pt-2">
          <Button
            variant="default"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => onViewDemo(project)}
            className="flex-1"
          >
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Github"
            iconPosition="left"
            onClick={() => onViewCode(project)}
          >
            Code
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Info"
            onClick={() => onViewDetails(project)}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;