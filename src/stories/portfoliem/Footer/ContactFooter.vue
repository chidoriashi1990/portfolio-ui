<template>
  <v-footer class="d-flex flex-column">
    <v-card tile flat class="transparent">
      <v-card tile flat class="d-flex justify-center transparent">
        <!-- title -->
        <v-card-title>
          <div class="title-style">
            {{ title }}
          </div>
        </v-card-title>
      </v-card>
      <!-- section bar -->
      <v-card
        color="black"
        class="d-flex justify-center"
        height="10"
        width="auto"
        flat
        tile
      >
      </v-card>
      <!-- action buttons -->
      <v-card tile flat class="my-10 transparent">
        <v-card-actions class="white--text pt-0">
          <div v-for="button in actionButtons" :key="button.icon">
            <v-btn
              fab
              small
              dark
              class="mx-2"
              :href="button.href"
              target="_blank"
            >
              <v-icon dark>{{ button.icon }}</v-icon>
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>

      <!--  -->
      <v-card tile flat class="d-flex justify-center transparent">
        <v-card-text class="pt-0 text-center">
          <strong class="text-body-2">
            Copyright © {{ new Date().getFullYear() }} Yusuke Miyakawa
          </strong>
        </v-card-text>
      </v-card>
    </v-card>
  </v-footer>
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
    },
    actionButtons: {
      type: Array,
      required: true
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
