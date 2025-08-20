import React from 'react';
import Icon from '../../../components/AppIcon';

const CredentialsSection = () => {
  const certifications = [
    {
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAP-2023-001",
      icon: "Cloud",
      color: "text-orange-500"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-002",
      icon: "Server",
      color: "text-blue-500"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-003",
      icon: "Container",
      color: "text-purple-500"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-RDC-2022-004",
      icon: "Code",
      color: "text-cyan-500"
    }
  ];

  const notableProjects = [
    {
      title: "TechBlog Hub Platform",
      description: "Built a comprehensive blogging platform with interactive features, serving 25k+ monthly users",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
      impact: "25k+ monthly users",
      year: "2024",
      icon: "Globe"
    },
    {
      title: "DevTools Analytics Dashboard",
      description: "Created real-time analytics dashboard for developer productivity metrics",
      technologies: ["TypeScript", "D3.js", "Express", "Redis"],
      impact: "40% productivity increase",
      year: "2023",
      icon: "BarChart3"
    },
    {
      title: "Open Source Component Library",
      description: "Developed and maintained a React component library used by 100+ companies",
      technologies: ["React", "Storybook", "TypeScript", "Rollup"],
      impact: "10k+ weekly downloads",
      year: "2023",
      icon: "Package"
    },
    {
      title: "Microservices Migration",
      description: "Led migration from monolith to microservices architecture for e-commerce platform",
      technologies: ["Docker", "Kubernetes", "GraphQL", "MongoDB"],
      impact: "99.9% uptime achieved",
      year: "2022",
      icon: "Layers"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      year: "2016",
      focus: "Distributed Systems & Machine Learning",
      icon: "GraduationCap"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "UC Berkeley",
      year: "2014",
      focus: "Web Technologies & Database Systems",
      icon: "Book"
    }
  ];

  const achievements = [
    {
      title: "Top 1% Stack Overflow Contributor",
      description: "Recognized for helping 50k+ developers solve technical problems",
      year: "2024",
      icon: "Award"
    },
    {
      title: "GitHub Arctic Code Vault Contributor",
      description: "Code preserved in the Arctic World Archive for future generations",
      year: "2023",
      icon: "Archive"
    },
    {
      title: "Tech Conference Speaker of the Year",
      description: "Awarded by DevCommunity for outstanding technical presentations",
      year: "2023",
      icon: "Trophy"
    },
    {
      title: "Open Source Maintainer Award",
      description: "Recognized for significant contributions to the React ecosystem",
      year: "2022",
      icon: "Star"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Credentials & Achievements
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Professional certifications, notable projects, and recognition that validate my expertise
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={cert?.icon} size={24} className={cert?.color} strokeWidth={2} />
                </div>
                <h4 className="font-bold text-text-primary mb-2 text-sm">
                  {cert?.title}
                </h4>
                <p className="text-text-secondary text-sm mb-2">
                  {cert?.issuer}
                </p>
                <div className="text-xs text-accent font-semibold mb-1">
                  {cert?.date}
                </div>
                <div className="text-xs text-text-secondary">
                  ID: {cert?.credentialId}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Notable Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {notableProjects?.map((project, index) => (
              <div key={index} className="interactive-card">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={project?.icon} size={24} color="white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-text-primary">
                        {project?.title}
                      </h4>
                      <span className="text-sm font-semibold text-accent">
                        {project?.year}
                      </span>
                    </div>
                    <p className="text-text-secondary mb-4">
                      {project?.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={16} className="text-success" />
                      <span className="font-semibold text-success text-sm">Impact:</span>
                      <span className="text-text-primary text-sm">{project?.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Education
            </h3>
            <div className="space-y-6">
              {education?.map((edu, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={edu?.icon} size={24} color="white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-text-primary mb-1">
                        {edu?.degree}
                      </h4>
                      <p className="text-accent font-semibold mb-1">
                        {edu?.institution}
                      </p>
                      <p className="text-text-secondary text-sm mb-2">
                        {edu?.focus}
                      </p>
                      <span className="text-sm font-semibold text-primary">
                        {edu?.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Recognition & Awards
            </h3>
            <div className="space-y-6">
              {achievements?.map((achievement, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={achievement?.icon} size={24} color="white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-text-primary">
                          {achievement?.title}
                        </h4>
                        <span className="text-sm font-semibold text-accent">
                          {achievement?.year}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm">
                        {achievement?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;