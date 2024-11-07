import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  tags: ['autodocs'],
};

export default meta;
type StoryHeading = StoryObj<typeof Heading>;

export const Default: StoryHeading = {
  args: {
    children: 'Pitch your startup, connect with entrepreneurs',
  },
};
