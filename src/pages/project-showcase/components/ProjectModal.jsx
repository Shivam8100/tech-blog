import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, onViewDemo, onViewCode }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-text-primary">{project?.title}</h2>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
              project?.status === 'Active' ?'bg-success/10 text-success border-success/20'
                : project?.status === 'Completed' ?'bg-primary/10 text-primary border-primary/20' :'bg-muted text-text-secondary border-border'
            }`}>
              {project?.status}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-hover rounded-lg transition-colors duration-200"
          >
            <Icon name="X" size={24} className="text-text-secondary" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-3">About This Project</h3>
            <p className="text-text-secondary leading-relaxed">
              {project?.fullDescription || project?.description}
            </p>
          </div>

          {/* Problem & Solution */}
          {project?.problemSolution && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="AlertCircle" size={20} className="text-warning" />
                  <span>Problem</span>
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project?.problemSolution?.problem}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} className="text-success" />
                  <span>Solution</span>
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project?.problemSolution?.solution}
                </p>
              </div>
            </div>
          )}

          {/* Key Features */}
          {project?.keyFeatures && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project?.keyFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project?.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-muted text-text-secondary rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture */}
          {project?.architecture && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Architecture Highlights</h3>
              <ul className="space-y-2">
                {project?.architecture?.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="ArrowRight" size={16} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Learnings */}
          {project?.challenges && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Challenges & Learnings</h3>
              <div className="space-y-3">
                {project?.challenges?.map((challenge, index) => (
                  <div key={index} className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">{challenge?.title}</h4>
                    <p className="text-text-secondary text-sm">{challenge?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">{project?.stats?.stars}</div>
              <div className="text-sm text-text-secondary">Stars</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-accent">{project?.stats?.forks}</div>
              <div className="text-sm text-text-secondary">Forks</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-success">{project?.stats?.downloads}</div>
              <div className="text-sm text-text-secondary">Downloads</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-warning">{project?.stats?.commits}</div>
              <div className="text-sm text-text-secondary">Commits</div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-border">
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
            iconName="Share"
            iconPosition="left"
          >
            Share Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;