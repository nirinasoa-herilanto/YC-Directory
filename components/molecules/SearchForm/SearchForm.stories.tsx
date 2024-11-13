import type { Meta, StoryObj } from '@storybook/react';

import SearchForm from './SearchForm';

const meta: Meta<typeof SearchForm> = {
  component: SearchForm,
  tags: ['autodocs'],
};

export default meta;

type SearchFormStory = StoryObj<typeof SearchForm>;

export const Default: SearchFormStory = {
  args: {
    query: '',
  },
};

export const WithQuery: SearchFormStory = {
  args: {
    query: 'Robots',
  },
};
