import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofSection = () => {
  const speakingEngagements = [
    {
      id: 1,
      event: "React Conference 2025",
      title: "Advanced React Patterns for Scale",
      date: "March 15, 2025",
      location: "San Francisco, CA",
      type: "Keynote",
      attendees: "2,500+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      event: "DevOps Summit",
      title: "Cloud-Native Architecture Patterns",
      date: "February 28, 2025",
      location: "Austin, TX",
      type: "Workshop",
      attendees: "150",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      event: "JavaScript Weekly Podcast",
      title: "The Future of Frontend Development",
      date: "January 20, 2025",
      location: "Remote",
      type: "Podcast",
      attendees: "50k+ listeners",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=200&fit=crop"
    }
  ];

  const githubActivity = {
    contributions: 1247,
    repositories: 42,
    followers: 3200,
    stars: 8900,
    recentActivity: [
      { repo: "react-advanced-patterns", action: "pushed", time: "2 hours ago" },
      { repo: "typescript-utils", action: "created", time: "1 day ago" },
      { repo: "css-grid-examples", action: "updated", time: "3 days ago" },
      { repo: "node-microservices", action: "merged PR", time: "5 days ago" }
    ]
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      company: "Google",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      content: "Alex\'s articles on React patterns completely transformed how our team approaches component architecture. The interactive examples made complex concepts crystal clear.",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Tech Lead",
      company: "Microsoft",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      content: "The learning paths here are incredibly well-structured. I\'ve recommended this blog to my entire team for staying current with modern development practices.",
      rating: 5,
      featured: false
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Full Stack Developer",
      company: "Stripe",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      content: "The technical depth combined with practical examples is unmatched. These articles have helped me level up my skills and advance my career.",
      rating: 5,
      featured: true
    }
  ];

  const achievements = [
    {
      title: "Top 1% Developer",
      description: "GitHub contributions",
      icon: "Github",
      color: "text-gray-600"
    },
    {
      title: "50k+ Monthly Readers",
      description: "Across all platforms",
      icon: "Users",
      color: "text-blue-600"
    },
    {
      title: "Conference Speaker",
      description: "15+ tech conferences",
      icon: "Mic",
      color: "text-purple-600"
    },
    {
      title: "Open Source Contributor",
      description: "200+ repositories",
      icon: "Code2",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Award" size={16} />
            <span>Community Recognition</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Building credibility through consistent value delivery, community engagement, and technical excellence.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements?.map((achievement, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={achievement?.icon} size={24} className={achievement?.color} />
              </div>
              <h3 className="font-semibold text-text-primary mb-1">{achievement?.title}</h3>
              <p className="text-sm text-text-secondary">{achievement?.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Speaking Engagements */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="Calendar" size={20} className="text-primary" />
              <h3 className="text-xl font-bold text-text-primary">Recent Speaking Engagements</h3>
            </div>
            <div className="space-y-4">
              {speakingEngagements?.map((engagement) => (
                <div
                  key={engagement?.id}
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={engagement?.image}
                        alt={engagement?.event}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-text-primary truncate">
                          {engagement?.title}
                        </h4>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium flex-shrink-0">
                          {engagement?.type}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mb-2">{engagement?.event}</p>
                      <div className="flex items-center justify-between text-xs text-text-secondary">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={12} />
                            <span>{engagement?.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Calendar" size={12} />
                            <span>{engagement?.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Users" size={12} />
                          <span>{engagement?.attendees}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Activity */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="Github" size={20} className="text-primary" />
              <h3 className="text-xl font-bold text-text-primary">GitHub Activity</h3>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              {/* GitHub Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-text-primary">{githubActivity?.contributions}</div>
                  <div className="text-xs text-text-secondary">Contributions</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-text-primary">{githubActivity?.repositories}</div>
                  <div className="text-xs text-text-secondary">Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-text-primary">{githubActivity?.followers}</div>
                  <div className="text-xs text-text-secondary">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-text-primary">{githubActivity?.stars}</div>
                  <div className="text-xs text-text-secondary">Stars</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="border-t border-border pt-4">
                <h4 className="text-sm font-medium text-text-primary mb-3">Recent Activity</h4>
                <div className="space-y-2">
                  {githubActivity?.recentActivity?.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-text-primary font-medium">{activity?.repo}</span>
                        <span className="text-text-secondary">{activity?.action}</span>
                      </div>
                      <span className="text-text-secondary">{activity?.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <Icon name="MessageSquare" size={20} className="text-primary" />
            <h3 className="text-xl font-bold text-text-primary">What Developers Say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial?.id}
                className={`bg-card border rounded-lg p-6 ${
                  testimonial?.featured 
                    ? 'border-primary shadow-lg ring-2 ring-primary/10' 
                    : 'border-border'
                }`}
              >
                {testimonial?.featured && (
                  <div className="flex items-center space-x-1 mb-3">
                    <Icon name="Star" size={14} className="text-accent" />
                    <span className="text-xs font-medium text-accent">Featured Review</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  "{testimonial?.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      {testimonial?.name}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {testimonial?.role} at {testimonial?.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;