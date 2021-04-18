import PortfoliemMobileHeader from './PortfoliemMobileHeader.vue';

export default {
  title: 'Example/Header',
  component: PortfoliemMobileHeader
};

export const MobileHeader = () => ({
  components: { PortfoliemMobileHeader },
  template: '<portfoliem-mobile-header />'
});

MobileHeader.storyName = 'Portfoliem Mobile Header';
