import ProfileCard from './ProfileCard.vue';

export default {
  title: 'Portfoliem/Card',
  component: ProfileCard
};

export const Profile = () => ({
  components: { ProfileCard },
  template: '<profile-card />'
});

Profile.storyName = 'Profile Card';
