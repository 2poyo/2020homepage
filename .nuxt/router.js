import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _15534d1e = () => interopDefault(import('../pages/booth.vue' /* webpackChunkName: "pages/booth" */))
const _5fe84664 = () => interopDefault(import('../pages/else.vue' /* webpackChunkName: "pages/else" */))
const _6eb99655 = () => interopDefault(import('../pages/event.vue' /* webpackChunkName: "pages/event" */))
const _072f4aca = () => interopDefault(import('../pages/location.vue' /* webpackChunkName: "pages/location" */))
const _3cb8708d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/booth",
    component: _15534d1e,
    name: "booth"
  }, {
    path: "/else",
    component: _5fe84664,
    name: "else"
  }, {
    path: "/event",
    component: _6eb99655,
    name: "event"
  }, {
    path: "/location",
    component: _072f4aca,
    name: "location"
  }, {
    path: "/",
    component: _3cb8708d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
