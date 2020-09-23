<template>
  <v-app>
    <v-app-bar color="green lighten-1" dark app>
      <v-toolbar-title @click="$router.push('/')">くぬぎだ祭{{ new Date().getFullYear() }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="pb-10">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-bottom-navigation
      grow
      fixed
      light
      color="green lighten-1"
    >

      <v-btn @click="$router.push('/booth')">
        <span>模擬店/研究室</span>
        <v-icon>mdi-store</v-icon>
      </v-btn>

      <v-btn @click="$router.push('/event')">
        <span>イベント情報</span>
        <v-icon>mdi-calendar-clock</v-icon>
      </v-btn>

      <v-btn @click="$router.push('/location')">
        <span>マップ</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
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