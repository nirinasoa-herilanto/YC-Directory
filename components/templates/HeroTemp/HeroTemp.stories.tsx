import type { Meta, StoryObj } from '@storybook/react';

import HeroTemp from './HeroTemp';

const meta: Meta<typeof HeroTemp> = {
  component: HeroTemp,
  tags: ['autodocs'],
};

export default meta;

type HeroTempStory = StoryObj<typeof HeroTemp>;

const heroPlaceholder = {
  heading: `Pitch your startup,
  connect with entrepreneurs`,
  subHeading: `Submit Ideas, vote on Pitches, and get noticed in Virtual competitions`,
};

export const Default: HeroTempStory = {
  args: {
    placeholder: heroPlaceholder,
  },
};
