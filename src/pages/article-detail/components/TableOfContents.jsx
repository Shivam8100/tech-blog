import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TableOfContents = ({ headings, activeId }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-card border border-border rounded-lg shadow-lg p-4 max-w-xs">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="List" size={16} className="text-text-secondary" />
          <span className="text-sm font-medium text-text-primary">Contents</span>
        </div>
        
        <nav className="space-y-1">
          {headings?.map((heading, index) => (
            <button
              key={index}
              onClick={() => scrollToHeading(heading?.id)}
              className={`block w-full text-left px-2 py-1 text-sm rounded transition-colors duration-200 ${
                activeId === heading?.id
                  ? 'text-primary bg-primary/10' :'text-text-secondary hover:text-text-primary hover:bg-hover'
              }`}
              style={{ paddingLeft: `${heading?.level * 8 + 8}px` }}
            >
              {heading?.text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;