import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, token } from '../env';

//token is Needed for certain operations like updating content or accessing previewDrafts perspective, from docs https://www.sanity.io/docs/js-client
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token,
});

// if (!writeClient.config().token) {
//   throw new Error('💥 No provided token 💥');
// }
