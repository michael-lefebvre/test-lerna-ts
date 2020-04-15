module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    'storybook-addon-styled-component-theme/dist/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
};
