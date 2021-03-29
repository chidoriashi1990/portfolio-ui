import MyCard from './Card.vue';

export default {
  title: 'Example/Card',
  component: MyCard
};

export const Template = () => ({
  components: { MyCard },
  template: '<my-card />'
});

Template.storyName = 'Card';
