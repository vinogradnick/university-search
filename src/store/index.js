import Vuex from 'vuex'
import Vue from 'vue'
import universitites from './modules/universities/index'
import user from './modules/user/index'

import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    universitites
  },
  plugins: [createLogger()],
  strict: false
})
