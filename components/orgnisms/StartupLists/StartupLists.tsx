import React from 'react';

import type { StartupItemType } from '@project/utils/types';

import { StartupItem } from '@project/components/molecules';

export type StartupListsProps = {
  className?: string;
  data: StartupItemType[];
  display?: 'catalogs' | 'detail';
};

/**
 * ### `display` props: `catalogs` or `detail`
 * - `catalogs`, will display all startups with special grid items (.i.e. like on the Landing Page)
 * - `detail`, used to display all startups with special grid like in author detail page ex: `/author/john-doe`
 * @returns
 */
const StartupLists: React.FC<StartupListsProps> = ({
  className,
  data,
  display = 'catalogs',
}) => {
  return (
    <ul
      className={`py-10 px-5 md:px-0 ${
        display === 'catalogs'
          ? 'grid gap-5 md:grid-cols-2 lg:grid-cols-3'
          : 'grid gap-5 md:grid-cols-2'
      }
        ${className || ''}`}
    >
      {data.map((startup) => (
        <StartupItem key={startup._id} startup={startup} />
      ))}
    </ul>
  );
};

export default StartupLists;
