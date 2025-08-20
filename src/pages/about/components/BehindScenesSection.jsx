import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BehindScenesSection = () => {
  const setupItems = [
    {
      category: "Hardware",
      items: [
        { name: "MacBook Pro M2", description: "Primary development machine" },
        { name: "Dell UltraSharp 4K", description: "External monitor for productivity" },
        { name: "Mechanical Keyboard", description: "Cherry MX Blue switches" },
        { name: "Logitech MX Master 3", description: "Precision mouse for design work" }
      ],
      icon: "Monitor"
    },
    {
      category: "Software & Tools",
      items: [
        { name: "VS Code", description: "Primary code editor with custom themes" },
        { name: "iTerm2 + Oh My Zsh", description: "Terminal setup with productivity plugins" },
        { name: "Figma", description: "Design and prototyping tool" },
        { name: "Notion", description: "Knowledge management and planning" }
      ],
      icon: "Code"
    },
    {
      category: "Learning Resources",
      items: [
        { name: "Technical Books", description: "Always reading 2-3 tech books" },
        { name: "Online Courses", description: "Pluralsight, Udemy, and YouTube" },
        { name: "Podcasts", description: "Syntax, Shop Talk Show, and more" },
        { name: "Documentation", description: "Official docs are the best teachers" }
      ],
      icon: "BookOpen"
    }
  ];

  const dailyRoutine = [
    {
      time: "6:00 AM",
      activity: "Morning Reading",
      description: "Tech news, articles, and industry updates",
      icon: "Sunrise"
    },
    {
      time: "9:00 AM",
      activity: "Deep Work",
      description: "Focused coding and problem-solving sessions",
      icon: "Code2"
    },
    {
      time: "12:00 PM",
      activity: "Learning Break",
      description: "Exploring new technologies and tools",
      icon: "Lightbulb"
    },
    {
      time: "3:00 PM",
      activity: "Community Time",
      description: "Answering questions, reviewing PRs",
      icon: "Users"
    },
    {
      time: "6:00 PM",
      activity: "Writing",
      description: "Working on blog posts and documentation",
      icon: "PenTool"
    },
    {
      time: "8:00 PM",
      activity: "Side Projects",
      description: "Open source contributions and experiments",
      icon: "Rocket"
    }
  ];

  const personalInsights = [
    {
      title: "Coffee Enthusiast",
      description: "I believe great code starts with great coffee. Currently exploring single-origin beans from Ethiopia.",
      icon: "Coffee",
      color: "text-amber-500"
    },
    {
      title: "Open Source Advocate",
      description: "Contributing to open source projects has shaped my career more than any formal education.",
      icon: "Heart",
      color: "text-red-500"
    },
    {
      title: "Continuous Learner",
      description: "I dedicate at least 2 hours daily to learning something new, whether it's a language, framework, or concept.",
      icon: "BookOpen",
      color: "text-blue-500"
    },
    {
      title: "Minimalist Coder",
      description: "I believe in writing less code that does more. Simplicity and readability are my top priorities.",
      icon: "Minimize2",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Behind the Scenes
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A peek into my development setup, daily routines, and the personal side of my tech journey
          </p>
        </div>

        {/* Development Setup */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            My Development Setup
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {setupItems?.map((category, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon name={category?.icon} size={20} color="white" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary">
                    {category?.category}
                  </h4>
                </div>
                <div className="space-y-4">
                  {category?.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-accent/30 pl-4">
                      <div className="font-semibold text-text-primary">
                        {item?.name}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {item?.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Routine */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            A Day in My Life
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
              
              <div className="space-y-8">
                {dailyRoutine?.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div className="relative z-10 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon name={item?.icon} size={20} color="white" strokeWidth={2} />
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-text-primary">
                          {item?.activity}
                        </h4>
                        <span className="text-sm font-semibold text-accent">
                          {item?.time}
                        </span>
                      </div>
                      <p className="text-text-secondary">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Insights */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Personal Insights
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {personalInsights?.map((insight, index) => (
              <div key={index} className="interactive-card group">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={insight?.icon} size={24} className={insight?.color} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-text-primary mb-3">
                      {insight?.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {insight?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workspace Image */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            My Workspace
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <Image
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop"
                alt="Development workspace setup"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">
                  Where the Magic Happens
                </h4>
                <p className="text-white/90">
                  My home office setup optimized for productivity and creativity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindScenesSection;