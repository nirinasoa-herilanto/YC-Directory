import path from 'path';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@tomfreudenberg/next-auth-mock/storybook',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['..\\public'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@project/auth': path.resolve(__dirname, '../auth'),
        '@project/styles': path.resolve(__dirname, '../styles'),
        '@project/lib/actions': path.resolve(__dirname, '../lib/actions/auth'),
        '@project/components/atoms': path.resolve(
          __dirname,
          '../components/atoms',
        ),
        '@project/components/molecules': path.resolve(
          __dirname,
          '../components/molecules',
        ),
        '@project/components/organisms': path.resolve(
          __dirname,
          '../components/organisms',
        ),
        '@project/components/templates': path.resolve(
          __dirname,
          '../components/templates',
        ),
      };
    }

    return config;
  },
};

export default config;
