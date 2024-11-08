import React from 'react';
import Link from 'next/link';

import { Logo } from '@project/components/atoms';

import { AuthNavigation } from '@project/components/molecules';

export type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = async ({ className }) => {
  return (
    <header className={`py-3 px-5 shadow-sm ${className || ''}`}>
      <nav className="flex justify-between items-center">
        <Link href={'/'}>
          <Logo src="/logo.png" alt="YC Directory logo" />
        </Link>

        <AuthNavigation />
      </nav>
    </header>
  );
};

export default Navbar;
