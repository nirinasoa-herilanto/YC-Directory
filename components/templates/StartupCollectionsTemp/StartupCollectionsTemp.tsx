import React from 'react';

import { client } from '@project/sanity/lib/client';
import { Startup } from '@project/sanity/types';

import { ALL_STARTUPS } from '@project/sanity/queries';

import { StartupLists } from '@project/components/orgnisms';

export type StartupCollectionsTempProps = {
  className?: string;
  query?: string;
};

const StartupCollectionsTemp: React.FC<StartupCollectionsTempProps> = async ({
  className,
  query,
}) => {
  const startups = await client.fetch<Startup[]>(ALL_STARTUPS);

  return (
    <section className={`${className || ''}`}>
      <h3 className="my-5 font-bold text-[32px]">
        {query ? `Search results for "${query}"` : 'All Startups'}
      </h3>

      <StartupLists data={startups} />
    </section>
  );
};

export default StartupCollectionsTemp;
