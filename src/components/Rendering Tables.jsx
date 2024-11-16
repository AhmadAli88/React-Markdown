import React from 'react';
import ReactMarkdown from 'react-markdown';

const TableMarkdown = () => {
  const markdown = `
| Name       | Age | Profession |
|------------|-----|------------|
| John Doe   | 30  | Developer  |
| Jane Smith | 25  | Designer   |
`;

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default TableMarkdown;
