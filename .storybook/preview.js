import { addDecorator } from '@storybook/vue';
import vuetify from './vuetify_storybook.js';

addDecorator(() => ({
  vuetify,
  template: `
    <v-app>
      <v-main>
        <v-container fluid >
          <story/>
        </v-container>
      </v-main>
    </v-app>
    `
}));
