<template>
  <v-card
    :dark="switchValue"
    rounded="xl"
    elevation="0"
    outlined
    class="d-inline-flex px-8 py-2"
    min-width="242"
    min-height="106"
  >
    <v-card-actions>
      <v-switch
        v-model="switchValue"
        @click="$emit('darkMode', switchValue)"
        inset
        color="purple"
      />
      <v-btn fab x-large elevation="0" :ripple="false" class="ml-8">
        <v-icon fab color="yellow darken-1">
          mdi-weather-night
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DarkModeSwitch',
  data: () => ({
    switchValue: false
  })
};
</script>
