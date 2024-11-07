import React from 'react';

export type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return <header className={`${className || ''}`}>NAVBAR</header>;
};

export default Navbar;
