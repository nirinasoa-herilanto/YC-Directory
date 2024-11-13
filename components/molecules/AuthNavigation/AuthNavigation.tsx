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
  DropdownMenuSeparator,
} from '@project/components/atoms';
import Image from 'next/image';

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
            <div className="flex items-center gap-1">
              <Image
                className="bg-cover rounded-md"
                src={session?.user?.image || ''}
                alt={session.user.name || 'user'}
                width={32}
                height={32}
              />
              <span>{`Hi, ${session?.user?.name}`}</span>
            </div>

            <DropdownMenuSeparator />

            <Link href={'/create'}>
              <DropdownMenuItem>Create</DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />

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
