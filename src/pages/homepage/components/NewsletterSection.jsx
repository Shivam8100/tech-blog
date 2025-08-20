import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Image from '../../../components/AppImage';


const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e?.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const newsletterStats = {
    subscribers: "12,500+",
    openRate: "68%",
    frequency: "Weekly",
    avgReadTime: "5 min"
  };

  const recentIssues = [
    {
      id: 1,
      title: "React 19 Features You Need to Know",
      date: "Aug 18, 2025",
      readTime: "4 min read",
      subscribers: "11.2k",
      openRate: "72%"
    },
    {
      id: 2,
      title: "TypeScript 5.5: What\'s New and Improved",
      date: "Aug 11, 2025",
      readTime: "6 min read",
      subscribers: "10.8k",
      openRate: "69%"
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js",
      date: "Aug 4, 2025",
      readTime: "5 min read",
      subscribers: "10.5k",
      openRate: "65%"
    }
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Early Access",
      description: "Get new articles 24 hours before they\'re published"
    },
    {
      icon: "BookOpen",
      title: "Exclusive Content",
      description: "Subscriber-only tutorials and deep-dives"
    },
    {
      icon: "Users",
      title: "Community Access",
      description: "Join our private Discord community"
    },
    {
      icon: "Gift",
      title: "Free Resources",
      description: "Monthly code templates and cheat sheets"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-success/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <div className="bg-card border border-success/20 rounded-xl p-8">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-success" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Welcome to the Community! 🎉
            </h2>
            <p className="text-text-secondary mb-6">
              Thank you for subscribing! Check your email for a confirmation link and your first exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Mail"
                iconPosition="left"
              >
                Check Your Email
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Join Discord Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Icon name="Mail" size={16} />
                <span>Weekly Newsletter</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Stay Ahead of the Curve
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Join thousands of developers who get exclusive insights, early access to new content, 
                and curated resources delivered to their inbox every week.
              </p>
            </div>

            {/* Newsletter Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-text-primary">{newsletterStats?.subscribers}</div>
                <div className="text-sm text-text-secondary">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-text-primary">{newsletterStats?.openRate}</div>
                <div className="text-sm text-text-secondary">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-text-primary">{newsletterStats?.frequency}</div>
                <div className="text-sm text-text-secondary">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-text-primary">{newsletterStats?.avgReadTime}</div>
                <div className="text-sm text-text-secondary">Avg Read</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-4">
              {benefits?.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={benefit?.icon} size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{benefit?.title}</h4>
                    <p className="text-sm text-text-secondary">{benefit?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscription Form */}
            <div className="newsletter-form">
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e?.target?.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    loading={isLoading}
                    iconName="Send"
                    iconPosition="right"
                    className="sm:w-auto"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-text-secondary">
                  No spam, unsubscribe at any time. We respect your privacy and will never share your email.
                </p>
              </form>
            </div>
          </div>

          {/* Recent Issues */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="Archive" size={20} className="text-primary" />
              <h3 className="text-xl font-bold text-text-primary">Recent Issues</h3>
            </div>
            
            <div className="space-y-4">
              {recentIssues?.map((issue) => (
                <div
                  key={issue?.id}
                  className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors duration-200 cursor-pointer"
                >
                  <h4 className="font-semibold text-text-primary mb-2 hover:text-primary transition-colors duration-200">
                    {issue?.title}
                  </h4>
                  <div className="flex items-center justify-between text-sm text-text-secondary mb-3">
                    <span>{issue?.date}</span>
                    <span>{issue?.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={12} />
                        <span>{issue?.subscribers}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={12} />
                        <span>{issue?.openRate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="ExternalLink" size={12} />
                      <span>Read Online</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border text-center">
              <Button
                variant="outline"
                size="sm"
                iconName="Archive"
                iconPosition="left"
                fullWidth
              >
                View All Issues
              </Button>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-card border border-border rounded-lg px-6 py-4">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt="Subscriber"
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
                  alt="Subscriber"
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
                  alt="Subscriber"
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full border-2 border-background flex items-center justify-center text-xs font-bold">
                  +12k
                </div>
              </div>
              <span className="text-sm text-text-secondary">
                Join developers from Google, Microsoft, Netflix, and more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;