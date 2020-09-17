import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import NotFound from './NotFound.vue'
import Bill from './Bill.vue'
import { publicPath } from '../vue.config'
import './assets/style.scss'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [],
})

new Vue({
  router,
  render: (h) => {
    if (router.history.current.fullPath === publicPath + '/') {
      return h(App, { props: { path: publicPath } })
    } else if (router.history.current.fullPath === publicPath + '/bill') {
      return h(Bill, { props: { path: publicPath } })
    } else {
      return h(NotFound)
    }
  },
}).$mount('#app')
