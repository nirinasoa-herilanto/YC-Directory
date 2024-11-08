import { signInWithGithubAction } from '@project/lib/actions';

import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { Button } from '../button';

export default function SignInWithGithubButton() {
  return (
    <form action={signInWithGithubAction}>
      <Button type="submit">
        <GitHubLogoIcon />
        <span className="hidden md:block">Sign in with GitHub</span>
      </Button>
    </form>
  );
}
