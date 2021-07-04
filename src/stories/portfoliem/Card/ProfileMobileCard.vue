<template>
  <v-card class="d-flex justify-space-between mb-6" flat>
    <v-card width="290px" class="pa-5">
      <center>
        <v-card elevation="0" class="px-1">
          <v-img
            :src="profileImage"
            alt="Profile image"
            :aspect-ratio="1 / 1"
            width="200"
          ></v-img>
        </v-card>
      </center>

      <p class="headline font-weight-bold text-center py-3 ma-0">
        Yusuke Miyakawa
      </p>

      <p class="text-center pb-3 ma-0">
        Software Engineer & Web Development.
      </p>

      <div
        v-for="button in actionButtons"
        :key="button.icon"
        class="text-center my-3"
      >
        <v-btn
          large
          dark
          class="text-capitalize font-weight-bold"
          :href="button.href"
          target="_blank"
          block
        >
          <v-icon dark left>{{ button.icon }}</v-icon>
          {{ button.text }}
        </v-btn>
      </div>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    profileImage: {
      type: String,
      required: true
    },
    actionButtons: {
      type: Array,
      required: true
    }
  }
};
</script>
