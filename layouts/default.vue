<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-bottom-navigation
      hide-on-scroll
      grow
      color="green lighten-1"
    >

      <v-btn>
        <span>模擬店一覧</span>
        <v-icon>mdi-store</v-icon>
      </v-btn>

      <v-btn>
        <span>イベント情報</span>
        <v-icon>mdi-calendar-clock</v-icon>
      </v-btn>

      <v-btn>
        <span>マップ</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        activeBtn: 0,
      }
    }
  }
</script>
