import PortfoliemMobileHeader from './PortfoliemMobileHeader.vue';

export default {
  title: 'Portfoliem/Header',
  component: PortfoliemMobileHeader
};

export const MobileHeader = () => ({
  components: { PortfoliemMobileHeader },
  template: '<portfoliem-mobile-header />'
});

MobileHeader.storyName = 'Portfoliem Mobile Header';
