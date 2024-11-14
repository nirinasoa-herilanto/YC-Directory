import 'server-only';

import { defineLive } from 'next-sanity';
import { client } from '@project/sanity/lib/client';

// export the sanityFetch helper and the SanityLive component
export const { sanityFetch, SanityLive } = defineLive({
  client,
});
