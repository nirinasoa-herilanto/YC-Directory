import { logoutAction } from '@project/lib/actions';

import { Button } from '../button';

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <Button type="submit">Logout</Button>
    </form>
  );
}
