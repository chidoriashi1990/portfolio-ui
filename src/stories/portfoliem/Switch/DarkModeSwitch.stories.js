import { action } from '@storybook/addon-actions';
import DarkModeSwitch from './DarkModeSwitch.vue';

import readme from './README.md';

export default {
  title: 'Portfoliem/Switch',
  component: DarkModeSwitch
};

export const Template = () => ({
  components: { DarkModeSwitch },
  template: '<dark-mode-switch @darkMode="onClick" />',
  methods: {
    onClick: action('darkMode')
  }
});

Template.storyName = 'DarkModeSwitch';
Template.parameters = {
  readme: {
    sidebar: readme
  }
};
