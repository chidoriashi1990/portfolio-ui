<template>
  <v-container>
    <v-row>
      <v-card class="mx-auto" min-width="300">
        <v-card-text class="white--text teal lighten-1">
          <v-row>
            <v-col></v-col>
            <v-col>
              <div class="subtitle-2">
                契約プラン
              </div>
              <div class="white--text display-1">
                <center>
                  Business
                </center>
              </div>
            </v-col>
            <v-col class="py-0">
              <div class="my-0 text-right">
                <v-btn color="white" icon small>
                  <v-icon>mdi-information</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider />

        <div class="px-3 py-3">
          <v-row>
            <v-col>
              <div class="mb-3 subtitle-2">
                ユーザー数
              </div>
              <div class="display-1">
                <center>
                  5
                </center>
              </div>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <div class="mb-3 subtitle-2">
                データ容量
              </div>
              <div class="display-1">
                <center>3 <span class="title">GB</span></center>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({})
};
</script>
