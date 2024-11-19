import { Author, Startup } from '@project/sanity/types';

export type StartupItemType = Omit<Startup, 'author'> & { author: Author };

export type InitialStartupStateType = {
  data?: {
    title?: string;
    description?: string;
    category?: string;
    image?: string;
    pitch?: string;
  };
  slug?: {
    _type?: string;
    current?: string;
  };
  status: string;
  message?: string | null;
  errors?: {
    title?: string[];
    description?: string[];
    category?: string[];
    image?: string[];
    pitch?: string[];
  };
};
