import { defineQuery } from 'next-sanity';

export const ALL_AUTHORS = defineQuery(`
    *[_type == "author"]{
  _id,
  username,
  bio,
  email,
  image,
  _createdAt,
}
  `);
