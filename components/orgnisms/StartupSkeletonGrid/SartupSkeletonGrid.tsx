import { StartupSkeleton } from '@project/components/molecules';
import React from 'react';

export type SartupSkeletonGridProps = {
  className?: string;
  display?: 'catalogs' | 'detail';
  isCatalogs?: boolean;
};

/**
 * @param {boolean} isCatalogs  when `true`, it loads 6 startup skeleton. By default 3
 *
 *
 *
 * ### `display` props: `catalogs` or `detail`
 * - `catalogs`, will display all startups with special grid items (.i.e. like on the Landing Page)
 * - `detail`, used to display all startups with special grid like in author detail page ex: `/author/john-doe`
 */
const SartupSkeletonGrid: React.FC<SartupSkeletonGridProps> = ({
  className,
  display = 'catalogs',
  isCatalogs = false,
}) => {
  let markup = (
    <>
      <li>
        <StartupSkeleton />
      </li>
      <li>
        <StartupSkeleton />
      </li>
      <li>
        <StartupSkeleton />
      </li>
    </>
  );

  if (isCatalogs) {
    markup = (
      <>
        <li>
          <StartupSkeleton />
        </li>
        <li>
          <StartupSkeleton />
        </li>
        <li>
          <StartupSkeleton />
        </li>
        <li>
          <StartupSkeleton />
        </li>
        <li>
          <StartupSkeleton />
        </li>
        <li>
          <StartupSkeleton />
        </li>
      </>
    );
  }

  return (
    <ul
      className={`w-full max-w-[1200px] m-auto py-10 px-5 ${
        display === 'catalogs'
          ? 'grid gap-5 md:grid-cols-2 lg:grid-cols-3'
          : 'grid gap-5 md:grid-cols-2'
      }
        ${className || ''}`}
    >
      {markup}
    </ul>
  );
};

export default SartupSkeletonGrid;
