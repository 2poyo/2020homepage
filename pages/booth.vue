<template>
  <div>
    <v-card class="mb-5">
      <v-card-actions>
        <v-icon color="blue lighten-1">mdi-food</v-icon>
        <v-card-title>飲食模擬店</v-card-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="shopWindow = !shopWindow"
        >
          <v-icon>{{ shopWindow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card v-show="shopWindow">
          <v-divider></v-divider>
          <v-col v-for="shop in shopList" :key="shop.id" :cols="12">
            <v-card>
              <v-img
                :src="shop.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                @click.stop="onClickImg(shop.src)"
              >
                <v-btn small right>場所</v-btn>
                <v-card-title v-text="shop.title"></v-card-title>


              </v-img>

              <v-flex v-if="shop.list">
                <v-simple-table
                  class="text-center"
                  dense
                  fixed-header
                >
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center">品名</th>
                        <th class="text-center">値段</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in shop.list" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}円</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-flex>
            </v-card>
          </v-col>
        </v-card>
      </v-expand-transition>
    </v-card>

    <v-card class="mb-5">
      <v-card-actions>
        <v-icon color="brown">mdi-basketball</v-icon>
        <v-card-title>アトラクション</v-card-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="attractionWindow = !attractionWindow"
        >
          <v-icon>{{ attractionWindow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card v-show="attractionWindow">
          <v-divider></v-divider>
          <v-col v-for="attraction in attractionList" :key="attraction.id" :cols="12">
            <v-card>
              <v-img
                :src="attraction.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                @click.stop="onClickImg(attraction.src)"
              >
                <v-card-title v-text="attraction.title"></v-card-title>
              </v-img>

              <div v-if="attraction.content">
                <v-card-text>{{attraction.content}}</v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-card>
      </v-expand-transition>
    </v-card>

    <v-card class="mb-5">
      <v-card-actions>
        <v-icon color="gray">mdi-cog-outline</v-icon>
        <v-card-title>研究室公開</v-card-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="labWindow = !labWindow"
        >
          <v-icon>{{ labWindow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card v-show="labWindow">
          <v-divider></v-divider>
          <v-col v-for="shop in shopList" :key="shop.id" :cols="12">
            <v-card>
              <v-img
                :src="shop.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="shop.title"></v-card-title>
              </v-img>

              <v-flex>
                <v-simple-table
                  class="text-center"
                  dense
                  fixed-header
                >
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center">品名</th>
                        <th class="text-center">値段</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in shop.list" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}円</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-flex>
            </v-card>
          </v-col>
        </v-card>
      </v-expand-transition>
    </v-card>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >

      <v-card class="pa-2" color="white">
        <v-img
          :src="currentSrc"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
        </v-img>
      </v-card>

    </v-dialog>

  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data: function() {
    return {
      shopWindow: false,
      attractionWindow: false,
      labWindow: false,
      dialog: false,
      currentSrc: '',
    }
  },
  computed: {
    shopList() {
        return this.$store.state.booth.shop
      },
    attractionList() {
      return this.$store.state.booth.attraction
    },
    labList() {
      return this.$store.state.booth.lab
    }
  },
  methods: {
    onClickImg(img){
      this.currentSrc = img;
      this.dialog = true;
    }
  }
}
</script>