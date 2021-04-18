<template>
  <v-app-bar dark>
    <v-app-bar-nav-icon
      @click.stop="$emit('naviOpen', (naviOpen = !naviOpen))"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <!-- dark mode button -->
    <v-btn fab small :light="!darkMode" elevation="0" @click="changeDarkMode()">
      <v-icon fab color="yellow darken-1">
        mdi-weather-night
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'PortfoliemHeader',
  data: () => ({
    darkMode: false,
    naviOpen: false
  }),
  methods: {
    changeDarkMode() {
      this.darkMode = !this.darkMode;
      this.$emit('darkMode', this.darkMode);
    }
  }
};
</script>
