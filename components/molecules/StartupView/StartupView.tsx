import React from 'react';

import { Ping } from '@project/components/atoms';
import { client } from '@project/sanity/lib/client';
import { VIEW_STARTUP_QUERY } from '@project/sanity/queries';

export type StartupViewProps = {
  className?: string;
  id: string;
};

const StartupView: React.FC<StartupViewProps> = async ({ className, id }) => {
  const { views } = await client
    .withConfig({ useCdn: false })
    .fetch(VIEW_STARTUP_QUERY, { id });

  return (
    <div className={`view-container ${className || ''}`}>
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{`${views} ${views > 1 ? 'Views' : 'View'}`}</span>
      </p>
    </div>
  );
};

export default StartupView;
