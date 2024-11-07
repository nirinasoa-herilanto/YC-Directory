import React from 'react';

import { IStartup } from '@project/utils/interface';

export type StartupItemProps = {
  className?: string;
  startup: IStartup;
};

const StartupItem: React.FC<StartupItemProps> = ({ className, startup }) => {
  return (
    <li className={`startup-card ${className || ''}`}>
      <div>{startup.title}</div>
      <p>{startup.description}</p>
    </li>
  );
};

export default StartupItem;
