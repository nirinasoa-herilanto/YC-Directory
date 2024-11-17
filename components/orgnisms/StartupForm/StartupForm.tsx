'use client';

import React, { useState, useActionState } from 'react';
import { ZodError } from 'zod';

import { useToast } from '@project/hooks/toast';

import { startupFormSchema } from '@project/utils/validations';
import { InitialStartupStateType } from '@project/utils/types';

import { Send } from 'lucide-react';
import { Button } from '@project/components/atoms';

import {
  CustomInputWithLabel,
  CustomMarkdownEditorWithLabel,
  CustomTextareaWithLabel,
} from '@project/components/molecules';

export type StartupFormProps = {
  className?: string;
};

const initialStartupState = {
  data: {
    title: '',
    description: '',
    category: '',
    image: '',
    pitch: '',
  },
  message: null,
  errors: {},
} as InitialStartupStateType;

const StartupForm: React.FC<StartupFormProps> = ({ className }) => {
  const [pitch, setPicth] = useState<string>('');

  const { toast } = useToast();

  const submitStartupHandler = async (
    prevState: InitialStartupStateType,
    formData: FormData,
  ) => {
    const formValues = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      image: formData.get('image') as string,
      pitch,
    };

    try {
      await startupFormSchema.parseAsync(formValues);

      // add startup to Sanity
      // console.log('🏠 FORM VALUES', formValues);

      toast({
        title: 'Success',
        description: 'Your Startup idea was submitted successfully 😃.',
      });

      setPicth(''); // resest MD editor

      return {
        ...initialStartupState,
        message: 'Startup added successfully 😃',
      } as InitialStartupStateType;
    } catch (error) {
      if (error instanceof ZodError) {
        const err = error.flatten().fieldErrors;

        // console.log('💥 CATCH ERROR', err);
        // console.log('🏡 PREV STATE ERROR', prevState);

        toast({
          title: 'Error: Invalid input',
          description: '💥 Please check your inputs and try again.',
          variant: 'destructive',
        });

        return {
          ...prevState,
          data: { ...formValues },
          message: '🙂 Invalid input. Please check it again.',
          errors: { ...err },
        };
      }

      return {
        ...prevState,
        data: { ...formValues },
        message: 'An error was occured. Please, try again 😁.',
      };
    }
  };

  const [state, formAction, isPending] = useActionState(
    submitStartupHandler,
    initialStartupState,
  );

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
        value={pitch}
        defaultValue={state.data?.pitch || ''}
        onChange={(val) => setPicth(val as string)}
        error={state.errors?.pitch}
      />

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
