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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { MyCard },
  template: '<my-card @onClick="onClick" v-bind="$props" />'
});

export const Primary = Template.bind({});
