import React from 'react';

import { Navbar } from '@project/components/orgnisms';

export const experimental_ppr = true;

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
