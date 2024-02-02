/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#323238'
        },
        {
          name: 'light',
          value: '#FFFFFF'
        }
      ]
    }
  }
};

export default preview;
