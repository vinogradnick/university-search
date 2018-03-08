import Vuex from 'vuex'
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'

const store = new Vuex.Store({
    // ...
    plugins: [createLogger()],
    strict:process.env.NODE_ENV !== 'production'
})
export default store;