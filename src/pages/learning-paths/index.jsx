import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PathCard from './components/PathCard';
import ProgressDashboard from './components/ProgressDashboard';
import PathFilters from './components/PathFilters';
import FeaturedPaths from './components/FeaturedPaths';
import PathStats from './components/PathStats';

const LearningPaths = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Load language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock data for learning paths
  const learningPaths = [
    {
      id: 1,
      title: "Modern JavaScript Mastery",
      description: "Master ES6+, async programming, and modern JavaScript frameworks. Build real-world applications with cutting-edge JavaScript features and best practices.",
      category: "Frontend Development",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
      totalArticles: 24,
      completedArticles: 8,
      estimatedHours: 45,
      enrolledCount: 1247,
      skills: ["ES6+", "Async/Await", "Modules", "DOM Manipulation", "API Integration"],
      prerequisites: ["Basic JavaScript", "HTML/CSS"],
      learningOutcomes: [
        "Master modern JavaScript syntax and features",
        "Build interactive web applications",
        "Understand asynchronous programming patterns",
        "Implement modern development workflows"
      ]
    },
    {
      id: 2,
      title: "Cloud-Native Development",
      description: "Learn to build, deploy, and scale applications in the cloud using Docker, Kubernetes, and modern DevOps practices.",
      category: "DevOps & Cloud",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      totalArticles: 32,
      completedArticles: 0,
      estimatedHours: 60,
      enrolledCount: 892,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Microservices"],
      prerequisites: ["Linux basics", "Command line", "Basic networking"],
      learningOutcomes: [
        "Deploy applications using containers",
        "Orchestrate services with Kubernetes",
        "Implement CI/CD pipelines",
        "Monitor and scale cloud applications"
      ]
    },
    {
      id: 3,
      title: "System Design Fundamentals",
      description: "Understand how to design scalable, reliable systems. Learn about distributed systems, databases, and architectural patterns.",
      category: "Backend Development",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      totalArticles: 28,
      completedArticles: 28,
      estimatedHours: 55,
      enrolledCount: 2156,
      skills: ["System Architecture", "Database Design", "Load Balancing", "Caching", "Scalability"],
      prerequisites: ["Programming experience", "Database knowledge"],
      learningOutcomes: [
        "Design scalable system architectures",
        "Choose appropriate databases and storage solutions",
        "Implement caching and load balancing strategies",
        "Handle system failures and recovery"
      ]
    },
    {
      id: 4,
      title: "React Development Bootcamp",
      description: "Complete guide to React development including hooks, context, testing, and performance optimization techniques.",
      category: "Frontend Development",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      totalArticles: 20,
      completedArticles: 5,
      estimatedHours: 35,
      enrolledCount: 3421,
      skills: ["React", "JSX", "Hooks", "State Management", "Testing"],
      prerequisites: ["JavaScript basics", "HTML/CSS"],
      learningOutcomes: [
        "Build dynamic React applications",
        "Manage application state effectively",
        "Test React components",
        "Optimize application performance"
      ]
    },
    {
      id: 5,
      title: "Machine Learning with Python",
      description: "Dive into machine learning algorithms, data preprocessing, and model deployment using Python and popular ML libraries.",
      category: "AI & Machine Learning",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      totalArticles: 36,
      completedArticles: 12,
      estimatedHours: 70,
      enrolledCount: 1876,
      skills: ["Python", "Scikit-learn", "TensorFlow", "Data Analysis", "Model Deployment"],
      prerequisites: ["Python programming", "Statistics basics"],
      learningOutcomes: [
        "Implement machine learning algorithms",
        "Process and analyze datasets",
        "Train and evaluate ML models",
        "Deploy models to production"
      ]
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile applications using React Native. Learn navigation, state management, and native integrations.",
      category: "Mobile Development",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      totalArticles: 26,
      completedArticles: 0,
      estimatedHours: 50,
      enrolledCount: 1543,
      skills: ["React Native", "Mobile UI", "Navigation", "Native Modules", "App Store Deployment"],
      prerequisites: ["React knowledge", "JavaScript"],
      learningOutcomes: [
        "Develop cross-platform mobile apps",
        "Implement native device features",
        "Handle app navigation and state",
        "Deploy apps to app stores"
      ]
    }
  ];

  // Mock user progress data
  const userProgress = {
    totalPaths: 6,
    completedPaths: 1,
    inProgressPaths: 3,
    totalHoursSpent: 127,
    skillsAcquired: 15,
    certificatesEarned: 1
  };

  // Mock platform stats
  const platformStats = {
    totalPaths: 50,
    activeLearners: 12500,
    certificatesIssued: 8750,
    totalHours: 2000
  };

  // Featured paths (first 2 paths)
  const featuredPaths = learningPaths?.slice(0, 2);

  // Filter paths based on selected criteria
  const filteredPaths = learningPaths?.filter(path => {
    const matchesCategory = selectedCategory === 'all' || 
      path?.category?.toLowerCase()?.includes(selectedCategory?.toLowerCase());
    
    const matchesDifficulty = selectedDifficulty === 'all' || 
      path?.difficulty === selectedDifficulty;
    
    const matchesStatus = selectedStatus === 'all' || 
      (selectedStatus === 'not-started' && path?.completedArticles === 0) ||
      (selectedStatus === 'in-progress' && path?.completedArticles > 0 && path?.completedArticles < path?.totalArticles) ||
      (selectedStatus === 'completed' && path?.completedArticles === path?.totalArticles);
    
    const matchesSearch = searchQuery === '' || 
      path?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      path?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      path?.skills?.some(skill => skill?.toLowerCase()?.includes(searchQuery?.toLowerCase()));

    return matchesCategory && matchesDifficulty && matchesStatus && matchesSearch;
  });

  const handleStartPath = (pathId) => {
    console.log(`Starting learning path: ${pathId}`);
    // Navigate to first article of the path
    navigate('/article-detail');
  };

  const handleContinuePath = (pathId) => {
    console.log(`Continuing learning path: ${pathId}`);
    // Navigate to current article in the path
    navigate('/article-detail');
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedStatus('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Map" size={32} className="text-primary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
                Learning Paths
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Structured journeys through complex technical topics. Transform scattered knowledge into 
                comprehensive expertise with our curated learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="left"
                  onClick={() => document.getElementById('learning-paths')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Paths
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="TrendingUp"
                  iconPosition="left"
                  onClick={() => document.getElementById('progress-dashboard')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Progress
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Stats */}
        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PathStats stats={platformStats} />
          </div>
        </section>

        {/* Progress Dashboard */}
        <section id="progress-dashboard" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProgressDashboard userProgress={userProgress} />
          </div>
        </section>

        {/* Featured Paths */}
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedPaths 
              featuredPaths={featuredPaths} 
              onStartPath={handleStartPath}
            />
          </div>
        </section>

        {/* All Learning Paths */}
        <section id="learning-paths" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">All Learning Paths</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Choose your learning adventure. Each path is carefully crafted to take you from 
                beginner to expert with hands-on projects and real-world applications.
              </p>
            </div>

            {/* Filters */}
            <PathFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={setSelectedDifficulty}
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClearFilters={handleClearFilters}
            />

            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-text-secondary">
                Showing {filteredPaths?.length} of {learningPaths?.length} learning paths
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Filter" size={16} />
                <span>Filtered by: {selectedCategory !== 'all' ? selectedCategory : 'All'}</span>
              </div>
            </div>

            {/* Learning Paths Grid */}
            {filteredPaths?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPaths?.map((path) => (
                  <PathCard
                    key={path?.id}
                    path={path}
                    onStartPath={handleStartPath}
                    onContinuePath={handleContinuePath}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="bg-muted/50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No paths found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your filters or search terms to find learning paths.
                </p>
                <Button
                  variant="outline"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="newsletter-form">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Icon name="Mail" size={32} className="text-accent" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Stay Updated on New Learning Paths
              </h2>
              <p className="text-text-secondary mb-8 text-lg">
                Get notified when we release new learning paths and exclusive content for our community.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input flex-1"
                />
                <Button
                  variant="default"
                  iconName="Send"
                  iconPosition="right"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                Join 12,500+ developers already learning with us. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold">TechBlog Hub</span>
              </div>
              <p className="text-secondary-foreground/80 mb-4 max-w-md">
                Interactive learning platform for developers. Master complex technical topics 
                through structured learning paths and hands-on projects.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="Github" size={20} className="text-secondary-foreground/60 hover:text-secondary-foreground cursor-pointer transition-colors duration-200" />
                <Icon name="Twitter" size={20} className="text-secondary-foreground/60 hover:text-secondary-foreground cursor-pointer transition-colors duration-200" />
                <Icon name="Linkedin" size={20} className="text-secondary-foreground/60 hover:text-secondary-foreground cursor-pointer transition-colors duration-200" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/homepage" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">Home</a></li>
                <li><a href="/article-detail" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">Articles</a></li>
                <li><a href="/project-showcase" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">Projects</a></li>
                <li><a href="/about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">About</a></li>
              </ul>
            </div>

            {/* Learning */}
            <div>
              <h3 className="font-semibold mb-4">Learning</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/learning-paths" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">Learning Paths</a></li>
                <li><a href="/search-discovery" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">Search</a></li>
                <li><span className="text-secondary-foreground/80">Certificates</span></li>
                <li><span className="text-secondary-foreground/80">Community</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date()?.getFullYear()} TechBlog Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearningPaths;