import { Author, Startup } from '@project/sanity/types';

export type StartupItemType = Omit<Startup, 'author'> & { author: Author };
