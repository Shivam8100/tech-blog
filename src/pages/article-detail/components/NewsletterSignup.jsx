import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email?.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="newsletter-form">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
          <Icon name="Mail" size={24} className="text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Stay Updated with Tech Insights
        </h3>
        <p className="text-text-secondary">
          Get the latest articles, tutorials, and tech insights delivered to your inbox weekly.
        </p>
      </div>
      {isSubscribed ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h4 className="text-lg font-semibold text-text-primary mb-2">
            Successfully Subscribed!
          </h4>
          <p className="text-text-secondary">
            Thank you for subscribing. You'll receive our next newsletter soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            required
            className="text-center"
          />
          
          <Button
            type="submit"
            variant="default"
            size="lg"
            iconName="Send"
            iconPosition="left"
            fullWidth
            disabled={!email?.trim()}
          >
            Subscribe to Newsletter
          </Button>
          
          <p className="text-xs text-text-secondary text-center">
            No spam, unsubscribe at any time. Read our{' '}
            <a href="#" className="text-primary hover:underline">
              privacy policy
            </a>
            .
          </p>
        </form>
      )}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={16} />
            <span>12,500+ subscribers</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={16} />
            <span>4.9/5 rating</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={16} />
            <span>Weekly delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;