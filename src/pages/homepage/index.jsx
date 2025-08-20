import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TrendingSection from './components/TrendingSection';
import LearningPathsPreview from './components/LearningPathsPreview';
import RecommendedSection from './components/RecommendedSection';
import LabSection from './components/LabSection';
import SocialProofSection from './components/SocialProofSection';
import NewsletterSection from './components/NewsletterSection';
import Icon from '../../components/AppIcon';


const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <TrendingSection />
        <LearningPathsPreview />
        <RecommendedSection />
        <LabSection />
        <SocialProofSection />
        <NewsletterSection />
      </main>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-bold">TechBlog Hub</span>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Interactive learning platform for developers to master modern web technologies through in-depth articles and hands-on examples.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/article-detail" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Latest Articles</a></li>
                <li><a href="/learning-paths" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Learning Paths</a></li>
                <li><a href="/project-showcase" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Projects</a></li>
                <li><a href="/about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">About</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">React</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">TypeScript</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Node.js</a></li>
                <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">CSS</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-sm text-secondary-foreground/80 mb-4">
                Get the latest articles and resources delivered to your inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded-r-md hover:bg-accent/90 transition-colors">
                  <Icon name="Send" size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date()?.getFullYear()} TechBlog Hub. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;