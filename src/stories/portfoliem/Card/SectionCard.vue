<template>
  <v-container>
    <v-row>
      <v-card class="pa-3 mx-auto" min-width="500" max-width="500">
        <!-- title -->
        <v-card class="d-flex justify-center" flat tile>
          <v-card-title>
            <div class="title-style">
              {{ title }}
            </div>
          </v-card-title>
        </v-card>
        <!-- section bar -->
        <v-card class="d-flex justify-center" flat tile>
          <v-card color="black" height="10" width="150" flat tile> </v-card>
        </v-card>

        <v-card-text>
          <slot name="text"></slot>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SectionCard',
  data: () => ({}),
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

div.title-style {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 700;
  font-size: 2.125rem;
}
</style>
