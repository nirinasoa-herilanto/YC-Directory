'use server';

import { ZodError } from 'zod';

import { auth } from '@project/auth';
import { startupFormSchema } from '@project/utils/validations';
import { writeClient } from '@project/sanity/lib/write-client';

import { InitialStartupStateType } from '@project/utils/types';
import { generatedSlug } from '@project/utils/app';

import { initialStartupState } from '@project/components/orgnisms/StartupForm/StartupForm';

export const createStartupAction = async (
  pitch: string,
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
    const output = await startupFormSchema.parseAsync(formValues);

    const session = await auth();

    if (!session) {
      return {
        ...prevState,
        message: `
        💥 You don't have this access.
        Please, sign in with your account 😃.
        `,
      };
    }

    const inputData = {
      ...output,
      views: 0,
      author: {
        _type: 'reference',
        _ref: session?.id,
      },
      slug: {
        _type: 'slug',
        current: generatedSlug(output.title),
      },
    };

    // add startup to Sanity
    const res = await writeClient.create({ _type: 'startup', ...inputData });

    // console.log('🛠️ RESPONSE FROM SERVER ACTION', res);

    return {
      ...initialStartupState,
      status: 'SUCCESS',
      data: {
        ...initialStartupState.data,
      },
      slug: { _type: 'slug', current: res?.slug?.current },
      message: 'Cool, your Startup was added successfully 😃',
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    if (error instanceof ZodError) {
      const err = error.flatten().fieldErrors;

      return {
        ...prevState,
        status: 'FAILED',
        data: { ...formValues },
        message: '🙂 Invalid input. Please check it again.',
        errors: { ...err },
      };
    }

    return {
      ...prevState,
      data: { ...formValues },
      status: 'FAILED',
      message: 'An error was occured. Please, try again 😁.',
    };
  }
};
