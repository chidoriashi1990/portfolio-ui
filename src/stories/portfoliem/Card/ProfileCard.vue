<template>
  <v-card class="d-flex justify-space-between mb-6" flat>
    <v-card>
      <v-container>
        <v-row dense>
          <v-col cols="4">
            <v-card elevation="0" class="px-1">
              <v-img
                src="https://avatars.githubusercontent.com/u/3616178?v=4"
                alt="Profile image"
                :aspect-ratio="1 / 1"
                width="180"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card-title class="headline font-weight-bold">
              Yusuke Miyakawa
            </v-card-title>
            <v-card-text>
              Software Engineer & Web Development.
            </v-card-text>
            <v-card-actions>
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
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'ProfileCard',
  data: () => ({
    actionButtons: [
      {
        icon: 'mdi-email',
        href: 'mailto:chidoriashi00918@gmail.com'
      },
      {
        icon: 'mdi-linkedin',
        href: 'https://www.linkedin.com/in/yusuke-miyakawa-a0a219191/'
      },
      {
        icon: 'mdi-facebook',
        href: 'https://www.facebook.com/YuM1909'
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com/MiyakawaYusuke'
      },
      {
        icon: 'mdi-github',
        href: 'https://github.com/chidoriashi1990'
      }
    ]
  })
};
</script>
