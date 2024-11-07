import React from 'react';

import { IStartup } from '@project/utils/interface';

import { StartupItem } from '@project/components/molecules';

export type StartupListsProps = {
  className?: string;
  data: IStartup[];
};

const StartupLists: React.FC<StartupListsProps> = ({ className, data }) => {
  return (
    <ul className={`card_grid ${className || ''}`}>
      {data.map((startup) => (
        <StartupItem key={startup._id} startup={startup} />
      ))}
    </ul>
  );
};

export default StartupLists;
