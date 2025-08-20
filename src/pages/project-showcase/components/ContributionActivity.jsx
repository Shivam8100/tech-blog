import React from 'react';
import Icon from '../../../components/AppIcon';

const ContributionActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'commit':
        return 'GitCommit';
      case 'pr':
        return 'GitPullRequest';
      case 'issue':
        return 'AlertCircle';
      case 'release':
        return 'Tag';
      case 'star':
        return 'Star';
      default:
        return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'commit':
        return 'text-success';
      case 'pr':
        return 'text-primary';
      case 'issue':
        return 'text-warning';
      case 'release':
        return 'text-accent';
      case 'star':
        return 'text-warning';
      default:
        return 'text-text-secondary';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now - time) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return `${Math.floor(diffInHours / 168)}w ago`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="Activity" size={20} className="text-primary" />
          <span>Recent Activity</span>
        </h3>
        <div className="text-sm text-text-secondary">
          Last 30 days
        </div>
      </div>
      <div className="space-y-4">
        {activities?.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4 p-3 hover:bg-hover rounded-lg transition-colors duration-200">
            <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center ${getActivityColor(activity?.type)}`}>
              <Icon name={getActivityIcon(activity?.type)} size={16} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-primary">
                  <span className="font-medium">{activity?.action}</span>
                  {activity?.repository && (
                    <>
                      <span className="text-text-secondary"> in </span>
                      <span className="font-medium text-accent">{activity?.repository}</span>
                    </>
                  )}
                </p>
                <span className="text-xs text-text-secondary flex-shrink-0 ml-2">
                  {formatTimeAgo(activity?.timestamp)}
                </span>
              </div>
              
              {activity?.description && (
                <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                  {activity?.description}
                </p>
              )}
              
              {activity?.stats && (
                <div className="flex items-center space-x-4 mt-2 text-xs text-text-secondary">
                  {activity?.stats?.additions && (
                    <span className="text-success">+{activity?.stats?.additions}</span>
                  )}
                  {activity?.stats?.deletions && (
                    <span className="text-error">-{activity?.stats?.deletions}</span>
                  )}
                  {activity?.stats?.files && (
                    <span>{activity?.stats?.files} files</span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border text-center">
        <button className="text-sm text-accent hover:text-accent/80 font-medium transition-colors duration-200">
          View All Activity on GitHub
        </button>
      </div>
    </div>
  );
};

export default ContributionActivity;