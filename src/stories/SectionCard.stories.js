import SectionCard from './SectionCard.vue';

export default {
  title: 'Example/Card',
  component: SectionCard
};

export const Template = () => ({
  components: { SectionCard },
  template:
    '<section-card title="about"><template v-slot:text>text</template></section-card>'
});

Template.storyName = 'SectionCard';
