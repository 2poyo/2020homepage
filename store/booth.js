import Vuex from 'vuex';

export const state = () => ({
  shop: [
    { title: 'やきそば制作委員会', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},//listが無ければ書かない
    { title: 'バスケ部', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', list: [{name: "空き缶", price:110},{name: "焼きそばパン", price:130},{name: "ペットボトル", price:140}]},
  ],
  attraction: [
    { title: 'バレーボール部', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', content: "わなげをします"},
    { title: 'サッカー部', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg'},//contentが無ければ書かない
  ],
  lab: [
    {"content": "fff"},
  ]
})