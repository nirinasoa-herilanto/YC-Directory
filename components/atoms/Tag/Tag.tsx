import React from 'react';

export type TagProps = {
  className?: string;
  children: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ className, children }) => {
  return <p className={`tag ${className || ''}`}>{children}</p>;
};

export default Tag;
