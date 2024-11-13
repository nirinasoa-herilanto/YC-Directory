import '../styles/output.css';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    storySort: {
      method: 'alphabetical',
      order: ['introduction', 'system', '*'],
    },
    tags: ['autodocs'],
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
