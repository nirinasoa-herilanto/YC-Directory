import React from 'react';

export type HeroWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

const HeroWrapper: React.FC<HeroWrapperProps> = ({ className, children }) => {
  return (
    <section className={`pink_container ${className || ''}`}>
      {children}
    </section>
  );
};

export default HeroWrapper;
