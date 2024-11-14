import { defineField, defineType } from 'sanity';
export const startupSchema = defineType({
  name: 'startup',
  title: 'Startup',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error("Please, enter your Startup's name 😃."),
    }),
    defineField({
      name: 'pitch',
      type: 'markdown',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'views',
      type: 'number',
    }),
    defineField({
      name: 'category',
      type: 'string',
      validation: (Rule) =>
        Rule.min(1).max(20).required().error('Please, enter a category 😃.'),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
    }),
  ],
});
