import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import ProjectStats from "./components/ProjectStats";
import FeaturedProject from "./components/FeaturedProject";
import ProjectModal from "./components/ProjectModal";
import ContributionActivity from "./components/ContributionActivity";

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeStatus, setActiveStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
      fullDescription: `A comprehensive e-commerce platform built from the ground up to demonstrate modern web development practices. This project showcases full-stack development skills, from responsive frontend design to scalable backend architecture.\n\nThe platform includes advanced features like real-time inventory updates, secure payment processing with Stripe integration, and an admin dashboard for managing products and orders. The frontend is built with React and styled with Tailwind CSS for a modern, responsive design.`,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "web",
      status: "Active",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express",
        "Stripe",
        "JWT",
        "Tailwind CSS",
      ],
      stats: {
        stars: 245,
        forks: 67,
        downloads: 1200,
        commits: 156,
      },
      lastUpdated: "2 days ago",
      featured: true,
      keyFeatures: [
        "User authentication and authorization",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Admin dashboard for inventory management",
        "Real-time order tracking",
        "Responsive design for all devices",
      ],
      problemSolution: {
        problem:
          "Small businesses need affordable, feature-rich e-commerce solutions that can compete with major platforms while maintaining customization flexibility.",
        solution:
          "Built a modular, open-source platform that provides enterprise-level features while remaining lightweight and easily customizable for different business needs.",
      },
      architecture: [
        "RESTful API design with Express.js",
        "JWT-based authentication system",
        "PostgreSQL database with optimized queries",
        "Redis caching for improved performance",
        "Microservices architecture for scalability",
      ],
      challenges: [
        {
          title: "Payment Security",
          description:
            "Implementing secure payment processing while maintaining PCI compliance and user experience.",
        },
        {
          title: "Real-time Updates",
          description:
            "Synchronizing inventory levels across multiple user sessions without performance degradation.",
        },
      ],
    },
    {
      id: 2,
      title: "Task Management API",
      description:
        "RESTful API for task management with user authentication, team collaboration, and real-time notifications. Built with Node.js, MongoDB, and Socket.io.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=800&h=600&fit=crop",
      category: "api",
      status: "Completed",
      technologies: [
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Express",
        "JWT",
        "Swagger",
      ],
      stats: {
        stars: 189,
        forks: 43,
        downloads: 890,
        commits: 98,
      },
      lastUpdated: "1 week ago",
      featured: false,
      keyFeatures: [
        "RESTful API endpoints",
        "Real-time notifications",
        "Team collaboration features",
        "Task prioritization and categorization",
      ],
    },
    {
      id: 3,
      title: "React Native Fitness App",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features. Includes integration with health APIs.",
      image:
        "https://images.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg?w=800&h=600&fit=crop",
      category: "mobile",
      status: "Active",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "Expo",
        "Health APIs",
      ],
      stats: {
        stars: 312,
        forks: 89,
        downloads: 2100,
        commits: 203,
      },
      lastUpdated: "3 days ago",
      featured: false,
      keyFeatures: [
        "Workout tracking and planning",
        "Progress visualization",
        "Social sharing features",
        "Health API integration",
      ],
    },
    {
      id: 4,
      title: "AI Code Assistant",
      description:
        "VS Code extension that provides intelligent code suggestions and documentation generation using OpenAI's API. Supports multiple programming languages.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      category: "tools",
      status: "Active",
      technologies: ["TypeScript", "VS Code API", "OpenAI API", "Node.js"],
      stats: {
        stars: 567,
        forks: 124,
        downloads: 5600,
        commits: 87,
      },
      lastUpdated: "1 day ago",
      featured: false,
      keyFeatures: [
        "Intelligent code completion",
        "Automatic documentation generation",
        "Multi-language support",
        "Context-aware suggestions",
      ],
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description:
        "Decentralized voting platform built on Ethereum with smart contracts. Ensures transparency, security, and immutability of voting records.",
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800&h=600&fit=crop",
      category: "blockchain",
      status: "Completed",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
      stats: {
        stars: 423,
        forks: 156,
        downloads: 780,
        commits: 134,
      },
      lastUpdated: "2 weeks ago",
      featured: false,
      keyFeatures: [
        "Smart contract-based voting",
        "Transparent vote counting",
        "Voter authentication",
        "Immutable voting records",
      ],
    },
    {
      id: 6,
      title: "Machine Learning Dashboard",
      description:
        "Interactive dashboard for visualizing ML model performance with real-time data processing and model comparison tools. Built with Python and Streamlit.",
      image:
        "https://images.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg?w=800&h=600&fit=crop",
      category: "ai",
      status: "Active",
      technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Plotly"],
      stats: {
        stars: 298,
        forks: 72,
        downloads: 1450,
        commits: 165,
      },
      lastUpdated: "4 days ago",
      featured: false,
      keyFeatures: [
        "Real-time model monitoring",
        "Interactive data visualization",
        "Model comparison tools",
        "Performance metrics tracking",
      ],
    },
  ];

  // Mock stats data
  const stats = {
    totalProjects: 24,
    activeProjects: 8,
    totalStars: 2847,
    totalForks: 892,
    totalContributors: 45,
    totalDownloads: 15600,
  };

  // Mock activity data
  const activities = [
    {
      type: "commit",
      action: "Pushed 3 commits",
      repository: "e-commerce-platform",
      description: "Added payment validation and improved error handling",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      stats: { additions: 127, deletions: 43, files: 8 },
    },
    {
      type: "pr",
      action: "Merged pull request",
      repository: "ai-code-assistant",
      description: "Feature: Add support for Python type hints",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    },
    {
      type: "release",
      action: "Published release v2.1.0",
      repository: "task-management-api",
      description:
        "Added team collaboration features and performance improvements",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
    {
      type: "issue",
      action: "Opened issue",
      repository: "fitness-app",
      description: "Bug: Health API integration not working on iOS",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      type: "star",
      action: "Received 5 new stars",
      repository: "blockchain-voting",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },
  ];

  // Filter and sort projects
  useEffect(() => {
    let filtered = projects?.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project?.category === activeCategory;
      const matchesStatus =
        activeStatus === "all" ||
        project?.status?.toLowerCase() === activeStatus;
      const matchesSearch =
        searchQuery === "" ||
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description
          ?.toLowerCase()
          ?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some((tech) =>
          tech?.toLowerCase()?.includes(searchQuery?.toLowerCase())
        );

      return matchesCategory && matchesStatus && matchesSearch;
    });

    // Sort projects
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b?.stats?.stars - a?.stats?.stars;
        case "stars":
          return b?.stats?.stars - a?.stats?.stars;
        case "name":
          return a?.title?.localeCompare(b?.title);
        case "recent":
        default:
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      }
    });

    setFilteredProjects(filtered);
  }, [activeCategory, activeStatus, searchQuery, sortBy]);

  const featuredProject = projects?.find((p) => p?.featured);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewDemo = (project) => {
    window.open(
      `https://demo.${project?.title?.toLowerCase()?.replace(/\s+/g, "-")}.com`,
      "_blank"
    );
  };

  const handleViewCode = (project) => {
    window.open(
      `https://github.com/Shivam8100/${project?.title
        ?.toLowerCase()
        ?.replace(/\s+/g, "-")}`,
      "_blank"
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Project Showcase - TechBlog Hub</title>
        <meta
          name="description"
          content="Explore my open-source projects, technical experiments, and development journey. See real-world applications of the concepts I write about."
        />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                Project Showcase
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Explore my open-source contributions, side projects, and
                technical experiments. Each project demonstrates practical
                application of the concepts I write about, from initial idea to
                production deployment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  variant="default"
                  iconName="Github"
                  iconPosition="left"
                  onClick={() =>
                    window.open("https://github.com/Shivam8100", "_blank")
                  }
                >
                  View GitHub Profile
                </Button>
                <Button
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1hdY278asB31azGPgsbJq7G4xrXrufzta/view",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Project Stats */}
          <ProjectStats stats={stats} />

          {/* Featured Project */}
          {featuredProject && (
            <FeaturedProject
              project={featuredProject}
              onViewDemo={handleViewDemo}
              onViewCode={handleViewCode}
              onViewDetails={handleViewDetails}
            />
          )}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Project Filters */}
              <ProjectFilter
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                activeStatus={activeStatus}
                onStatusChange={setActiveStatus}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredProjects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                    onViewDemo={handleViewDemo}
                    onViewCode={handleViewCode}
                  />
                ))}
              </div>

              {/* No Results */}
              {filteredProjects?.length === 0 && (
                <div className="text-center py-12">
                  <Icon
                    name="Search"
                    size={48}
                    className="text-text-secondary mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    No projects found
                  </h3>
                  <p className="text-text-secondary">
                    Try adjusting your filters or search query to find what
                    you're looking for.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setActiveCategory("all");
                      setActiveStatus("all");
                      setSearchQuery("");
                    }}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contribution Activity */}
              <ContributionActivity activities={activities} />

              {/* Quick Links */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                  <Icon
                    name="ExternalLink"
                    size={20}
                    className="text-primary"
                  />
                  <span>Quick Links</span>
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/Shivam8100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 hover:bg-hover rounded-lg transition-colors duration-200"
                  >
                    <Icon
                      name="Github"
                      size={20}
                      className="text-text-secondary"
                    />
                    <span className="text-text-primary">GitHub Profile</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 hover:bg-hover rounded-lg transition-colors duration-200"
                  >
                    <Icon
                      name="Linkedin"
                      size={20}
                      className="text-text-secondary"
                    />
                    <span className="text-text-primary">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="flex items-center space-x-3 p-3 hover:bg-hover rounded-lg transition-colors duration-200"
                  >
                    <Icon
                      name="Mail"
                      size={20}
                      className="text-text-secondary"
                    />
                    <span className="text-text-primary">Contact Me</span>
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="newsletter-form">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Stay Updated
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Get notified when I publish new projects or major updates to
                  existing ones.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                  <Button variant="default" fullWidth>
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onViewDemo={handleViewDemo}
          onViewCode={handleViewCode}
        />
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-text-primary">
                TechBlog Hub
              </span>
            </div>
            <p className="text-text-secondary mb-4">
              Building the future, one project at a time.
            </p>
            <p className="text-sm text-text-secondary">
              © {new Date()?.getFullYear()} TechBlog Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectShowcase;
