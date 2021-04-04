import { action } from '@storybook/addon-actions';
import DarkModeSwitch from './DarkModeSwitch.vue';

export default {
  title: 'Example/Switch',
  component: DarkModeSwitch,
  parameters: { actions: { argTypesRegex: '^.*' } }
};

export const Template = () => ({
  components: { DarkModeSwitch },
  template: '<dark-mode-switch @darkMode="darkMode" />',
  methods: {
    darkMode(value) {
      action(value);
    }
  }
});

Template.storyName = 'DarkModeSwitch';
