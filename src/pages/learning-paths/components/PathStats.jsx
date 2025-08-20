import React from 'react';
import Icon from '../../../components/AppIcon';

const PathStats = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Learning Paths',
      value: stats?.totalPaths,
      icon: 'Map',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      label: 'Active Learners',
      value: stats?.activeLearners?.toLocaleString(),
      icon: 'Users',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      label: 'Certificates Issued',
      value: stats?.certificatesIssued?.toLocaleString(),
      icon: 'Award',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      label: 'Hours of Content',
      value: `${stats?.totalHours}+`,
      icon: 'Clock',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {statItems?.map((item, index) => (
        <div
          key={index}
          className={`${item?.bgColor} ${item?.borderColor} border rounded-lg p-6 text-center transition-all duration-200 hover:shadow-md hover:scale-105`}
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 ${item?.color} mb-4`}>
            <Icon name={item?.icon} size={24} />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">
            {item?.value}
          </div>
          <div className="text-sm text-text-secondary">
            {item?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PathStats;