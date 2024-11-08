import React from 'react';

import { StartupLists } from '@project/components/orgnisms';
import { IStartup } from '@project/utils/interface';

export type StartupCollectionsTempProps = {
  className?: string;
  query?: string;
};

const STARTUP: IStartup[] = [
  {
    _id: 1,
    title: 'NHR Tech',
    description: `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Similique ea nam quibusdam maxime ab sunt molestiae harum tempore?
 Quidem, sit quisquam ipsam odit alias nam temporibus quod placeat.`,
    author: { _id: 'azerty', name: 'Nirinasoa Herilanto' },
    image: '/business.jpg',
    views: 55,
    category: 'Marketing',
    _createdAt: new Date(),
  },
  {
    _id: 2,
    title: 'NHR Tech',
    description: `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Similique ea nam quibusdam maxime ab sunt molestiae harum tempore?
 Quidem, sit quisquam ipsam odit alias nam temporibus quod placeat.`,
    author: { _id: 'zerty', name: 'Nirinasoa Herilanto' },
    image: '/business.jpg',
    views: 55,
    category: 'IT',
    _createdAt: new Date(),
  },
  {
    _id: 3,
    title: 'NHR Tech',
    description: `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Similique ea nam quibusdam maxime ab sunt molestiae harum tempore?
 Quidem, sit quisquam ipsam odit alias nam temporibus quod placeat.`,
    author: { _id: 'fghj', name: 'Nirinasoa Herilanto' },
    image: '/business.jpg',
    views: 55,
    category: 'Dev',
    _createdAt: new Date(),
  },
];

const StartupCollectionsTemp: React.FC<StartupCollectionsTempProps> = async ({
  className,
  query,
}) => {
  // data fetching, startups

  return (
    <section className={`${className || ''}`}>
      <h3 className="my-5 font-bold text-[32px]">
        {query ? `Search results for "${query}"` : 'All Startups'}
      </h3>
      <StartupLists data={STARTUP} />
    </section>
  );
};

export default StartupCollectionsTemp;
