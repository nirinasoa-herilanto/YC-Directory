import React from 'react';
import Image from 'next/image';

import type { Author } from '@project/sanity/types';

export type AuthorItemProps = {
  className?: string;
  author: Author;
};

const AuthorItem: React.FC<AuthorItemProps> = ({ className, author }) => {
  return (
    <div className={`profile_card ${className || ''}`}>
      <div className="profile_title">
        <h3 className="uppercase text-center font-semibold line-clamp-1">
          {author.username}
        </h3>
      </div>

      <Image
        className="profile_image"
        src={author?.image || ''}
        alt={author?.username || 'author image'}
        width={220}
        height={220}
      />

      <p className="text-center text-white mt-4">{author?.bio}</p>
    </div>
  );
};

export default AuthorItem;
