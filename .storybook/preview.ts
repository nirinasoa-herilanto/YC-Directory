import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    storySort: {
      method: "alphabetical",
      order: ["introduction", "system", "*"],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
