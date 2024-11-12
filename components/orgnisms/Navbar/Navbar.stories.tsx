import { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;

type NavbarStory = StoryObj<typeof Navbar>;

export const Default: NavbarStory = {
  render: () => <Navbar />,
};
