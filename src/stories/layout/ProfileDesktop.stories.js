import ProfileDesktop from './ProfileDesktop.vue';

export default {
  title: 'Layout/ProfileDesktop',
  component: ProfileDesktop
};

export const Template = () => ({
  components: { ProfileDesktop },
  template: '<profile-desktop />'
});

Template.storyName = 'ProfileDesktop';
