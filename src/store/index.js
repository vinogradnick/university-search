import Vuex from 'vuex'
import Vue from 'vue'
import universitites from './modules/universities/index'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    universitites
  },
  plugins: [createLogger()],
  strict: process.env.NODE_ENV !== 'production'
})
