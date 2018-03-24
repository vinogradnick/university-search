/* eslint-disable no-trailing-spaces */
import Secret from '@/api/SecretStorage'
export default {
  namespaced: true,

  state: {
    educationPrograms: []

  },

  mutations: {
    loadPrograms: (state) => {
      state.educationPrograms = Secret._educationprograms
    }

  },

  actions: {},

  getters: {
    getEducationPrograms: (state, id) => {
      // todo подумать над получением програм обучения хм...
      return state.universitylist[id].educationPrograms
    },
    all_programs: (state) => {
      return Secret._educationprograms
    }
  }
}
