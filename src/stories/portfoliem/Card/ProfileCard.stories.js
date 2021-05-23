import ProfileCard from './ProfileCard.vue';

export default {
  title: 'Portfoliem/Card',
  component: ProfileCard
};

export const Profile = () => ({
  components: { ProfileCard },
  template:
    '<profile-card :profileImage="profileImage" :actionButtons="socialData" />',
  data: () => ({
    profileImage: 'https://avatars.githubusercontent.com/u/3616178?v=4',
    socialData: [
      {
        icon: 'mdi-email',
        href: 'mailto:chidoriashi00918@gmail.com'
      },
      {
        icon: 'mdi-linkedin',
        href: 'https://www.linkedin.com/in/yusuke-miyakawa-a0a219191/'
      },
      {
        icon: 'mdi-facebook',
        href: 'https://www.facebook.com/YuM1909'
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com/MiyakawaYusuke'
      },
      {
        icon: 'mdi-github',
        href: 'https://github.com/chidoriashi1990'
      }
    ]
  })
});

Profile.storyName = 'Profile Card';
