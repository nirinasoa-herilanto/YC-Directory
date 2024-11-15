import React from 'react';

import { ALL_STARTUPS_QUERY } from '@project/sanity/queries';
import { sanityFetch, SanityLive } from '@project/sanity/live';

import { StartupLists } from '@project/components/orgnisms';
import { StartupItemType } from '@project/utils/types';

export type StartupCollectionsTempProps = {
  className?: string;
  query?: string;
};

const StartupCollectionsTemp: React.FC<StartupCollectionsTempProps> = async ({
  className,
  query,
}) => {
  const { data: startups } = (await sanityFetch({
    query: ALL_STARTUPS_QUERY,
    params: { search: query || null },
  })) as {
    data: StartupItemType[];
  };

  return (
    <section className={`py-8 md:mx-4 xl:m-auto ${className || ''}`}>
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
