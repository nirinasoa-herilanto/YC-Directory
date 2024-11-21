import { type SchemaTypeDefinition } from 'sanity';

import { authorSchema } from './author.schema';
import { startupSchema } from './startup.schema';
import { playlistSchema } from './playlist.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorSchema, startupSchema, playlistSchema],
};
