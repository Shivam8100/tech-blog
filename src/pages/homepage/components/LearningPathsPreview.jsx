import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathsPreview = () => {
  const learningPaths = [
    {
      id: 1,
      title: "React Fundamentals to Advanced Patterns",
      description: "Master React from basic components to advanced patterns like render props, compound components, and custom hooks.",
      level: "Beginner to Advanced",
      duration: "8 weeks",
      articlesCount: 12,
      studentsCount: "2.4k",
      progress: 0,
      color: "from-blue-500 to-cyan-500",
      icon: "Atom",
      topics: ["Components", "Hooks", "State Management", "Performance", "Patterns"],
      difficulty: "Progressive",
      lastUpdated: "2025-08-15"
    },
    {
      id: 2,
      title: "Cloud Architecture Essentials",
      description: "Learn to design and implement scalable cloud solutions using AWS, Docker, and modern DevOps practices.",
      level: "Intermediate",
      duration: "6 weeks",
      articlesCount: 10,
      studentsCount: "1.8k",
      progress: 25,
      color: "from-purple-500 to-pink-500",
      icon: "Cloud",
      topics: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      difficulty: "Intermediate",
      lastUpdated: "2025-08-12"
    },
    {
      id: 3,
      title: "Full-Stack TypeScript Development",
      description: "Build end-to-end applications with TypeScript, covering frontend frameworks, backend APIs, and database integration.",
      level: "Intermediate to Advanced",
      duration: "10 weeks",
      articlesCount: 15,
      studentsCount: "3.1k",
      progress: 60,
      color: "from-green-500 to-teal-500",
      icon: "Code2",
      topics: ["TypeScript", "Node.js", "React", "Database", "Testing"],
      difficulty: "Advanced",
      lastUpdated: "2025-08-18"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Progressive':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Intermediate':
        return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'Advanced':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Map" size={16} />
            <span>Structured Learning</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Learning Paths
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Follow curated sequences of articles designed to take you from beginner to expert in specific technologies and concepts.
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {learningPaths?.map((path) => (
            <div
              key={path?.id}
              className="interactive-card bg-card border border-border rounded-xl overflow-hidden group"
            >
              {/* Header with Gradient */}
              <div className={`h-24 bg-gradient-to-r ${path?.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon name={path?.icon} size={20} color="white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(path?.difficulty)}`}>
                    {path?.difficulty}
                  </span>
                </div>
                {/* Progress Bar */}
                {path?.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div 
                      className="h-full bg-white transition-all duration-500"
                      style={{ width: `${path?.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                    {path?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {path?.description}
                  </p>
                </div>

                {/* Meta Information */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-text-primary">{path?.articlesCount}</div>
                    <div className="text-xs text-text-secondary">Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-text-primary">{path?.studentsCount}</div>
                    <div className="text-xs text-text-secondary">Students</div>
                  </div>
                </div>

                {/* Topics */}
                <div>
                  <div className="text-sm font-medium text-text-primary mb-2">Topics Covered:</div>
                  <div className="flex flex-wrap gap-1">
                    {path?.topics?.map((topic, index) => (
                      <span
                        key={index}
                        className="text-xs bg-muted text-text-secondary px-2 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Duration & Level */}
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{path?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="BarChart3" size={14} />
                    <span>{path?.level}</span>
                  </div>
                </div>

                {/* Progress Section */}
                {path?.progress > 0 ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">Your Progress</span>
                      <span className="font-medium text-primary">{path?.progress}%</span>
                    </div>
                    <Button
                      variant="default"
                      fullWidth
                      iconName="Play"
                      iconPosition="left"
                      asChild
                    >
                      <Link to="/learning-paths">Continue Learning</Link>
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="BookOpen"
                    iconPosition="left"
                    asChild
                  >
                    <Link to="/learning-paths">Start Learning Path</Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Compass" size={24} className="text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-text-primary">Ready to start your journey?</div>
                <div className="text-sm text-text-secondary">Explore all learning paths and track your progress</div>
              </div>
            </div>
            <Button
              variant="default"
              iconName="ArrowRight"
              iconPosition="right"
              asChild
            >
              <Link to="/learning-paths">View All Paths</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathsPreview;