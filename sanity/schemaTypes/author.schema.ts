import { defineField, defineType } from 'sanity';

export const authorSchema = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Please, tell us your name 😃.'),
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),
    defineField({
      name: 'email',
      type: 'email',
      validation: (Rule) =>
        Rule.required().error('Please, enter a valid email 😃.'),
    }),
    defineField({
      name: 'image',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'username' },
    }),
  ],
  preview: {
    select: { title: 'username' },
  },
});
