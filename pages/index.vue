<template>
  <div>

    <v-card class="mb-5">
      <v-card-title>くぬぎだ祭について</v-card-title>

      <v-card-actions>
        <v-card-subtitle>文化祭実行委員長からのメッセージ</v-card-subtitle>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            本日はくぬぎだ祭にご来場いただきありがとうございます。
            くぬぎだ祭は校内外の模擬店や体育館の各部活のパフォーマンス、学科企画など楽しんでいただける場所がたくさんあります。
            特に昨年全国大会に進出したロボコンは生で見られる数少ない機会なのでぜひご覧になっていただけたらと思います。
            今回のくぬぎだ祭のテーマは「宇宙」です。構内にある装飾などはこの宇宙をイメージして作られているので、ぜひ私たち高専生が作り出す世界観を触れていってください。
            また、昨年に比べて校内にカフェやアトラクション、部活の展示などを増やしたので、さらに進化した文化祭になると思います。
            実行委員や模擬店学生一同全力で盛り上げてますのでくぬぎだ祭をお楽しみください！
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    <v-card class="mb-5">
      <v-card-title>※注意事項</v-card-title>
      <v-card-text>
        本校の文化祭で撮影した、音声の含まれる全てのメディアについて、ツイッターでの投稿はご遠慮ください。詳細は
        <a href="https://www.jasrac.or.jp/info/network/index.html">JASRACのホームページ</a>をご覧ください
      </v-card-text>
    </v-card>

    <v-card class="mb-5" @click="$router.push('/illustration')">
      <v-img
        :src="cards[0].src"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title v-text="cards[0].title"></v-card-title>
      </v-img>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-comment-text-outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>



    <v-card class="mb-5">
      <v-card-title>文化祭アンケート</v-card-title>
      <v-card-text>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2pjOqwDdZxMLVkKbQD3ORQhjetCZ7eB4Ih-ivmZ0H8B2C4A/viewform">こちら</a>をクリックするとGoogleFormに飛びます
      </v-card-text>
    </v-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      cards: [
        { title: 'みんなのイラスト', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ]
    }
  }
}
</script>