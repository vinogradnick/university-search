import Vue from 'vue'
import App from './App'
import router from '@/router/index'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/index'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'


Vue.use(Vuetify)
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
