import '@mdi/font/css/materialdesignicons.css';
import { addDecorator } from '@storybook/vue';
import vuetify from './vuetify_storybook.js';

import { action } from '@storybook/addon-actions';

addDecorator(() => ({
  vuetify,
  template: `
    <v-app>
      <v-main>
        <v-container fluid>
          <story />
        </v-container>
      </v-main>
    </v-app>
    `
}));

window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

import { create } from '@storybook/theming';
export const parameters = {
  docs: create({
    base: 'light'
  })
};
