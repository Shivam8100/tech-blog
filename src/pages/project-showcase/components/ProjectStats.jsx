import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Projects',
      value: stats?.totalProjects,
      icon: 'FolderOpen',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Active Projects',
      value: stats?.activeProjects,
      icon: 'Activity',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      label: 'Total Stars',
      value: stats?.totalStars,
      icon: 'Star',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      label: 'Total Forks',
      value: stats?.totalForks,
      icon: 'GitFork',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      label: 'Contributors',
      value: stats?.totalContributors,
      icon: 'Users',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      label: 'Downloads',
      value: stats?.totalDownloads,
      icon: 'Download',
      color: 'text-text-primary',
      bgColor: 'bg-muted'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {statItems?.map((item, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${item?.bgColor} mb-3`}>
            <Icon name={item?.icon} size={24} className={item?.color} />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">
            {typeof item?.value === 'number' && item?.value > 999 
              ? `${(item?.value / 1000)?.toFixed(1)}k` 
              : item?.value}
          </div>
          <div className="text-sm text-text-secondary">
            {item?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;