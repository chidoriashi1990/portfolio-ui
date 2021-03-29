import MyCard from './Card.vue';

export default {
  title: 'Example/Card',
  component: MyCard,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: [] }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCard },
  template: '<my-card @onClick="onClick" v-bind="$props" />'
});

export const Primary = Template.bind({});
