import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const HtmlMarkdown = () => {
  const markdown = `# Heading  
  This is a <strong>bold</strong> word.`;

  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>;
};

export default HtmlMarkdown;
