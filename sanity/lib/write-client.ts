import 'server-only';

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, token } from '../env';

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true,
});

if (!writeClient.config().token) {
  throw new Error('💥 No provided token 💥');
}
