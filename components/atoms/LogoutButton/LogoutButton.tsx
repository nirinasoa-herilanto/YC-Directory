import { logoutAction } from '@project/lib/actions';

import { Button } from '../button';

export type LogoutButtonProps = {
  className?: string;
};

export default function LogoutButton({ className }: LogoutButtonProps) {
  return (
    <form className={`${className || ''}`} action={logoutAction}>
      <Button className="w-full" type="submit">
        Logout
      </Button>
    </form>
  );
}
