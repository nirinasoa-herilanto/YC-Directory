import { defineQuery } from 'next-sanity';

export const ALL_STARTUPS = defineQuery(`
*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->username match $search] | order(_createdAt desc) {
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
