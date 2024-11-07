import React from 'react';

export type SubHeadingProps = {
  className?: string;
  children: React.ReactNode;
};

const SubHeading: React.FC<SubHeadingProps> = ({ className, children }) => {
  return <p className={`sub-heading ${className || ''}`}>{children}</p>;
};

export default SubHeading;
