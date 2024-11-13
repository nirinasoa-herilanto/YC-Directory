import { defineQuery } from 'next-sanity';

export const ALL_STARTUPS = defineQuery(`
*[_type == "startup"]{
  _id,
    title,
    pitch,
    description,
    image,
    views,
    category,
    author -> {_id, username, bio, email, image},
    slug,
    _createdAt
}
  `);
