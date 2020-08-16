import MyCard from './Card.vue';

export default {
  title: 'Example/Card',
  component: MyCard,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCard },
  template: '<my-card @onClick="onClick" v-bind="$props" />'
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Card'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Card'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Card'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Card'
};
