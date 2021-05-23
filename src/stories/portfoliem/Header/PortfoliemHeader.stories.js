import { action } from '@storybook/addon-actions';
import PortfoliemHeader from './PortfoliemHeader.vue';

export default {
  title: 'Portfoliem/Header',
  component: PortfoliemHeader
};

export const Header = () => ({
  components: { PortfoliemHeader },
  template:
    '<portfoliem-header @menu="onClickMenu" @transMode="onClickTranslation" />',
  methods: {
    onClickMenu: action('menu'),
    onClickTranslation: action('translation')
  }
});

Header.storyName = 'Portfoliem Header';
