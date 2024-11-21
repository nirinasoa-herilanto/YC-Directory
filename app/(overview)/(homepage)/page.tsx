import { Suspense } from 'react';
import { Metadata } from 'next';

import {
  HeroTemp,
  StartupCollectionsLiveApiTemp,
} from '@project/components/templates';
import { StartupSkeletonGrid } from '@project/components/orgnisms';

const heroPlaceholder = {
  heading: `Pitch your startup,
  connect with entrepreneurs`,
  subHeading: `Submit Ideas, vote on Pitches, and get noticed in Virtual competitions`,
};

export const metadata: Metadata = {
  title: 'YC Directory',
  description: 'Pitch, Vote and Grow',
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const query = (await searchParams)?.query;

  return (
    <main>
      <HeroTemp
        placeholder={heroPlaceholder}
        query={query}
        showSubHeading
        showSearchForm
      />

      <Suspense fallback={<StartupSkeletonGrid isCatalogs />}>
        <StartupCollectionsLiveApiTemp
          className="max-w-[1200px] m-auto"
          query={query}
        />
      </Suspense>
    </main>
  );
}
