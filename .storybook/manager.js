import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'portfoliem-ui storybook',
    brandUrl: 'https://github.com/portfoliem/portfoliem-ui',
    // brandImage: 'https://place-hold.it/350x150'

    colorSecondary: 'rgba(183,28,28,1)',

    // UI
    appBg: 'rgba(245,245,245,1)',

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'rgba(0,21,45,1)',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: 'rgba(183,28,28,1)',
    barBg: 'rgba(0,21,45,1)'
  })
});
