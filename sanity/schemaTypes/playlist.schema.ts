import { defineField, defineType } from 'sanity';

// eg: Editor picks, Top 10 Startups of the year, ...

export const playlistSchema = defineType({
  name: 'playlist',
  title: 'Playlist',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error("Please, enter your Playlist's name 😃."),
    }),
    defineField({
      name: 'selection',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'startup' } }],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
    }),
  ],
});
