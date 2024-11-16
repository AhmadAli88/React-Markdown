import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const DynamicMarkdownTwo = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/src/table.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default DynamicMarkdownTwo;
