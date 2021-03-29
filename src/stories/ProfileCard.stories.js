import ProfileCard from './ProfileCard.vue';

export default {
  title: 'Example/Card',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: [] }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProfileCard },
  template: '<profile-card @onClick="onClick" v-bind="$props" />'
});

export const Profile = Template.bind({});
