import ContactFooter from './ContactFooter.vue';

export default {
  title: 'Example/Footer',
  component: ContactFooter
};

export const Template = () => ({
  components: { ContactFooter },
  template: '<contact-footer title="contact"></contact-footer>'
});

Template.storyName = 'ContactFooter';
