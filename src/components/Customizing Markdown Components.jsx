import React from 'react';
import ReactMarkdown from 'react-markdown';

const CustomMarkdown = () => {
  const markdown = `# Hello, React-Markdown!  
  [Visit Google](https://google.com)`;

  return (
    <ReactMarkdown
      components={{
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default CustomMarkdown;
