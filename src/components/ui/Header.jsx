import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Articles', path: '/article-detail', icon: 'BookOpen' },
    { name: 'Learning Paths', path: '/learning-paths', icon: 'Map' },
    { name: 'Projects', path: '/project-showcase', icon: 'Code' },
    { name: 'Search', path: '/search-discovery', icon: 'Search' }
  ];

  const secondaryItems = [
    { name: 'About', path: '/about', icon: 'User' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-medium border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-text-primary font-inter">
                TechBlog Hub
              </span>
              <span className="text-xs text-text-secondary font-medium -mt-1">
                Interactive Learning
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/10 active' :'text-text-secondary hover:text-text-primary hover:bg-hover'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 text-text-secondary hover:text-text-primary hover:bg-hover">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                        isActivePath(item?.path)
                          ? 'text-primary bg-primary/10' :'text-text-secondary hover:text-text-primary hover:bg-hover'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              iconName="Github"
              iconPosition="left"
              className="text-text-secondary hover:text-text-primary"
            >
              GitHub
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              iconName="Mail"
              iconPosition="left"
            >
              Newsletter
            </Button>
            
            <Button
              variant="default"
              size="sm"
              iconName="Bookmark"
              iconPosition="left"
            >
              Bookmarks
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-hover transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-4 py-4 bg-card border-t border-border">
            <nav className="space-y-2">
              {[...navigationItems, ...secondaryItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10' :'text-text-secondary hover:text-text-primary hover:bg-hover'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </nav>
            
            {/* Mobile Actions */}
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Button
                variant="ghost"
                size="sm"
                iconName="Github"
                iconPosition="left"
                fullWidth
                className="justify-start text-text-secondary hover:text-text-primary"
              >
                GitHub
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                iconName="Mail"
                iconPosition="left"
                fullWidth
                className="justify-start"
              >
                Newsletter
              </Button>
              
              <Button
                variant="default"
                size="sm"
                iconName="Bookmark"
                iconPosition="left"
                fullWidth
                className="justify-start"
              >
                Bookmarks
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;