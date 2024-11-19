'use client';

import React, { useState, useActionState, useEffect } from 'react';
import { cn } from '@project/styles';
import { useRouter } from 'next/navigation';

import { useToast } from '@project/hooks/toast';

import { InitialStartupStateType } from '@project/utils/types';

import { createStartupAction } from '@project/lib/actions';

import { Send } from 'lucide-react';

import {
  CustomInputWithLabel,
  CustomMarkdownEditorWithLabel,
  CustomTextareaWithLabel,
} from '@project/components/molecules';
import { Button } from '@project/components/atoms';

export type StartupFormProps = {
  className?: string;
};

export const initialStartupState = {
  data: {
    title: '',
    description: '',
    category: '',
    image: '',
    pitch: '',
  },
  slug: {},
  message: null,
  errors: {},
  status: 'INITIAL',
} as InitialStartupStateType;

const StartupForm: React.FC<StartupFormProps> = ({ className }) => {
  const [pitch, setPicth] = useState<string>('');

  const router = useRouter();
  const { toast } = useToast();

  const submitStartupHandler = createStartupAction.bind(null, pitch);

  const [state, formAction, isPending] = useActionState(
    submitStartupHandler,
    initialStartupState,
  );

  const { status, slug } = state;

  useEffect(() => {
    if (status === 'SUCCESS' && slug?.current?.length !== 0) {
      setPicth('');

      toast({
        title: 'Success',
        description: 'Your Startup idea was submitted successfully 😃.',
      });

      router.push(`/startups/${state.slug?.current}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, slug]);

  return (
    <form className={`startup-form ${className || ''}`} action={formAction}>
      <CustomInputWithLabel
        id="title"
        name="title"
        htmlFor="title"
        labelTxt="Title"
        defaultValue={state?.data?.title || ''}
        placeholder="Startup title"
        error={state.errors?.title}
        required
      />

      <CustomTextareaWithLabel
        id="description"
        name="description"
        htmlFor="description"
        labelTxt="Description"
        defaultValue={state?.data?.description || ''}
        placeholder="Startup description"
        error={state.errors?.description}
        required
      />

      <CustomInputWithLabel
        id="category"
        name="category"
        htmlFor="category"
        labelTxt="Category"
        defaultValue={state?.data?.category || ''}
        placeholder="Choose category (eg: Tech, Health, Education, ...)"
        error={state.errors?.category}
        required
      />

      <CustomInputWithLabel
        id="image"
        name="image"
        htmlFor="image"
        labelTxt="Image link"
        defaultValue={state?.data?.image || ''}
        placeholder="Paste a link to your demo or promotional media"
        error={state.errors?.image}
        required
      />

      {/* TODO after data submitted then clean the editor */}
      <CustomMarkdownEditorWithLabel
        htmlFor="picth"
        labelTxt="Pitch"
        id="pitch"
        value={pitch}
        defaultValue={state.data?.pitch || ''}
        onChange={(val) => setPicth(val as string)}
        error={state.errors?.pitch}
      />

      {state.message && (
        <p
          className={cn(
            'text-center font-semibold',
            state.status !== 'SUCCESS' ? 'text-red-500' : 'text-green-800',
          )}
        >
          {state.message}
        </p>
      )}

      <Button className="startup-form_btn" type="submit" disabled={isPending}>
        {isPending ? (
          <span>Submitting idea ...</span>
        ) : (
          <>
            <span>Submit your idea</span>
            <Send className="size-6 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
};

export default StartupForm;
