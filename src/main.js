import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import NotFound from './NotFound'

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
    console
    if (router.history.current.fullPath === '/') {
      return h(App)
    } else {
      return h(NotFound)
    }
  },
}).$mount('#app')
