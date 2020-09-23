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
          <v-col v-for="shop in shopList" :cols="12">
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
                      <tr v-for="item in shop.list">
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
          <v-col v-for="shop in shopList" :cols="12">
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
                      <tr v-for="item in shop.list">
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
          <v-col v-for="shop in shopList" :cols="12">
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
                      <tr v-for="item in shop.list">
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

  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data: function() {
    return {
      shopWindow: false,
      attractionWindow: false,
      labWindow: false
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
  }
}
</script>