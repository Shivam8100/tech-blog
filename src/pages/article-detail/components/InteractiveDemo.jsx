import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveDemo = ({ title, description, initialCode, liveCode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <div className="my-8 bg-card border border-border rounded-lg overflow-hidden shadow-md">
      {/* Header */}
      <div className="px-6 py-4 bg-surface border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
            <p className="text-sm text-text-secondary mt-1">{description}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Collapse" : "Try it"}
          </Button>
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="border-t border-border">
          {/* Tab Navigation */}
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === 'preview' ?'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="Eye" size={16} className="inline mr-2" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === 'code' ?'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="Code2" size={16} className="inline mr-2" />
              Code
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'preview' && (
              <div className="bg-white border border-border rounded-lg p-4 min-h-32">
                <div className="flex items-center justify-center h-24 bg-gradient-to-r from-blue-50 to-cyan-50 rounded border-2 border-dashed border-blue-200">
                  <div className="text-center">
                    <Icon name="Play" size={24} className="text-blue-500 mx-auto mb-2" />
                    <p className="text-sm text-blue-600">Interactive Demo Preview</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="bg-code-bg rounded-lg p-4">
                <pre className="text-sm text-code-text font-mono overflow-x-auto">
                  <code>{liveCode || initialCode}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveDemo;