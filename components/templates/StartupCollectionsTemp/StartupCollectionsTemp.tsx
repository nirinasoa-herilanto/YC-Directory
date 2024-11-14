import React from 'react';

import { Startup } from '@project/sanity/types';
import { ALL_STARTUPS } from '@project/sanity/queries';
import { sanityFetch, SanityLive } from '@project/sanity/live';

import { StartupLists } from '@project/components/orgnisms';

export type StartupCollectionsTempProps = {
  className?: string;
  query?: string;
};

const StartupCollectionsTemp: React.FC<StartupCollectionsTempProps> = async ({
  className,
  query,
}) => {
  const { data: startups } = (await sanityFetch({
    query: ALL_STARTUPS,
    params: { search: query || null },
  })) as {
    data: Startup[];
  };

  return (
    <section className={`${className || ''}`}>
      <h3 className="my-5 font-bold text-[32px]">
        {query ? `Search results for "${query}"` : 'All Startups'}
      </h3>

      {startups.length !== 0 && <StartupLists data={startups} />}

      {query && startups.length === 0 && (
        <div className="w-full h-[500px] flex items-center justify-center">
          {`No results for "${query}", please try another one 😉.`}
        </div>
      )}

      <SanityLive />
    </section>
  );
};

export default StartupCollectionsTemp;
