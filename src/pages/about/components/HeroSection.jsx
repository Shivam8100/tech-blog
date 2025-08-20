import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Icon name="User" size={24} color="white" strokeWidth={2} />
                </div>
                <span className="text-accent font-semibold text-lg">
                  About Me
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                Bridging Complex Tech with
                <span className="gradient-text"> Practical Insights</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                I'm a passionate technologist dedicated to making complex
                concepts accessible, fostering continuous learning, and building
                bridges between cutting-edge innovation and real-world
                applications.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-text-secondary font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-sm text-text-secondary font-medium">
                  Articles Written
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">25k+</div>
                <div className="text-sm text-text-secondary font-medium">
                  Readers Helped
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  window.open(
                    "mailto:shivamranjan81@gmail.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="btn-primary px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover-lift"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Let's Connect</span>
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1hdY278asB31azGPgsbJq7G4xrXrufzta/view",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="btn-secondary px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover-lift"
              >
                <Icon name="Download" size={20} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-strong">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Professional headshot"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <Icon
                    name="Code2"
                    size={24}
                    color="white"
                    strokeWidth={2.5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
