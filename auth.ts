import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

import { client } from './sanity/lib/client';
import { writeClient } from './sanity/lib/write-client';

import { Author } from './sanity/types';

import { AUTHOR_PROFILE_QUERY } from './sanity/queries';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ profile }) {
      const currentUser = await client
        .withConfig({ useCdn: false })
        .fetch<Author>(AUTHOR_PROFILE_QUERY, {
          email: profile?.email,
        });

      // console.log('😃 Current User', currentUser);

      if (!currentUser) {
        await writeClient.create({
          _type: 'author',
          username: profile?.name,
          email: profile?.email,
          image: profile?.avatar_url,
          bio: profile?.bio || '',
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const currentUser = await client
          .withConfig({ useCdn: false })
          .fetch<Author>(AUTHOR_PROFILE_QUERY, {
            email: profile?.email,
          });

        token.id = currentUser._id;
      }

      // console.log('🔑 TOKEN', token);

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id });

      return session;
    },
  },
});
