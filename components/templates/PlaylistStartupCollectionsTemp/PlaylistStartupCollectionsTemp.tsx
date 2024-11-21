import React from 'react';

import { client } from '@project/sanity/lib/client';
import { EDITOR_PICKS_PLAYLISTS_QUERY } from '@project/sanity/queries';

import { PlaylistCollectionsTypes } from '@project/utils/types';

import { StartupLists } from '@project/components/orgnisms';

export type PlaylistStartupCollectionsTempProps = {
  className?: string;
  slug: string;
};

const PlaylistStartupCollectionsTemp: React.FC<
  PlaylistStartupCollectionsTempProps
> = async ({ className, slug }) => {
  const data = await client
    .withConfig({ useCdn: false })
    .fetch<PlaylistCollectionsTypes>(EDITOR_PICKS_PLAYLISTS_QUERY, { slug });

  if (!data) {
    return (
      <section className={`py-8 md:mx-4 xl:m-auto ${className || ''}`}>
        <p className="font-semibold text-center">
          There is no selection yet. Be the first Startup on the selection 😃.
        </p>
      </section>
    );
  }

  const { title, selection } = data;

  return (
    <section className={`py-8 md:mx-4 xl:m-auto ${className || ''}`}>
      <h3 className="my-5 font-bold text-[32px]">
        {title || 'Our best Startup selection 😃'}
      </h3>

      <StartupLists data={selection} />
    </section>
  );
};

export default PlaylistStartupCollectionsTemp;
