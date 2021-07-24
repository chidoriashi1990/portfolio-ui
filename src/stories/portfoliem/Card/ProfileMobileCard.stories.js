import ProfileMobileCard from './ProfileMobileCard.vue';

export default {
  title: 'Portfoliem/Card',
  component: ProfileMobileCard
};

export const ProfileMobile = () => ({
  components: { ProfileMobileCard },
  template:
    '<profile-mobile-card :profileImage="profileImage" :actionButtons="socialData" />',
  data: () => ({
    profileImage: 'https://avatars.githubusercontent.com/u/3616178?v=4',
    socialData: [
      {
        icon: 'mdi-email',
        text: 'Mail',
        href: 'mailto:chidoriashi00918@gmail.com'
      },
      {
        icon: 'mdi-linkedin',
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yusuke-miyakawa-a0a219191/'
      },
      {
        icon: 'mdi-facebook',
        text: 'Facebook',
        href: 'https://www.facebook.com/YuM1909'
      },
      {
        icon: 'mdi-twitter',
        text: 'Twitter',
        href: 'https://twitter.com/MiyakawaYusuke'
      },
      {
        icon: 'mdi-github',
        text: 'GitHub',
        href: 'https://github.com/chidoriashi1990'
      }
    ]
  })
});

ProfileMobile.storyName = 'Profile Mobile Card';
