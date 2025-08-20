import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, searchQuery, setSearchQuery }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const mockSuggestions = [
    "React hooks tutorial",
    "JavaScript async/await",
    "TypeScript best practices",
    "Node.js performance optimization",
    "GraphQL vs REST API",
    "Docker containerization guide",
    "AWS deployment strategies",
    "MongoDB aggregation pipeline",
    "Vue.js composition API",
    "Python machine learning basics"
  ];

  useEffect(() => {
    if (searchQuery?.length > 0) {
      const filtered = mockSuggestions?.filter(suggestion =>
        suggestion?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
      setSuggestions(filtered?.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e?.target?.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter') {
      handleSearch();
    }
  };

  const handleFocus = () => {
    setIsExpanded(true);
    if (searchQuery?.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
      setIsExpanded(false);
    }, 200);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className={`relative transition-all duration-300 ${
        isExpanded ? 'transform scale-105' : ''
      }`}>
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary z-10" 
          />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search articles, tutorials, code snippets..."
            className="w-full pl-12 pr-20 py-4 text-lg bg-card border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all duration-200 shadow-soft hover:shadow-medium"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSuggestions([]);
                  setShowSuggestions(false);
                }}
                className="p-1 rounded-full hover:bg-hover transition-colors duration-200"
              >
                <Icon name="X" size={16} className="text-text-secondary" />
              </button>
            )}
            <Button
              variant="default"
              size="sm"
              onClick={handleSearch}
              iconName="Search"
              className="px-4"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Search Suggestions */}
        {showSuggestions && suggestions?.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            <div className="py-2">
              {suggestions?.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-4 py-2 hover:bg-hover transition-colors duration-200 flex items-center space-x-3"
                >
                  <Icon name="Search" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-primary">{suggestion}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Quick Search Tags */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Docker']?.map((tag) => (
          <button
            key={tag}
            onClick={() => handleSuggestionClick(tag)}
            className="px-3 py-1 text-sm bg-muted text-text-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;