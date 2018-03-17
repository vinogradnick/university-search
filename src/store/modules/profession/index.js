/* eslint-disable no-trailing-spaces */
export default{
  state: {
    professions: [
      {
        id: 1,
        name: 'professionName',
        about: 'about',
        educationPrograms: [],
        countPrograms: 0,
        countUniversities: 0,
        perspective: 0,
        subjests: [],
        priceEducation: 0,
        rate: 20
      }
    ]
  },
  namespaced: true,

  mutations: {

  },

  actions: {

  },

  getters: {


    getProfessionList: (state) => {
      return state.professions
    },
  }

}
