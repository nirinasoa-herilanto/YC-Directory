import { Playlist } from '@project/sanity/types';
import { StartupItemType } from './startup.type';

export type PlaylistCollectionsTypes = Omit<Playlist, 'selection'> & {
  selection: StartupItemType[];
};
