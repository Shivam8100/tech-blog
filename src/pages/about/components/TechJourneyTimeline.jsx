import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechJourneyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const journeyData = [
    {
      year: 2016,
      title: "The Beginning",
      role: "Junior Developer",
      company: "StartupTech Inc.",
      description: "Started my journey with JavaScript and React. Built my first production application and discovered my passion for clean, maintainable code.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      achievement: "Shipped first major feature used by 10k+ users",
      icon: "Rocket"
    },
    {
      year: 2018,
      title: "Full-Stack Evolution",
      role: "Software Engineer",
      company: "TechCorp Solutions",
      description: "Expanded into backend development and cloud technologies. Led migration of legacy systems to modern architecture.",
      technologies: ["Python", "AWS", "Docker", "PostgreSQL"],
      achievement: "Reduced system downtime by 85%",
      icon: "Server"
    },
    {
      year: 2020,
      title: "Leadership & Scale",
      role: "Senior Software Engineer",
      company: "InnovateLabs",
      description: "Mentored junior developers while architecting scalable solutions. Started writing technical articles to share knowledge.",
      technologies: ["TypeScript", "Kubernetes", "GraphQL", "Redis"],
      achievement: "Mentored 12 developers, published 50+ articles",
      icon: "Users"
    },
    {
      year: 2022,
      title: "Thought Leadership",
      role: "Tech Lead",
      company: "FutureTech Systems",
      description: "Leading cross-functional teams and driving technical strategy. Speaking at conferences and building open-source projects.",
      technologies: ["Next.js", "Microservices", "AI/ML", "Blockchain"],
      achievement: "Spoke at 8 conferences, 100k+ article views",
      icon: "Trophy"
    },
    {
      year: 2024,
      title: "Innovation & Impact",
      role: "Principal Engineer",
      company: "TechBlog Hub",
      description: "Focusing on emerging technologies and knowledge sharing. Building platforms that empower developers worldwide.",
      technologies: ["AI Integration", "Web3", "Edge Computing", "Quantum"],
      achievement: "Launched TechBlog Hub, 25k+ community members",
      icon: "Sparkles"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            My Tech Journey
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A timeline of continuous learning, growth, and contribution to the tech community
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {journeyData?.map((item) => (
            <button
              key={item?.year}
              onClick={() => setActiveYear(item?.year)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeYear === item?.year
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-text-secondary hover:text-text-primary hover:bg-hover'
              }`}
            >
              {item?.year}
            </button>
          ))}
        </div>

        {/* Active Timeline Item */}
        <div className="max-w-4xl mx-auto">
          {journeyData?.map((item) => (
            <div
              key={item?.year}
              className={`transition-all duration-500 ${
                activeYear === item?.year
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8 absolute'
              }`}
            >
              {activeYear === item?.year && (
                <div className="interactive-card">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name={item?.icon} size={24} color="white" strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-text-primary mb-2">
                            {item?.title}
                          </h3>
                          <div className="text-lg text-accent font-semibold mb-1">
                            {item?.role}
                          </div>
                          <div className="text-text-secondary font-medium">
                            {item?.company}
                          </div>
                        </div>
                      </div>

                      <p className="text-text-secondary leading-relaxed text-lg">
                        {item?.description}
                      </p>

                      <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Award" size={20} className="text-success" />
                          <span className="font-semibold text-success">Key Achievement</span>
                        </div>
                        <p className="text-text-primary">{item?.achievement}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
                          <Icon name="Code" size={20} />
                          <span>Technologies</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item?.technologies?.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-card border border-border rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-1">
                            {item?.year}
                          </div>
                          <div className="text-sm text-text-secondary">
                            Career Milestone
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechJourneyTimeline;