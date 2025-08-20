import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ConnectSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const socialLinks = [
    {
      platform: "Twitter",
      handle: "@shivamr8100",
      url: "#",
      icon: "Twitter",
      color: "text-blue-400",
      description: "Daily tech insights and thoughts",
    },
    {
      platform: "LinkedIn",
      handle: "Shivam Ranjan",
      url: "https://www.linkedin.com/in/shivam-ranjan-b57a28150/",
      icon: "Linkedin",
      color: "text-blue-600",
      description: "Professional network and career updates",
    },
    {
      platform: "GitHub",
      handle: "alexjohnson-dev",
      url: "https://github.com/Shivam8100",
      icon: "Github",
      color: "text-gray-800",
      description: "Open source projects and contributions",
    },

    {
      platform: "personal",
      handle: "https://thefrontify.com/",
      url: "#",
      icon: "BookOpen",
      color: "text-purple-600",
      description: "Technical articles and tutorials",
    },
  ];

  const contactOptions = [
    {
      type: "Speaking Engagements",
      description:
        "Invite me to speak at your conference, meetup, or corporate event",
      icon: "Mic",
      email: "shivamranjan81@gmail.com",
    },
    {
      type: "Collaboration",
      description:
        "Let's work together on open source projects or technical content",
      icon: "Users",
      email: "shivamranjan81@gmail.com",
    },

    {
      type: "General Inquiries",
      description: "Questions, feedback, or just want to say hello",
      icon: "Mail",
      email: "shivamranjan81@gmail.com",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at Google",
      content:
        "Alex's articles helped me transition from frontend to full-stack development. His explanations are clear and practical.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO at StartupTech",
      content:
        "One of the best technical speakers I've seen. Alex makes complex topics accessible to everyone in the audience.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Emily Watson",
      role: "Engineering Manager at Microsoft",
      content:
        "Alex's open source contributions have saved our team countless hours. His code quality is exceptional.",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value,
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            I'm always excited to connect with fellow developers, share
            knowledge, and explore new opportunities
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Find Me Online
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks?.map((social, index) => (
              <a
                key={index}
                href={social?.url}
                className="interactive-card group flex items-center space-x-4 hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={social?.icon}
                    size={24}
                    className={social?.color}
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-text-primary">
                    {social?.platform}
                  </h4>
                  <p className="text-accent font-medium text-sm">
                    {social?.handle}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {social?.description}
                  </p>
                </div>
                <Icon
                  name="ExternalLink"
                  size={16}
                  className="text-text-secondary group-hover:text-primary transition-colors duration-200"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Get In Touch
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {contactOptions?.map((option, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={option?.icon}
                      size={24}
                      color="white"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-text-primary mb-2">
                      {option?.type}
                    </h4>
                    <p className="text-text-secondary mb-4">
                      {option?.description}
                    </p>
                    <a
                      href={`mailto:${option?.email}`}
                      className="text-accent hover:text-accent/80 font-semibold flex items-center space-x-2 transition-colors duration-200"
                    >
                      <Icon name="Mail" size={16} />
                      <span>{option?.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Send Me a Message
              </h3>
              <p className="text-text-secondary">
                Have a question or want to start a conversation? I'd love to
                hear from you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Your Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <Input
                label="Subject"
                type="text"
                name="subject"
                value={formData?.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="form-input resize-none"
                  placeholder="Tell me more about your inquiry..."
                  required
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                iconName="Send"
                iconPosition="right"
                fullWidth
                className="justify-center"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            What People Say
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-text-primary">
                      {testimonial?.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {testimonial?.role}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <Icon name="Quote" size={24} className="text-primary/40" />
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {testimonial?.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 text-center">
          <div className="newsletter-form max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Icon name="Mail" size={24} color="white" strokeWidth={2} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-text-primary">
                  Stay Updated
                </h3>
                <p className="text-text-secondary">
                  Get my latest articles and insights delivered to your inbox
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button
                variant="default"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
