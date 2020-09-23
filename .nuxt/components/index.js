export { default as Logo } from '../../components/Logo.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as BackBtn } from '../../components/backBtn.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/VuetifyLogo'}" */).then(c => c.default || c)
export const LazyBackBtn = import('../../components/backBtn.vue' /* webpackChunkName: "components/backBtn'}" */).then(c => c.default || c)
