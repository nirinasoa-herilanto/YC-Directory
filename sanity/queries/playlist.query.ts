import { defineQuery } from 'next-sanity';

export const EDITOR_PICKS_PLAYLISTS_QUERY = defineQuery(`
*[_type == "playlist" && defined(slug.current) && slug.current == $slug] | order(_createdAt desc) {
  _id,
  title,
  slug,
  selection[] -> {
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
  },
    _createdAt
}[0]
  `);
