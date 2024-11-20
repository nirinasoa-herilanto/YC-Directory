import { defineQuery } from 'next-sanity';

export const ALL_AUTHORS_QUERY = defineQuery(`
*[_type == "author"]{
  _id,
  username,
  bio,
  email,
  image,
  slug,
  _createdAt,
}
  `);

export const SESSION_AUTHOR_QUERY = defineQuery(`
  *[_type == "author" && email == $email][0] {
  _id,
  username,
  bio,
  email,
  image,
  slug,
  _createdAt,
}
  `);

export const AUTHOR_PROFILE_QUERY = defineQuery(`
*[_type == "author" && slug.current == $slug][0] {
  _id,
  username,
  bio,
  email,
  image,
  slug,
  _createdAt,
}
  `);
