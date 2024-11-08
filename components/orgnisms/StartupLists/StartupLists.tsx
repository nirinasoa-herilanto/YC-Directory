import React from 'react';

import { IStartup } from '@project/utils/interface';

import { StartupItem } from '@project/components/molecules';

export type StartupListsProps = {
  className?: string;
  data: IStartup[];
};

const StartupLists: React.FC<StartupListsProps> = ({ className, data }) => {
  return (
    <ul
      className={`grid gap-5 md:grid-cols-2 lg:grid-cols-3  ${className || ''}`}
    >
      {data.map((startup) => (
        <StartupItem key={startup._id} startup={startup} />
      ))}
    </ul>
  );
};

export default StartupLists;
