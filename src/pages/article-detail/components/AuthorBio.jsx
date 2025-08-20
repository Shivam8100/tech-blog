import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const AuthorBio = ({ author }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Image
            src={author?.avatar}
            alt={author?.name}
            className="w-16 h-16 rounded-full"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-text-primary">{author?.name}</h3>
            {author?.verified && (
              <Icon name="BadgeCheck" size={18} className="text-primary" />
            )}
          </div>
          
          <p className="text-sm text-text-secondary mb-3">{author?.title}</p>
          
          <p className="text-sm text-text-primary leading-relaxed mb-4">
            {author?.bio}
          </p>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-1 text-sm text-text-secondary">
              <Icon name="BookOpen" size={16} />
              <span>{author?.articlesCount} articles</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-text-secondary">
              <Icon name="Users" size={16} />
              <span>{author?.followers?.toLocaleString()} followers</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-text-secondary">
              <Icon name="MapPin" size={16} />
              <span>{author?.location}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="default"
              size="sm"
              iconName="UserPlus"
              iconPosition="left"
            >
              Follow
            </Button>
            
            <Link to="/about">
              <Button
                variant="outline"
                size="sm"
                iconName="User"
                iconPosition="left"
              >
                View Profile
              </Button>
            </Link>
            
            <div className="flex items-center space-x-2">
              {author?.socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-text-primary hover:bg-hover rounded-lg transition-colors duration-200"
                >
                  <Icon name={social?.platform} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;