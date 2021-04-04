import DarkModeSwitch from './DarkModeSwitch.vue';

export default {
  title: 'Example/Switch',
  component: DarkModeSwitch,
  parameters: { actions: { argTypesRegex: '.*' } }
};

export const Template = () => ({
  components: { DarkModeSwitch },
  template: '<dark-mode-switch @darkMode="darkMode" />'
});

Template.storyName = 'DarkModeSwitch';
