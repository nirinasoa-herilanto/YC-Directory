import React from 'react';

import { Card, Skeleton } from '@project/components/atoms';

export type StartupSkeletonProps = {
  className?: string;
};

const StartupSkeleton: React.FC<StartupSkeletonProps> = ({ className }) => {
  return (
    <Card className={`grid gap-2${className || ''}`}>
      <Skeleton className="w-full h-10 rounded-md" />
      <div className="flex justify-between items-center gap-2">
        <Skeleton className="w-full h-12 rounded-md" />
        <Skeleton className="w-full h-12 rounded-md" />
      </div>
      <Skeleton className="w-full h-60 rounded-md" />
      <div className="flex justify-between items-center gap-2">
        <Skeleton className="w-full h-10 rounded-md" />
        <Skeleton className="w-full h-10 rounded-md" />
      </div>
    </Card>
  );
};

export default StartupSkeleton;
