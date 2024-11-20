import React from 'react';
import { auth } from '@project/auth';

import { client } from '@project/sanity/lib/client';
import { STARTUPS_BY_AUTHOR_QUERY } from '@project/sanity/queries';

import { StartupItemType } from '@project/utils/types';

import { StartupLists } from '@project/components/orgnisms';

export type AuthorStartupCollectionsTempProps = {
  className?: string;
  authorId: string;
};

const AuthorStartupCollectionsTemp: React.FC<
  AuthorStartupCollectionsTempProps
> = async ({ className, authorId }) => {
  const startups = await client.fetch<StartupItemType[]>(
    STARTUPS_BY_AUTHOR_QUERY,
    {
      id: authorId,
    },
  );

  const session = await auth();

  return (
    <div className={` ${className || ''}`}>
      <h1 className="mb-4 font-bold text-[32px]">
        {session?.id === authorId ? 'Your Startups' : 'All startups'}
      </h1>

      {startups.length > 0 ? (
        <StartupLists data={startups} display="detail" />
      ) : (
        <p className="text-center">No startups yet</p>
      )}
    </div>
  );
};

export default AuthorStartupCollectionsTemp;
