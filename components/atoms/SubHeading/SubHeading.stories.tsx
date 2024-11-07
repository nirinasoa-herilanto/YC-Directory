import type { Meta, StoryObj } from '@storybook/react';

import SubHeading from './SubHeading';

const meta: Meta<typeof SubHeading> = {
  component: SubHeading,
  tags: ['autodocs'],
};

export default meta;
type StorySubHeading = StoryObj<typeof SubHeading>;

export const Default: StorySubHeading = {
  args: {
    children: 'Pitch your startup, connect with entrepreneurs',
    className: 'bg-blue-500',
  },
};
