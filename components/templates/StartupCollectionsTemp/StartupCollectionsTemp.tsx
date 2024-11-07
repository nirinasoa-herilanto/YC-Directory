import React from 'react';

import { StartupLists } from '@project/components/orgnisms';

export type StartupCollectionsTempProps = {
  className?: string;
  query?: string;
};

const StartupCollectionsTemp: React.FC<StartupCollectionsTempProps> = async ({
  className,
  query,
}) => {
  // data fetching, startups

  return (
    <section className={`${className || ''}`}>
      <p>{query ? `Search results for "${query}"` : 'All Startups'}</p>

      <StartupLists data={[]} />
    </section>
  );
};

export default StartupCollectionsTemp;
