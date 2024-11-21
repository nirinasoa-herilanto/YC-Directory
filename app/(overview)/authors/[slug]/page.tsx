import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';

import { client } from '@project/sanity/lib/client';
import { AUTHOR_PROFILE_QUERY } from '@project/sanity/queries';
import { Author } from '@project/sanity/types';

import { AuthorItem } from '@project/components/molecules';
import { AuthorStartupCollectionsTemp } from '@project/components/templates';
import { StartupSkeletonGrid } from '@project/components/orgnisms';

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const author = await client.fetch<Author>(AUTHOR_PROFILE_QUERY, { slug });

  if (!author) return notFound;

  return (
    <section className="p-10 max-w-screen-xl m-auto grid gap-10 lg:grid-cols-[250px_auto] xl:grid-cols-[350px_auto]">
      <AuthorItem className="mt-10" author={author} />

      <Suspense fallback={<StartupSkeletonGrid display="detail" />}>
        <AuthorStartupCollectionsTemp authorId={author._id} />
      </Suspense>
    </section>
  );
}
