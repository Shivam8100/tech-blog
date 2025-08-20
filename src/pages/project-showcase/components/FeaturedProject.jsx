import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDemo, onViewCode, onViewDetails }) => {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-8 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Star" size={20} className="text-accent" />
        <span className="text-sm font-medium text-accent">Featured Project</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Project Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-3">
              {project?.title}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {project?.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project?.keyFeatures?.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project?.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-background border border-border rounded-full text-sm font-medium text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={16} className="text-warning" />
              <span className="font-medium text-text-primary">{project?.stats?.stars}</span>
              <span className="text-text-secondary">stars</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="GitFork" size={16} className="text-accent" />
              <span className="font-medium text-text-primary">{project?.stats?.forks}</span>
              <span className="text-text-secondary">forks</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Download" size={16} className="text-primary" />
              <span className="font-medium text-text-primary">{project?.stats?.downloads}</span>
              <span className="text-text-secondary">downloads</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              iconName="ExternalLink"
              iconPosition="right"
              onClick={() => onViewDemo(project)}
              className="flex-1 sm:flex-none"
            >
              View Live Demo
            </Button>
            <Button
              variant="outline"
              iconName="Github"
              iconPosition="left"
              onClick={() => onViewCode(project)}
            >
              View Source Code
            </Button>
            <Button
              variant="ghost"
              iconName="FileText"
              iconPosition="left"
              onClick={() => onViewDetails(project)}
            >
              Read Case Study
            </Button>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-lg p-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{project?.stats?.commits}</div>
              <div className="text-xs text-text-secondary">Commits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;