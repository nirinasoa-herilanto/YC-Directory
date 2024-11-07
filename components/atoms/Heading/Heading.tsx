import React from 'react';

export type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ className, children }) => {
  return <h1 className={`heading ${className || ''}`}>{children}</h1>;
};

export default Heading;
