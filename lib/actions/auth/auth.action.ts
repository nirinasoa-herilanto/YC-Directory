'use server';

import { signIn, signOut } from '@project/auth';

export const signInWithGithubAction = async () => {
  await signIn('github', { redirectTo: '/' });
};

export const logoutAction = async () => {
  await signOut({ redirectTo: '/' });
};
