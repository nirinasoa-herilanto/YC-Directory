import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import markdownit from 'markdown-it';

import { client } from '@project/sanity/lib/client';
import { STARTUP_DETAIL_QUERY } from '@project/sanity/queries';

import { formattedDate } from '@project/utils/app';
import { StartupItemType } from '@project/utils/types';

import { HeroPlaceholderType, HeroTemp } from '@project/components/templates';
import { Skeleton } from '@project/components/atoms';
import { StartupView } from '@project/components/molecules';

export const experimental_ppr = true;

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const startup = await client.fetch<StartupItemType>(STARTUP_DETAIL_QUERY, {
    slug,
  });

  if (!startup) return notFound();

  const md = markdownit({ html: true });
  const formattedPitch = md.render(startup.pitch || '');

  const placeholder = {
    heading: startup.title,
    subHeading: startup.description,
    tag: formattedDate(new Date(startup._createdAt)),
  } as HeroPlaceholderType;

  return (
    <main>
      <HeroTemp className="!min-h-[250px]" placeholder={placeholder} showTag />

      <section className="w-full h-[500px] my-8 relative px-6 py-10 max-w-screen-lg mx-auto">
        <Image
          className="object-cover object-center rounded-xl"
          src={startup.image!}
          alt={startup.title || 'startup background'}
          priority
          fill
        />
      </section>

      <section className="px-6 py-10 max-w-screen-lg mx-auto">
        <div className="flex items-center justify-between">
          <Link href={`/users/${startup.author?._id}`}>
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full shadow-md"
                src={startup?.author?.image || ''}
                alt={startup?.author?.username || 'user'}
                width={65}
                height={65}
              />

              <span className="text-[18px] font-bold">
                {startup.author.username}
              </span>
            </div>
          </Link>

          <div className="category-tag">{startup.category}</div>
        </div>

        <div className="my-8">
          {formattedPitch ? (
            <article
              className="max-w-4xl  prose"
              dangerouslySetInnerHTML={{ __html: formattedPitch }}
            />
          ) : (
            <p>No details provided. Stay tuned 😉.</p>
          )}
        </div>
      </section>

      <Suspense fallback={<Skeleton className="view_skeleton" />}>
        <StartupView id={startup._id} />
      </Suspense>
    </main>
  );
}
