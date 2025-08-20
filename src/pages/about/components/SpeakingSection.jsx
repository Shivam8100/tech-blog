import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SpeakingSection = () => {
  const speakingEngagements = [
    {
      event: "TechConf 2024",
      title: "The Future of Web Development",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      audience: "500+ developers",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      type: "Keynote",
      topics: ["React", "Next.js", "Performance"]
    },
    {
      event: "DevSummit 2024",
      title: "Building Scalable React Applications",
      date: "January 22, 2024",
      location: "New York, NY",
      audience: "300+ engineers",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=250&fit=crop",
      type: "Workshop",
      topics: ["Architecture", "State Management", "Testing"]
    },
    {
      event: "CodeCamp 2023",
      title: "Modern JavaScript Patterns",
      date: "November 8, 2023",
      location: "Austin, TX",
      audience: "200+ developers",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
      type: "Talk",
      topics: ["ES2023", "Async Patterns", "Performance"]
    }
  ];

  const communityContributions = [
    {
      platform: "GitHub",
      metric: "50+ repositories",
      description: "Open source projects and contributions",
      icon: "Github",
      link: "#"
    },
    {
      platform: "Stack Overflow",
      metric: "15k+ reputation",
      description: "Helping developers solve problems",
      icon: "HelpCircle",
      link: "#"
    },
    {
      platform: "Dev.to",
      metric: "100k+ views",
      description: "Technical articles and tutorials",
      icon: "BookOpen",
      link: "#"
    },
    {
      platform: "YouTube",
      metric: "25k+ subscribers",
      description: "Video tutorials and tech talks",
      icon: "Play",
      link: "#"
    }
  ];

  const upcomingEvents = [
    {
      event: "ReactConf 2024",
      date: "September 15, 2024",
      location: "Las Vegas, NV",
      status: "Confirmed"
    },
    {
      event: "JSWorld Conference",
      date: "October 22, 2024",
      location: "Amsterdam, NL",
      status: "Confirmed"
    },
    {
      event: "TechTalk Podcast",
      date: "August 30, 2024",
      location: "Remote",
      status: "Scheduled"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Speaking & Community
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Sharing knowledge through conferences, workshops, and community contributions
          </p>
        </div>

        {/* Recent Speaking Engagements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Recent Speaking Engagements
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {speakingEngagements?.map((engagement, index) => (
              <div key={index} className="interactive-card group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={engagement?.image}
                    alt={engagement?.event}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      {engagement?.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-text-primary mb-2">
                      {engagement?.title}
                    </h4>
                    <p className="text-accent font-semibold">{engagement?.event}</p>
                  </div>

                  <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} />
                      <span>{engagement?.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} />
                      <span>{engagement?.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} />
                      <span>{engagement?.audience}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {engagement?.topics?.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Contributions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Community Contributions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityContributions?.map((contribution, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={contribution?.icon} size={24} color="white" strokeWidth={2} />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {contribution?.metric}
                </div>
                <div className="font-semibold text-text-primary mb-2">
                  {contribution?.platform}
                </div>
                <p className="text-sm text-text-secondary">
                  {contribution?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Upcoming Events
            </h3>
            <p className="text-text-secondary">
              Where you can catch me speaking next
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents?.map((event, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-text-primary mb-1">
                      {event?.event}
                    </h4>
                    <div className="text-sm text-text-secondary space-y-1">
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={14} />
                        <span>{event?.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={14} />
                        <span>{event?.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded-full">
                    {event?.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn-primary px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 mx-auto hover-lift">
              <Icon name="Mail" size={20} />
              <span>Invite Me to Speak</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;