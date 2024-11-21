import { auth } from '@project/auth';
import { StartupForm } from '@project/components/orgnisms';
import { HeroPlaceholderType, HeroTemp } from '@project/components/templates';
import { redirect } from 'next/navigation';

const placeholder = {
  heading: 'Submit your Startup',
} as HeroPlaceholderType;

export const metadata = {
  title: 'Create Startup | YC Directory',
};

export default async function page() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return (
    <main>
      <HeroTemp className="!min-h-[250px]" placeholder={placeholder} />

      <section className="my-8">
        <StartupForm />
      </section>
    </main>
  );
}
