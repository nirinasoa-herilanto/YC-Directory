import { Meta, StoryObj } from '@storybook/react';

import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
  tags: ['autodocs'],
};

export default meta;

type LogoStory = StoryObj<typeof Logo>;

export const Default: LogoStory = {
  args: {
    src: '/logo.png',
    alt: 'YC Directory logo',
  },
  render: (args) => <Logo {...args} />,
};
