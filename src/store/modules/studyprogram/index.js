/* eslint-disable no-trailing-spaces */
export default{
  namespaced:true,

  state: {

  },

  mutations: {

  },

  actions: {

  },

  getters: {
    getEducationPrograms: (state, id) => {
      // todo подумать над получением програм обучения хм...
      return state.universitylist[id].educationPrograms
    }
  }

}
