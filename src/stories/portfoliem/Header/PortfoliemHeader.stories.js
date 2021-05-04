import PortfoliemHeader from './PortfoliemHeader.vue';

export default {
  title: 'Portfoliem/Header',
  component: PortfoliemHeader
};

export const Header = () => ({
  components: { PortfoliemHeader },
  template: '<portfoliem-header />'
});

Header.storyName = 'Portfoliem Header';
