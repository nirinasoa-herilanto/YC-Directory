import type { Meta, StoryObj } from '@storybook/react';

import HeroWrapper from './HeroWrapper';

const meta: Meta<typeof HeroWrapper> = {
  component: HeroWrapper,
  tags: ['autodocs'],
};

export default meta;
type StoryHeroWrapper = StoryObj<typeof HeroWrapper>;

export const Default: StoryHeroWrapper = {
  args: {
    children: 'Pitch your startup, connect with entrepreneurs',
  },
};
