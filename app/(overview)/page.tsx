import {
  HeroTemp,
  StartupCollectionsTemp,
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
      <HeroTemp placeholder={heroPlaceholder} query={query} />
      <StartupCollectionsTemp query={query} />
    </main>
  );
}
