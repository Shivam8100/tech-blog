import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LabSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const labProjects = [
    {
      id: 1,
      title: "Interactive React Hook Visualizer",
      description: "Visualize how React hooks work under the hood with interactive diagrams and live code examples.",
      type: "Interactive Demo",
      technology: "React",
      difficulty: "Intermediate",
      lastUpdated: "2025-08-19",
      features: ["Live Code Editor", "Visual Diagrams", "Step-by-step Execution"],
      demoCode: `const [count, setCount] = useState(0);
const [name, setName] = useState('');

useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);

return (
  <div>
    <h1>Hello {name}!</h1>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  </div>
);`,
      stats: {
        views: "3.2k",
        forks: 45,
        stars: 128
      }
    },
    {
      id: 2,
      title: "CSS Animation Playground",
      description: "Experiment with CSS animations, transitions, and keyframes in a live environment with instant preview.",
      type: "Code Playground",
      technology: "CSS",
      difficulty: "Beginner",
      lastUpdated: "2025-08-17",
      features: ["Real-time Preview", "Animation Timeline", "Export Code"],
      demoCode: `@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-animation {
  animation: slideIn 0.5s ease-out;
  background: linear-gradient(45deg, #667eea, #764ba2);
  padding: 20px;
  border-radius: 8px;
  color: white;
}`,
      stats: {
        views: "2.8k",
        forks: 32,
        stars: 89
      }
    },
    {
      id: 3,
      title: "Algorithm Complexity Analyzer",
      description: "Analyze and visualize the time and space complexity of common algorithms with interactive charts.",
      type: "Educational Tool",
      technology: "JavaScript",
      difficulty: "Advanced",
      lastUpdated: "2025-08-15",
      features: ["Performance Metrics", "Visual Comparisons", "Big O Notation"],
      demoCode: `// Bubble Sort - O(n²)
function bubbleSort(arr) {
  const n = arr.length;
  let comparisons = 0;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return { sortedArray: arr, comparisons };
}`,
      stats: {
        views: "1.9k",
        forks: 28,
        stars: 76
      }
    }
  ];

  const getTechnologyColor = (tech) => {
    switch (tech) {
      case 'React':
        return 'bg-blue-500/10 text-blue-600 border-blue-200';
      case 'CSS':
        return 'bg-purple-500/10 text-purple-600 border-purple-200';
      case 'JavaScript':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-success/10 text-success border-success/20';
      case 'Intermediate':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Advanced':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-card via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Flask" size={16} />
            <span>Experimental Features</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Latest from the Lab
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Interactive demos, code experiments, and technical deep-dives that push the boundaries of web development.
          </p>
        </div>

        {/* Lab Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Project List */}
          <div className="space-y-4">
            {labProjects?.map((project, index) => (
              <div
                key={project?.id}
                className={`interactive-card bg-card border rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  activeDemo === index 
                    ? 'border-primary shadow-lg ring-2 ring-primary/20' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Beaker" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">{project?.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getTechnologyColor(project?.technology)}`}>
                          {project?.technology}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(project?.difficulty)}`}>
                          {project?.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-text-secondary">
                    {project?.lastUpdated}
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                  {project?.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{project?.stats?.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="GitFork" size={12} />
                      <span>{project?.stats?.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={12} />
                      <span>{project?.stats?.stars}</span>
                    </div>
                  </div>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                    {project?.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Preview */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-muted px-4 py-3 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-text-primary">
                    {labProjects?.[activeDemo]?.title}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="xs" iconName="Play">
                    Run
                  </Button>
                  <Button variant="ghost" size="xs" iconName="Copy">
                    Copy
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <pre className="text-sm font-mono text-text-primary bg-code-bg text-code-text p-4 rounded-lg overflow-x-auto">
                <code>{labProjects?.[activeDemo]?.demoCode}</code>
              </pre>
            </div>

            <div className="px-4 pb-4">
              <div className="bg-muted rounded-lg p-3">
                <div className="text-sm font-medium text-text-primary mb-2">Features:</div>
                <div className="flex flex-wrap gap-1">
                  {labProjects?.[activeDemo]?.features?.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lab Stats & CTA */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Lab Statistics */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="BarChart3" size={20} className="text-primary" />
              <h3 className="text-lg font-semibold text-text-primary">Lab Statistics</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">24</div>
                <div className="text-sm text-text-secondary">Active Experiments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">15k+</div>
                <div className="text-sm text-text-secondary">Code Runs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">89%</div>
                <div className="text-sm text-text-secondary">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">156</div>
                <div className="text-sm text-text-secondary">Community Forks</div>
              </div>
            </div>
          </div>

          {/* Explore More */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Rocket" size={20} className="text-primary" />
              <h3 className="text-lg font-semibold text-text-primary">Explore More</h3>
            </div>
            <p className="text-text-secondary mb-4">
              Discover all our interactive demos, code playgrounds, and experimental features in the project showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="default"
                iconName="Code2"
                iconPosition="left"
                asChild
              >
                <Link to="/project-showcase">View All Projects</Link>
              </Button>
              <Button
                variant="outline"
                iconName="Github"
                iconPosition="left"
              >
                GitHub Repository
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;