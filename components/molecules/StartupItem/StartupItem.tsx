import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EyeIcon } from 'lucide-react';

import type { StartupItemType } from '@project/utils/types';
import { formattedDate, truncate } from '@project/utils/app';

import { Button } from '@project/components/atoms';

export type StartupItemProps = {
  className?: string;
  startup: StartupItemType;
};

const StartupItem: React.FC<StartupItemProps> = ({ className, startup }) => {
  return (
    <li className={`startup-card group flex flex-col gap-4 ${className || ''}`}>
      <div className="flex justify-between items-center">
        <span>{formattedDate(new Date(startup._createdAt))}</span>
        <div className="flex items-center gap-1">
          <EyeIcon className="size-6 text-primary" />
          <span>{startup.views}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <Link className="line-clamp-1" href={`/users/${startup.author?._id}`}>
            {startup?.author?.username}
          </Link>
          <Link
            className="font-semibold line-clamp-1"
            href={`/startups/${startup?.slug?.current}`}
          >
            {startup.title}
          </Link>
        </div>

        <Link href={`/users/${startup.author?._id}`}>
          <Image
            className="rounded-full"
            src={startup?.author?.image || ''}
            alt={startup?.author?.username || 'user'}
            width={50}
            height={50}
          />
        </Link>
      </div>

      <Link
        className="flex flex-col gap-2"
        href={`/startups/${startup?.slug?.current}`}
      >
        <p className="text-justify">{truncate(startup.description!, 120)}</p>

        <Image
          className="startup-card_img shadow-sm"
          src={startup.image || ''}
          alt={startup.image || 'Startup image'}
          width={150}
          height={150}
        />
      </Link>

      <div className="flex justify-between">
        <Link href={`/?query=${startup?.category?.toLocaleLowerCase()}`}>
          {startup?.category}
        </Link>

        <Button asChild>
          <Link href={`/startups/${startup?.slug?.current}`}>details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupItem;
