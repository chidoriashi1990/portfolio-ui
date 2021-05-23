<template>
  <v-container>
    <v-row align="start">
      <v-col cols="1">
        <div class="d-flex justify-center">
          <v-slot name="left-side"> </v-slot>
        </div>
      </v-col>
      <v-col cols="10">
        <div class="d-flex justify-center">
          <div class="d-flex flex-column">
            <slot name="main">
              <v-skeleton-loader type="card" v-bind="cardAttrs" />
              <v-skeleton-loader type="card" v-bind="cardAttrs" />
              <v-skeleton-loader type="card" v-bind="cardAttrs" />
            </slot>
          </div>
        </div>
      </v-col>
      <v-col cols="1">
        <div class="d-flex justify-center">
          <v-slot name="right-side">
            <v-skeleton-loader type="card" v-bind="switchAttrs" />
          </v-slot>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProfileDesktop',
  data: () => ({
    cardAttrs: {
      class: 'mb-12',
      width: '500',
      boilerplate: true,
      elevation: 2
    },
    switchAttrs: {
      width: '242',
      height: '106',
      boilerplate: true,
      elevation: 2
    }
  })
};
</script>
