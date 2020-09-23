import Vuex from 'vuex';

export const state = () => ({
  shop: [
    { title: 'やきそば制作委員会', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', list: [{name: "空き缶", price:110},{name: "焼きそばパン", price:130},{name: "ペットボトル", price:140}]},
    { title: 'バスケ部', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', list: [{name: "空き缶", price:110},{name: "焼きそばパン", price:130},{name: "ペットボトル", price:140}]},
  ],
  attraction: [
    {"content": "ggg"}
  ],
  lab: [
    {"content": "fff"},
  ]
})