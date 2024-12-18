import slugify from 'slugify';

export const truncate = (txt: string, nb: number): string => {
  return txt.length > nb ? `${txt.slice(0, nb - 1)}...` : txt;
};

export const formattedDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const generatedSlug = (item: string): string => {
  return slugify(item, {
    lower: true,
    replacement: '-',
    strict: true,
  });
};
