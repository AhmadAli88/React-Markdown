import React from 'react';
import ReactMarkdown from 'react-markdown';

const BasicMarkdown = () => {
  const markdown = `# Hello, React-Markdown!  
  This is **bold** text and _italic_ text.  
  - List item 1  
  - List item 2`;

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default BasicMarkdown;
