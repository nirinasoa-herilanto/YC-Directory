import React from 'react';
import Link from 'next/link';

import { auth } from '@project/auth';

import { User } from 'lucide-react';

import {
  Button,
  LogoutButton,
  SignInWithGithubButton,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@project/components/atoms';

export type AuthNavigationProps = {
  className?: string;
};

const AuthNavigation: React.FC<AuthNavigationProps> = async ({ className }) => {
  const session = await auth();

  let markup = <SignInWithGithubButton />;

  if (session?.user) {
    markup = (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <User size={5} />
              <span className="sr-only">user</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-3" align="end">
            <span>{`👋 ${session?.user?.name}`}</span>

            <Link href={'/create'}>
              <DropdownMenuItem>Create</DropdownMenuItem>
            </Link>

            <LogoutButton />
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  }

  return (
    <div className={`flex items-center gap-5 ${className || ''}`}>{markup}</div>
  );
};

export default AuthNavigation;
