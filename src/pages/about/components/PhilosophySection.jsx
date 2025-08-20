import React from "react";
import Icon from "../../../components/AppIcon";

const PhilosophySection = () => {
  const philosophyPrinciples = [
    {
      icon: "Lightbulb",
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly, and staying curious is the key to remaining relevant. I believe in learning in public and sharing the journey.",
      color: "text-yellow-500",
    },
    {
      icon: "Users",
      title: "Knowledge Sharing",
      description:
        "The best way to solidify understanding is to teach others. Every complex concept can be broken down into digestible insights.",
      color: "text-blue-500",
    },
    {
      icon: "Target",
      title: "Practical Application",
      description:
        "Theory without practice is incomplete. I focus on real-world applications that solve actual problems developers face daily.",
      color: "text-green-500",
    },
    {
      icon: "Heart",
      title: "Community First",
      description:
        "Technology is built by people, for people. Building inclusive communities where everyone can learn and grow is essential.",
      color: "text-red-500",
    },
  ];

  const approaches = [
    {
      title: "Technology Evaluation",
      description:
        "I assess new technologies based on problem-solving capability, community support, learning curve, and long-term viability.",
      icon: "Search",
    },
    {
      title: "Learning Methodology",
      description:
        "Build small projects, teach concepts to others, contribute to open source, and maintain a beginner's mindset.",
      icon: "BookOpen",
    },
    {
      title: "Content Creation",
      description:
        "Every article starts with a real problem I've encountered. I focus on the 'why' before the 'how' and include practical examples.",
      icon: "PenTool",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            My Philosophy
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The principles and approaches that guide my work, learning, and
            contribution to the tech community
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {philosophyPrinciples?.map((principle, index) => (
            <div key={index} className="interactive-card text-center group">
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon
                  name={principle?.icon}
                  size={32}
                  className={principle?.color}
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {principle?.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {principle?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Approaches */}
        <div className="space-y-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              My Approach to Tech
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              How I evaluate, learn, and share knowledge about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {approaches?.map((approach, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon
                      name={approach?.icon}
                      size={24}
                      color="white"
                      strokeWidth={2}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary">
                    {approach?.title}
                  </h4>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {approach?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 border border-primary/10">
            <Icon
              name="Quote"
              size={48}
              className="text-primary mx-auto mb-6"
            />
            <blockquote className="text-2xl lg:text-3xl font-medium text-text-primary leading-relaxed mb-6">
              "The best way to learn is to teach, the best way to understand is
              to build, and the best way to grow is to share your journey with
              others."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Icon name="User" size={20} color="white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-text-primary">
                  Shivam Ranjan
                </div>
                <div className="text-sm text-text-secondary">
                  Software Engineer & Tech Blogger
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
