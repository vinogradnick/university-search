import Vuex from 'vuex'
import Vue from 'vue'
import {state} from './modules/state'
import {actions} from './modules/actions'
import {mutations} from './modules/mutations'
import {getters} from './modules/getters'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createLogger()],
  strict: false
})
