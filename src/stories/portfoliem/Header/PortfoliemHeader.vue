<template>
  <v-app-bar dark>
    <v-container fluid class="d-flex justify-end align-center">
      <!-- navigation buttons -->
      <v-btn
        tile
        x-large
        class="text-lowercase"
        v-for="navbutton in navButtons"
        :key="navbutton.label"
        :href="navbutton.href"
      >
        {{ navbutton.label }}
      </v-btn>

      <!-- Translate button -->
      <v-menu rounded="b-xl" offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn class="white--text text-capitalize" v-bind="attrs" v-on="on">
            <v-icon class="mr-3">mdi-translate</v-icon>
            <div class="button-style">{{ transName }}</div>
            <v-icon class="ml-3">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list shaped>
          <v-list-item-group v-model="selectItemIndex" color="primary">
            <v-list-item
              v-for="(item, i) in transItems"
              :key="i"
              link
              @click="transModeName(item.val)"
            >
              <v-list-item-title v-text="item.label"></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'PortfoliemHeader',
  data: () => ({
    navButtons: [
      { label: 'about', href: '' },
      { label: 'works', href: '' },
      { label: 'contact', href: '' }
    ],
    selectItemIndex: 0,
    transName: 'English',
    transModel: 'en',
    transItems: [
      { label: 'English', val: 'en' },
      { label: '日本語', val: 'jp' }
    ]
  }),
  methods: {
    transModeName(transModel) {
      for (let i = 0; i < this.transItems.length; i++) {
        if (this.transItems[i].val === transModel) {
          this.selectItemIndex = i;
          this.transName = this.transItems[i].label;
          this.transModel = this.transItems[i].val;
          this.$emit('transMode', this.transModel);
        }
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

p.button-style {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 700;
  font-size: 2.125rem;
}
</style>
