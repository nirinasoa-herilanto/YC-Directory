import { Skeleton } from '@project/components/atoms';
import { StartupSkeletonGrid } from '@project/components/orgnisms';

export default function loading() {
  return (
    <>
      <div className="grid gap-4">
        <Skeleton className="w-full h-screen" />
        <StartupSkeletonGrid isCatalogs />
      </div>
    </>
  );
}
