import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PluginMarkdown = () => {
  const markdown = `- [x] Task 1  
  - [ ] Task 2  
  :smile: **Emojis supported!**`;

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
};

export default PluginMarkdown;
