import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodeBlock = ({ code, language, title, showLineNumbers = true }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard?.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const formatCode = (code) => {
    return code?.split('\n')?.map((line, index) => (
      <div key={index} className="flex">
        {showLineNumbers && (
          <span className="text-text-secondary text-sm mr-4 select-none w-8 text-right">
            {index + 1}
          </span>
        )}
        <span className="flex-1">{line || ' '}</span>
      </div>
    ));
  };

  return (
    <div className="my-6 bg-code-bg rounded-lg overflow-hidden shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <Icon name="Code2" size={16} className="text-slate-400" />
          <span className="text-sm text-slate-300">{title || language}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName={copied ? "Check" : "Copy"}
          iconPosition="left"
          onClick={copyToClipboard}
          className="text-slate-300 hover:text-white hover:bg-slate-700"
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-code-text font-mono leading-relaxed">
          <code>{formatCode(code)}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;