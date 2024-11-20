import {
  HeroTemp,
  StartupCollectionsLiveApiTemp,
} from '@project/components/templates';

const heroPlaceholder = {
  heading: `Pitch your startup,
  connect with entrepreneurs`,
  subHeading: `Submit Ideas, vote on Pitches, and get noticed in Virtual competitions`,
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const query = (await searchParams)?.query;

  return (
    <main>
      <HeroTemp
        placeholder={heroPlaceholder}
        query={query}
        showSubHeading
        showSearchForm
      />

      <StartupCollectionsLiveApiTemp
        className="max-w-[1200px] m-auto"
        query={query}
      />
    </main>
  );
}
