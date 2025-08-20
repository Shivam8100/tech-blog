import React, { useEffect } from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import TechJourneyTimeline from "./components/TechJourneyTimeline";
import PhilosophySection from "./components/PhilosophySection";
import SpeakingSection from "./components/SpeakingSection";
import BehindScenesSection from "./components/BehindScenesSection";
import CredentialsSection from "./components/CredentialsSection";
import ConnectSection from "./components/ConnectSection";

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = "About - TechBlog Hub | Shivam Ranjan";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute(
        "content",
        "Learn about Shivam Ranjan, Software Engineer and tech blogger. Discover my journey, philosophy, and passion for bridging complex tech concepts with practical insights."
      );
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Tech Journey Timeline */}
        <TechJourneyTimeline />

        {/* Philosophy Section */}
        <PhilosophySection />

        {/* Speaking & Community */}
        <SpeakingSection />

        {/* Behind the Scenes */}
        <BehindScenesSection />

        {/* Credentials & Achievements */}
        <CredentialsSection />

        {/* Connect Section */}
        <ConnectSection />
      </main>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SR</span>
                </div>
                <div>
                  <div className="text-lg font-bold">Shivam Ranjan</div>
                  <div className="text-sm text-secondary-foreground/70">
                    Software Engineer & Tech Blogger
                  </div>
                </div>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed mb-4">
                Bridging complex technical concepts with practical insights.
                Helping developers grow through continuous learning and
                knowledge sharing.
              </p>
              <div className="text-sm text-secondary-foreground/60">
                © {new Date()?.getFullYear()} Shivam Ranjan. All rights
                reserved.
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="/homepage"
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="/article-detail"
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                >
                  Articles
                </a>
                <a
                  href="/learning-paths"
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                >
                  Learning Paths
                </a>
                <a
                  href="/project-showcase"
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                >
                  Projects
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:shivamranjan81@gmail.com"
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                >
                  shivamranjan81@gmail.com
                </a>
                <a
                  href="https://thefrontify.com/"
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                >
                  The Frontify
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
