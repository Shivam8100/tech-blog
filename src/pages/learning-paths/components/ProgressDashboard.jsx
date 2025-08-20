import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressDashboard = ({ userProgress }) => {
  const totalPaths = userProgress?.totalPaths;
  const completedPaths = userProgress?.completedPaths;
  const inProgressPaths = userProgress?.inProgressPaths;
  const totalHoursSpent = userProgress?.totalHoursSpent;
  const skillsAcquired = userProgress?.skillsAcquired;
  const certificatesEarned = userProgress?.certificatesEarned;

  const completionRate = totalPaths > 0 ? Math.round((completedPaths / totalPaths) * 100) : 0;

  const stats = [
    {
      label: 'Paths Completed',
      value: completedPaths,
      total: totalPaths,
      icon: 'CheckCircle',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      label: 'In Progress',
      value: inProgressPaths,
      icon: 'Clock',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      label: 'Hours Learned',
      value: totalHoursSpent,
      icon: 'BookOpen',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      label: 'Skills Acquired',
      value: skillsAcquired,
      icon: 'Award',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Your Learning Progress</h2>
          <p className="text-text-secondary mt-1">Track your journey through technical mastery</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-primary">{completionRate}%</div>
          <div className="text-sm text-text-secondary">Overall Progress</div>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-secondary">Learning Path Completion</span>
          <span className="text-sm font-medium text-primary">{completedPaths} of {totalPaths} paths</span>
        </div>
        <div className="progress-bar h-3">
          <div 
            className="progress-fill bg-gradient-to-r from-primary to-accent" 
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className={`${stat?.bgColor} ${stat?.borderColor} border rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md`}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 ${stat?.color} mb-3`}>
              <Icon name={stat?.icon} size={24} />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">
              {stat?.value}
              {stat?.total && <span className="text-text-secondary">/{stat?.total}</span>}
            </div>
            <div className="text-sm text-text-secondary">{stat?.label}</div>
          </div>
        ))}
      </div>
      {/* Recent Achievements */}
      {certificatesEarned > 0 && (
        <div className="border-t border-border pt-6">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="Trophy" size={20} className="text-yellow-500" />
            <h3 className="text-lg font-semibold text-text-primary">Recent Achievements</h3>
          </div>
          <div className="flex items-center space-x-4">
            <div className="achievement-badge">
              <Icon name="Award" size={16} className="mr-1" />
              {certificatesEarned} Certificate{certificatesEarned !== 1 ? 's' : ''} Earned
            </div>
            <div className="text-sm text-text-secondary">
              Keep learning to unlock more achievements!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressDashboard;