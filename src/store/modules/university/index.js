/* eslint-disable no-trailing-spaces */
import {Database} from '../../../api/databaseWorker'
import Secret from '../../../api/SecretStorage'
export default{
  namespaced: true,

  state: {
    universitylist: []

  },

  mutations: {
    // TOdo  make fill database from firebase
    setData: (state, {type, data}) => {
      console.log(data)
      state[type] = data
    },
    loadDatabase: (state) => {
      // todo xm.... i need to more time for this
      let universities = Database.ref('universitylist/0').once('value')
      console.log(universities)
    },
    loadLocal: (state) => {
      state.universitylist = Secret._univers
    },
  },

  actions: {
    searching ({state, commit}) {
      console.log('change')
      commit('setData', {type: 'universitylist', data: null})
    },
    loadFirebase: ({state, commit}) => {
      console.log('firebas is loading')
      commit('loadDatabase')
    },
    professionlistOrder: ({state, commit}) => {
      // Todo make professionlist ordering
      console.log('profession list order')
      commit('orderProfession')
    },
    loadLocalStorage: ({state, commit}) => {
      console.log("hui");
      commit('loadLocal')
    }

  },

  getters: {
    GET_UNIVERSTIY_BY_EGE_VALUE: function (state) {
      const list = state.universitylist.educationPrograms.filter(subj => subj.subject === state.selected_subjects)
      console.log(list)
      return list
    },
    getFilteredUniversities: (state) => {
      const subjects = state.selected_subjects
      const univer_subj = state.universitylist.ed
    },
    // Если условие не выполняется отменить запрос и вернуть пустой список

    all_univers: (state) => {
      return state.universitylist
    },
    currentUniversity (state) {
      return (id) => {
        return state.universitylist.find(univer => univer.id === id)
      }
    },
    GET_STATES: (state) => {
      return state.universitylist
    }

  }

}
