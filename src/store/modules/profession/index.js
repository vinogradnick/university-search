/* eslint-disable no-trailing-spaces */
import Secret from '@/api/SecretStorage'
export default{
  state: {
    professions: [

    ]
  },
  namespaced: true,

  mutations: {
    loadList: function (state) {
      state.professions = Secret._professions
    }

  },

  actions: {
    LoadProfession: ({state, commit}) => {
      commit('loadList')
    }

  },

  getters: {
    getProfessionList: (state) => {
      return state.professions
    }
  }

}
