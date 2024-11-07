'use client';

import React from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import { X } from 'lucide-react';

import { Button } from '../button';

const ResetFormButton = ({ resetValue }: { resetValue: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const resetQuery = () => {
    const params = new URLSearchParams(searchParams);

    if (resetValue) {
      params.delete('query');
    }

    router.replace(`${pathname}/${params.toString()}`);
  };

  return (
    <Button
      className="rounded-full"
      size="icon"
      type="reset"
      onClick={resetQuery}
    >
      <X className="size-5" />
    </Button>
  );
};

export default ResetFormButton;
