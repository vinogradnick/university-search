import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user/index'
import university from './modules/university/index'
import profession from './modules/profession/index'
import studyprogram from './modules/studyprogram/index'

import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: user,
    university: university,
    studypgrogram: studyprogram,
    profession: profession
  },
  plugins: [createLogger()],
  strict: false
})
