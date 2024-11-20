import { defineQuery } from 'next-sanity';

export const ALL_STARTUPS_QUERY = defineQuery(`
*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->username match $search] | order(_createdAt desc) {
  _id,
    title,
    pitch,
    description,
    image,
    views,
    category,
    author -> {_id, username, bio, email, image, slug},
    slug,
    _createdAt
}
  `);

export const STARTUP_DETAIL_QUERY = defineQuery(`
*[_type == "startup" && slug.current == $slug ][0] {
  _id,
    title,
    pitch,
    description,
    image,
    views,
    category,
    author -> {_id, username, bio, email, image, slug},
    slug,
    _createdAt
}
    `);

export const VIEW_STARTUP_QUERY = defineQuery(`
*[_type == "startup" && _id == $id ][0] {
  _id,
    views
}
  `);

export const STARTUPS_BY_AUTHOR_QUERY = defineQuery(`
*[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
  _id,
    title,
    pitch,
    description,
    image,
    views,
    category,
    author -> {_id, username, bio, email, image, slug},
    slug,
    _createdAt
}
  `);
