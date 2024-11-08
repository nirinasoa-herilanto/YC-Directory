import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  tags: ['autodocs'],
};

export default meta;

type HeadingStory = StoryObj<typeof Heading>;

export const Default: HeadingStory = {
  args: {
    children: 'Pitch your startup, connect with entrepreneurs',
  },
};
