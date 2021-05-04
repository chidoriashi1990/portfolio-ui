import MyCard from './Card.vue';

export default {
  title: 'Portfoliem/Card',
  component: MyCard
};

export const Template = () => ({
  components: { MyCard },
  template: '<my-card />'
});

Template.storyName = 'Card';
