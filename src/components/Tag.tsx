import React from 'react';

interface TagProps {
  text: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className }) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${className}`}
    >
      {text}
    </span>
  );
};

export default Tag;