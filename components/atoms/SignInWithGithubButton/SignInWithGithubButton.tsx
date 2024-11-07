import { signInWithGithubAction } from '@project/lib/actions';

import { Button } from '../button';

export default function SignInWithGithubButton() {
  return (
    <form action={signInWithGithubAction}>
      <Button type="submit">Signin with GitHub</Button>
    </form>
  );
}
