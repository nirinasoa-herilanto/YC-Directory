import React from 'react';

import { ALL_STARTUPS_QUERY } from '@project/sanity/queries';
import { sanityFetch, SanityLive } from '@project/sanity/live';

import { StartupLists } from '@project/components/orgnisms';
import { StartupItemType } from '@project/utils/types';

export type StartupCollectionsLiveApiTempProps = {
  className?: string;
  query?: string;
};

/**
 * use to display all Startups with the ``live API`` functionality from SANITY (.i.e. real-time API)
 */
const StartupCollectionsLiveApiTemp: React.FC<
  StartupCollectionsLiveApiTempProps
> = async ({ className, query }) => {
  const { data: startups } = (await sanityFetch({
    query: ALL_STARTUPS_QUERY,
    params: { search: query || null },
  })) as {
    data: StartupItemType[];
  };

  return (
    <section className={`py-8 md:mx-4 xl:m-auto ${className || ''}`}>
      <h2 className="my-5 font-bold text-[32px]">
        {query ? `Search results for "${query}"` : 'All Startups'}
      </h2>

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

export default StartupCollectionsLiveApiTemp;
