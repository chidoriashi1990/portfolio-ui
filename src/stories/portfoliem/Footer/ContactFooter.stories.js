import ContactFooter from './ContactFooter.vue';

export default {
  title: 'Portfoliem/Footer',
  component: ContactFooter
};

export const Template = () => ({
  components: { ContactFooter },
  template:
    '<contact-footer title="contact" :action-buttons="socialData"></contact-footer>',
  data: () => ({
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

Template.storyName = 'ContactFooter';
