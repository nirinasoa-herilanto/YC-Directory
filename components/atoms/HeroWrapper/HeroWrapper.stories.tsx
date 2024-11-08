import type { Meta, StoryObj } from '@storybook/react';

import HeroWrapper from './HeroWrapper';

const meta: Meta<typeof HeroWrapper> = {
  component: HeroWrapper,
  tags: ['autodocs'],
};

export default meta;

type HeroWrapperStory = StoryObj<typeof HeroWrapper>;

export const Default: HeroWrapperStory = {
  args: {
    children: 'Pitch your startup, connect with entrepreneurs',
  },
};
